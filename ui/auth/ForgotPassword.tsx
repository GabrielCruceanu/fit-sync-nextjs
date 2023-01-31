'use client';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { validateEmail } from '#/utils/helpers';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [forgotPasswordError, setForgotPasswordError] = useState('');
  const supabaseClient = useSupabaseClient();

  async function forgotPassword(email: string) {
    if (email === null || email === '') {
      setEmailError('Trebuie să-ți introduci adresa de e-mail.');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Adresa de e-mail nu este validă.');
      return;
    }

    let { error } = await supabaseClient.auth.resetPasswordForEmail(email);
    if (error) {
      console.log('Error: ', error.message);
    } else {
      setForgotPasswordError('E-mailul de recuperare a parolei a fost trimis.');
    }
  }

  return (
    <section className="bg-gray-700 bg-opacity-60 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen">
        <div className="w-full rounded-lg bg-white shadow dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6 lg:space-y-8">
            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Resetare parolă
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
                    setForgotPasswordError('');
                  }}
                />
                {emailError ? (
                  <div className="mt-2 block text-xs font-medium dark:text-red-600">
                    {emailError}
                  </div>
                ) : null}
              </div>
              {forgotPasswordError ? (
                <div className="mt-2 block text-xs font-medium dark:text-red-600">
                  {forgotPasswordError}
                </div>
              ) : null}
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
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
