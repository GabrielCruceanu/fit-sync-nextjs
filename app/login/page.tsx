'use client';

import { useEffect } from 'react';
import Login from '#/ui/auth/Login';
import LoadingDots from '#/ui/shared/LoadingDots';
import { useRouter } from 'next/navigation';
import { useSupabase } from '#/ui/auth/SupabaseProvider';

export default function AuthPage() {
  const router = useRouter();
  const { supabase, session } = useSupabase();

  // useEffect(() => {
  //   if (session) {
  //     router.push('/profile');
  //   }
  // }, [router, session]);
  if (!session) return <Login supabase={supabase} />;

  return (
    <div className="m-6 flex min-h-screen items-center justify-center">
      <LoadingDots />
    </div>
  );
}
