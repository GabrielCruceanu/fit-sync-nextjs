'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { PagesLinks } from '#/constants/links';
import { validateEmail } from '#/utils/helpers';
import { AuthError } from '#/constants/authError';
import { TypedSupabaseClient } from '#/app/layout';

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
    } catch (error: any) {
      console.log('Error thrown:', error.message);
      alert(error.error_description || error);
    }
    router.push('/profil');
  };

  return (
    <section className="min-h-screen bg-gray-700 bg-opacity-60 bg-[url('/images/auth/login.jpg')] bg-cover bg-center bg-no-repeat  bg-blend-multiply ">
      <div className="pt:mt-0 mx-auto flex h-screen flex-col items-center justify-center px-6 py-8">
        <div className="w-full rounded-lg bg-gray-800 shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6 lg:space-y-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Bine ai revenit
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-600  bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
                  value={email}
                  placeholder="nume@email.com"
                  required={true}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError('');
                    setLoginError('');
                  }}
                />
                {emailError ? (
                  <p className="mt-2 block text-xs font-medium text-red-500">
                    {emailError}
                  </p>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Parola
                </label>
                <input
                  type="password"
                  name="password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-gray-900 text-white placeholder-gray-400 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
                  required={true}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setPasswordError('');
                    setLoginError('');
                  }}
                />
                {passwordError ? (
                  <p className="mt-2 block text-xs font-medium text-red-500">
                    {passwordError}
                  </p>
                ) : null}
              </div>
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
