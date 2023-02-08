'use client';
import { useState } from 'react';
import { validateEmail } from '#/utils/helpers';
import { TypedSupabaseClient } from '#/types/types';

export default function ForgotPassword({
  supabase,
}: {
  supabase: TypedSupabaseClient;
}) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [forgotPasswordError, setForgotPasswordError] = useState('');

  async function forgotPassword(email: string) {
    if (email === null || email === '') {
      setEmailError('Trebuie să-ți introduci adresa de e-mail.');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Adresa de e-mail nu este validă.');
      return;
    }

    let { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      console.log('Error: ', error.message);
    } else {
      setForgotPasswordError('E-mailul de recuperare a parolei a fost trimis.');
    }
  }

  return (
    <section className="min-h-screen bg-gray-700 bg-opacity-60 bg-[url('/images/auth/login.jpg')] bg-cover bg-center bg-no-repeat  bg-blend-multiply ">
      <div className="pt:mt-0 mx-auto flex h-screen flex-col items-center justify-center px-6 py-8">
        <div className="w-full rounded-lg bg-gray-800 shadow sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6 lg:space-y-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
              Resetare parolă
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
                  className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-primary-600 focus:ring-primary-600 sm:text-sm"
                  value={email}
                  placeholder="nume@email.com"
                  required={true}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError('');
                    setForgotPasswordError('');
                  }}
                />
                {emailError ? (
                  <p className="mt-2 block text-xs font-medium text-red-500">
                    {emailError}
                  </p>
                ) : null}
              </div>
              {forgotPasswordError ? (
                <p className="mt-2 block text-xs font-medium text-red-500">
                  {forgotPasswordError}
                </p>
              ) : null}
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-800"
                onClick={(e) => {
                  e.preventDefault();
                  forgotPassword(email);
                }}
              >
                Resetare parola
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
