'use client';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PagesLinks, TermsLinks } from '#/constants/links';
import { validateEmail } from '#/utils/helpers';
import { AuthError } from '#/constants/authError';

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
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

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
      } = await supabaseClient.auth.signUp({ email, password });

      if (!error && !user)
        alert('Verifică-ți e-mailul pentru linkul de autentificare');
      if (error) console.log('Error returned: ', error.message);
      if (error?.message === AuthError.UserAlreadyRegistered) {
        setSignUpError('Adresa de email este deja inregistrata.');
        return;
      }
    } catch (error: any) {
      console.log('Error thrown:', error.message);
      alert(error.error_description || error);
    }
    router.push('/cont');
  };

  return (
    <section className="bg-gray-700 bg-opacity-60 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen">
        <div className="w-full rounded-lg bg-white shadow dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6 lg:space-y-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Inregistrare
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                  value={email}
                  placeholder="nume@email.com"
                  required={true}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError('');
                    setSignUpError('');
                  }}
                />
                {emailError ? (
                  <div className="mt-2 block text-xs font-medium dark:text-red-600">
                    {emailError}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Parola
                </label>
                <input
                  type="password"
                  name="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                  required={true}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setPasswordError('');
                    setSignUpError('');
                  }}
                />
                {passwordError ? (
                  <div className="mt-2 block text-xs font-medium dark:text-red-600">
                    {passwordError}
                  </div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirma Parola
                </label>
                <input
                  type="password"
                  name="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
                  required={true}
                  value={confirmPassword}
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                    setConfirmPasswordError('');
                    setSignUpError('');
                  }}
                />
                {confirmPasswordError ? (
                  <div className="mt-2 block text-xs font-medium dark:text-red-600">
                    {confirmPasswordError}
                  </div>
                ) : null}
              </div>
              {/*Terms*/}
              <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Sunt de acord cu urmatoarele:
                {termsError ? (
                  <small className="mt-2 block text-xs font-medium dark:text-red-600">
                    {termsError}
                  </small>
                ) : null}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
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
                      className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      required
                      onChange={() => {
                        setGdpr(true);
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
                      className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                      required
                      onChange={() => {
                        setCookie(true);
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
                <div className="mt-2 block text-xs font-medium dark:text-red-600">
                  {signUpError}
                </div>
              ) : null}
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={(e) => {
                  e.preventDefault();
                  handleSignUp(email, password);
                }}
              >
                Intra in cont
              </button>
              <p className="flex justify-between text-sm font-light text-gray-500 dark:text-gray-300">
                <Link
                  href={PagesLinks.auth.link}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Ai deja un cont?
                </Link>
                <Link
                  href={PagesLinks.forgotPassword.link}
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Ai uitat parola?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
