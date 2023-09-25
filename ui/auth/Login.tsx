'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PagesLinks } from '#/constants/links';
import { handleInputRequired, validateEmail } from '#/utils/helpers';
import { AuthError, InputError } from '#/types/Error';
import { TypedSupabaseClient } from '#/types';
import Input from '#/ui/shared/form/Input';
import { Button } from 'flowbite-react';

export default function Login({ supabase }: { supabase: TypedSupabaseClient }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
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
      } = await supabase.auth.signInWithPassword({ email, password });

      if (!error && !user)
        alert('Verifică-ți e-mailul pentru linkul de autentificare!');
      if (error) console.log('Error returned: ', error.message);
      if (error?.message === AuthError.InvalidLoginCredentials) {
        setLoginError('Adresa de email sau parola nu este valida');
        return;
      }
      if (error?.message === AuthError.EmailNotConfirmed) {
        setLoginError('Adresa de email nu a fost confirmata');
        return;
      }
    } catch (error: any) {
      console.log('Error thrown:', error.message);
      alert(error.error_description || error);
    } finally {
      router.push(PagesLinks.profile.link);
    }
  };

  async function loginWithGoogle() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: PagesLinks.profile.link,
        },
      });
      if (error) {
        setLoginError(error.message);
        return;
      }
    } catch (error: any) {
      console.log('Error thrown:', error.message);
      alert(error.error_description || error);
    }
  }
  async function loginWithFacebook() {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
          redirectTo: PagesLinks.profile.link,
        },
      });
      if (error) {
        setLoginError(error.message);
        return;
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
              Autentificare
            </h1>
            <div className="md:flex items-center space-x-0 space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
              <Button color="gray" className="w-full" onClick={loginWithGoogle}>
                <svg
                  aria-hidden
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13183_10121)">
                    <path
                      d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
                      fill="#3F83F8"
                    />
                    <path
                      d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13183_10121">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Google
              </Button>
              <Button
                color="gray"
                className="w-full"
                onClick={loginWithFacebook}
              >
                <svg
                  aria-hidden
                  className="mr-2 h-5 w-5 text-gray-900 dark:text-white"
                  viewBox="0 0 8 19"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clipRule="evenodd"
                  />
                </svg>
                Facebook
              </Button>
            </div>
            <div className="flex items-center">
              <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="px-5 text-center text-gray-300 dark:text-gray-400">
                sau
              </div>
              <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
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
                  setLoginError('');
                }}
                handleBlur={() => {
                  setEmailError('');
                  setLoginError('');
                  handleInputRequired(email)
                    ? setEmailError(InputError.InputRequired)
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
                  setLoginError('');
                }}
                handleBlur={() => {
                  setPasswordError('');
                  setLoginError('');
                  handleInputRequired(password)
                    ? setPasswordError(InputError.InputRequired)
                    : null;
                }}
              />
              {loginError ? (
                <p className="mt-2 block text-xs font-medium text-red-500">
                  {loginError}
                </p>
              ) : null}
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-800"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogin(email, password);
                }}
              >
                Intra in cont
              </button>
              <p className="flex justify-between text-sm font-light text-gray-300">
                <Link
                  href={PagesLinks.signUp.link}
                  className="font-medium text-primary-500 hover:underline"
                >
                  Inregistrare
                </Link>
                <Link
                  href={PagesLinks.forgotPassword.link}
                  className="text-sm font-medium text-primary-500 hover:underline"
                >
                  Resetare parola
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
