'use client';
import SignUp from '#/ui/auth/SignUp';
import { useRouter } from 'next/navigation';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { useEffect } from 'react';

export default function SignUpPage() {
  const router = useRouter();
  const { supabase, session } = useSupabase();

  useEffect(() => {
    if (session) {
      router.push('/profil');
    }
  }, [router, session]);
  if (!session) return <SignUp supabase={supabase} />;
}
