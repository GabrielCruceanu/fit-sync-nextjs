'use client';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import UpdatePassword from '#/ui/auth/UpdatePassword';

export default function ForgotPasswordPage() {
  const { supabase } = useSupabase();

  return <UpdatePassword supabase={supabase} />;
}
