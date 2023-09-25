'use client';
import { useState } from 'react';
import { handleInputRequired, validateEmail } from '#/utils/helpers';
import { TypedSupabaseClient } from '#/types';
import Input from '#/ui/shared/form/Input';
import { AuthError, InputError } from '#/types/Error';
import { PagesLinks } from '#/constants/links';
import { router } from 'next/client';

export default function UpdatePassword({
  supabase,
}: {
  supabase: TypedSupabaseClient;
}) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [updatePasswordMessage, setUpdatePasswordMessage] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [updateError, setUpdateError] = useState('');

  async function updatePassword(email: string, password: string) {
    setEmailError('');
    setPasswordError('');
    setUpdateError('');
    setUpdatePasswordMessage('');

    if (email === null || email === '') {
      setEmailError('Trebuie să-ți introduci adresa de e-mail.');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Adresa de e-mail nu este validă.');
      return;
    }
    if (password === null || password === '') {
      setPasswordError('Trebuie să-ți introduci parola.');
      return;
    }
    if (password.length < 8) {
      setPasswordError('Parola trebuie sa contină minimum 8 caractere.');
      return;
    }

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.updateUser({
        email,
        password,
        data: { hello: 'world' },
      });

      if (!error && !user)
        alert('Verifică-ți e-mailul pentru linkul de autentificare!');
      if (error) console.log('Error returned: ', error.message);
      if (error?.message === AuthError.EmailUsedToMuch) {
        setUpdateError(
          'Ai facut prea multe cerereri de resetare. Incearca mai tarziu.',
        );
        return;
      }
      if (error?.message === AuthError.NewPasswordNeedBeDifferent) {
        setUpdateError(
          'Parola noua ar trebui sa fie diferita de vechea parola.',
        );
        return;
      }
      if (error?.message) {
        setUpdateError(error?.message);
        return;
      }
      if (!error && user) {
        setUpdatePasswordMessage('Parola a fost schimbata cu success.');

        await router.push(PagesLinks.profile.link);
      }
    } catch (error: any) {
      console.log('Error thrown:', error.message);
      alert(error.error_description || error);
    }
  }

  return (
    <section className="min-h-screen bg-gray-700 bg-opacity-60 bg-[url('/images/auth/login.jpg')] bg-cover bg-center bg-no-repeat  bg-blend-multiply ">
      <div className="pt:mt-0 mx-auto flex h-screen flex-col items-center justify-center px-6 py-8">
        <div className="w-full rounded-lg bg-gray-800 shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6 lg:space-y-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Actualizare parola
            </h1>
            <form className="space-y-4 md:space-y-6">
              <Input
                name={'email'}
                value={email}
                label={'Email'}
                placeholder={'nume@email.com'}
                error={emailError}
                type={'email'}
                handleChange={(event) => {
                  setEmail(event.target.value);
                  setEmailError('');
                  setUpdatePasswordMessage('');
                }}
                handleBlur={() => {
                  setEmailError('');
                  setUpdatePasswordMessage('');
                  handleInputRequired(email)
                    ? setEmailError(InputError.InputRequired)
                    : null;
                }}
              />{' '}
              <Input
                name={'password'}
                value={password}
                label={'Parola noua'}
                placeholder={'••••••••'}
                error={passwordError}
                type={'password'}
                handleChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordError('');
                  setUpdateError('');
                }}
                handleBlur={() => {
                  setPasswordError('');
                  setUpdateError('');
                  handleInputRequired(password)
                    ? setPasswordError(InputError.InputRequired)
                    : null;
                }}
              />
              {updateError ? (
                <p className="mt-2 block text-xs font-medium text-red-500">
                  {updateError}
                </p>
              ) : null}
              {updatePasswordMessage ? (
                <p className="mt-2 block text-xs font-medium text-primary-500">
                  {updatePasswordMessage}
                </p>
              ) : null}
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-800"
                onClick={(e) => {
                  e.preventDefault();
                  updatePassword(email, password);
                }}
              >
                Actualizarea parola
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
