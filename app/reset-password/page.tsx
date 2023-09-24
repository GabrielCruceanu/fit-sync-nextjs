'use client';
import ForgotPassword from '#/ui/auth/ForgotPassword';
import { useRouter } from 'next/navigation';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { useEffect } from 'react';
import { PagesLinks } from '#/constants/links';

export default function UpdatePasswordPage() {
  const router = useRouter();
  const { supabase, session } = useSupabase();

  useEffect(() => {
    if (session) {
      router.push(PagesLinks.profile.link);
    }
  }, [router, session]);
  if (!session) return <ForgotPassword supabase={supabase} />;
}
