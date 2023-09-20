'use client';
import ForgotPassword from '#/ui/auth/ForgotPassword';
import { useRouter } from 'next/navigation';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { useEffect } from 'react';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { supabase, session } = useSupabase();

  useEffect(() => {
    if (session) {
      router.push('/profile');
    }
  }, [router, session]);
  if (!session) return <ForgotPassword supabase={supabase} />;
}
