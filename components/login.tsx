'use client';

import { useSupabase } from './supabase-provider';

// Supabase auth needs to be triggered client-side
export default function Login() {
  const { supabase, session } = useSupabase();

  const handleEmailLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: 'jon@supabase.com',
      password: 'password',
    });

    if (error) {
      console.log({ error });
    }
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log({ error });
    }
  };

  // this `session` is from the root loader - server-side
  // therefore, it can safely be used to conditionally render
  // SSR pages without issues with hydration
  return session ? (
    <div className="flex h-screen items-center justify-center bg-amber-100">
      <button onClick={handleLogout}>Logout</button>
    </div>
  ) : (
    <div className="flex h-screen items-center justify-center bg-amber-100">
      <button onClick={handleEmailLogin}>Email Login</button>
    </div>
  );
}
