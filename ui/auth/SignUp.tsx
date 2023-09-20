'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PagesLinks, TermsLinks } from '#/constants/links';
import { handleInputRequired, validateEmail } from '#/utils/helpers';
import { AuthError } from '#/constants/authError';
import Input from '#/ui/shared/form/Input';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '#/types/supabase';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [terms, setTerms] = useState(false);
  const [gdpr, setGdpr] = useState(false);
  const [cookie, setCookie] = useState(false);
  const [termsError, setTermsError] = useState('');
  const [signUpError, setSignUpError] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async (email: string, password: string) => {
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
    if (password !== confirmPassword) {
      setConfirmPasswordError('Parolele trebuie sa fie identice.');
      return;
    }
    if (!terms || !gdpr || !cookie) {
      setTermsError('Toate campurile sunt obligatorii.');
      return;
    }

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signUp({ email, password });

      if (!error && !user)
        alert('Verifică-ți e-mailul pentru linkul de autentificare');
      if (error) console.log('Error returned: ', error.message);
      if (
        error?.message === AuthError.UserAlreadyRegistered ||
        error?.message === AuthError.EmailAlreadyRegistered
      ) {
        setSignUpError('Adresa de email este deja inregistrata.');
        return;
      }
      if (user) {
        router.push('/profil');
      }
    } catch (error: any) {
      console.log('Error thrown:', error.message);
      alert(error.error_description || error);
    }
  };

  return (
    <section className="min-h-screen bg-gray-700 bg-opacity-60 bg-[url('/images/auth/signup.jpg')] bg-cover bg-center bg-no-repeat  bg-blend-multiply ">
      <div className="pt:mt-0 mx-auto flex h-screen flex-col items-center justify-center px-6 py-8">
        <div className="w-full rounded-lg bg-gray-800 shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6 lg:space-y-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Inregistrare
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
                  setSignUpError('');
                }}
                handleBlur={() => {
                  setEmailError('');
                  setSignUpError('');
                  handleInputRequired(email)
                    ? setEmailError(AuthError.InputRequired)
                    : null;
                }}
              />
              <Input
                name={'password'}
                value={password}
                label={'Parola'}
                placeholder={'••••••••'}
                error={passwordError}
                type={'password'}
                handleChange={(event) => {
                  setPassword(event.target.value);
                  setPasswordError('');
                  setSignUpError('');
                }}
                handleBlur={() => {
                  setPasswordError('');
                  setSignUpError('');
                  handleInputRequired(password)
                    ? setPasswordError(AuthError.InputRequired)
                    : null;
                }}
              />
              <Input
                name={'confirm-password'}
                value={confirmPassword}
                label={'Confirma Parola'}
                placeholder={'••••••••'}
                error={confirmPasswordError}
                type={'password'}
                handleChange={(event) => {
                  setConfirmPassword(event.target.value);
                  setConfirmPasswordError('');
                  setSignUpError('');
                }}
                handleBlur={() => {
                  setConfirmPasswordError('');
                  setSignUpError('');
                  handleInputRequired(confirmPassword)
                    ? setConfirmPasswordError(AuthError.InputRequired)
                    : null;
                }}
              />
              {/*Terms*/}
              <p className="mb-2 block text-sm font-medium text-white">
                Sunt de acord cu urmatoarele:
                {termsError ? (
                  <p className="mt-2 block text-xs font-medium text-red-500">
                    {termsError}
                  </p>
                ) : null}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 h-4 w-4 rounded border border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                      required
                      onChange={() => {
                        setTerms(true);
                        setTermsError('');
                        setSignUpError('');
                      }}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      <Link
                        href={TermsLinks.termeniSiConditii.link}
                        className="text-teal-500"
                      >
                        {TermsLinks.termeniSiConditii.name}
                      </Link>{' '}
                      *
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 h-4 w-4 rounded border border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                      required
                      onChange={() => {
                        setGdpr(true);
                        setTermsError('');
                        setSignUpError('');
                      }}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">
                      <Link
                        href={TermsLinks.gdpr.link}
                        className="text-teal-500"
                      >
                        {TermsLinks.gdpr.name}
                      </Link>{' '}
                      *
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 h-4 w-4 rounded border border-gray-600 bg-gray-700 ring-offset-gray-800 focus:ring-primary-600"
                      required
                      onChange={() => {
                        setCookie(true);
                        setTermsError('');
                        setSignUpError('');
                      }}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-300">
                      <Link
                        href={TermsLinks.cookies.link}
                        className="text-teal-500"
                      >
                        {TermsLinks.cookies.name}
                      </Link>{' '}
                      *
                    </label>
                  </div>
                </div>
              </div>
              {signUpError ? (
                <p className="mt-2 block text-xs font-medium text-red-500">
                  {signUpError}
                </p>
              ) : null}
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-800"
                onClick={(e) => {
                  e.preventDefault();
                  handleSignUp(email, password);
                }}
              >
                Intra in cont
              </button>
              <div className="flex justify-between text-sm font-light ">
                <Link
                  href={PagesLinks.auth.link}
                  className="font-medium text-primary-500 hover:underline"
                >
                  Ai deja un cont?
                </Link>
                <Link
                  href={PagesLinks.forgotPassword.link}
                  className="text-sm font-medium text-primary-500 hover:underline"
                >
                  Ai uitat parola?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
