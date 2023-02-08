'use client';
import Profile from '#/ui/profile/Profile';
import { useRouter } from 'next/navigation';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { useEffect } from 'react';
import { navigationAuth } from '#/constants/navigation';
import LoadingDots from '#/ui/shared/LoadingDots';

export default function Cont() {
  const router = useRouter();
  const { supabase, session } = useSupabase();

  useEffect(() => {
    if (!session) {
      router.push(navigationAuth.slug);
    }
  }, [router, session]);
  return session ? (
    <Profile supabase={supabase} session={session} />
  ) : (
    <div className="m-6 flex min-h-screen items-center justify-center">
      <LoadingDots />
    </div>
  );
}
