'use client';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Checkbox, Label, TextInput } from 'flowbite-react';
import { AuthType } from '#/types/types';
import Button from '../shared/Button';

export default function Auth({ redirectTo }: { redirectTo: string }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const handleLogin = async (
    type: AuthType,
    email: string,
    password: string,
  ) => {
    try {
      const {
        data: { user },
        error,
      } =
        type === AuthType.SIGN_IN
          ? await supabaseClient.auth.signInWithPassword({ email, password })
          : await supabaseClient.auth.signUp({ email, password });

      if (!error && !user) alert('Check your email for the login link!');
      if (error) console.log('Error returned: ', error.message);
    } catch (error: any) {
      console.log('Error thrown:', error.message);
      alert(error.error_description || error);
    }
    router.push('/user');
  };

  async function forgotPassword(e: { preventDefault: () => void }) {
    e.preventDefault();
    let email = prompt('Te rog introdu e-mailul tău:');
    if (email === null || email === '') {
      window.alert('Trebuie să-ți introduci adresa de e-mail.');
    } else {
      let { error } = await supabaseClient.auth.resetPasswordForEmail(email);
      if (error) {
        console.log('Error: ', error.message);
      } else {
        alert('E-mailul de recuperare a parolei a fost trimis.');
      }
    }
  }

  return (
    <section className="flex h-full w-full items-center justify-center p-16">
      <div className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" className="text-white" />
          </div>
          <TextInput
            id="email"
            type="email"
            value={email}
            placeholder="jon@email.com"
            required={true}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password"
              value="Your password"
              className="text-white"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="*********"
            required={true}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-white">
            Remember me
          </Label>
        </div>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleLogin(AuthType.SIGN_IN, email, password);
          }}
          className="mb-4"
        >
          Sign in
        </Button>
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleLogin(AuthType.SIGN_UP, email, password);
          }}
        >
          Sign up
        </Button>
      </div>
    </section>
  );
}
