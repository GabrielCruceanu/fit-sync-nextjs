'use client';
import { useRouter } from 'next/navigation';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { useEffect, useState } from 'react';
import { navigationAuth } from '#/constants/navigation';
import LoadingDots from '#/ui/shared/LoadingDots';

export default function EditProfilePage() {
  const router = useRouter();
  const { supabase, session } = useSupabase();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) {
      router.push(navigationAuth.slug);
    }
    const fetchUser = async () => {
      try {
        if (!session?.user.id) throw new Error('No user');

        const { data, error, status } = await supabase
          .from('users')
          .select('user_type')
          .eq('id', session.user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        console.log('user_type', data);
        if (data) {
        }
      } catch (error) {
        alert('Error loading user_type data!');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (session) {
      fetchUser();
    }
  }, [session]);

  return loading ? (
    <div className="m-6 flex min-h-screen items-center justify-center">
      <LoadingDots />
    </div>
  ) : (
    <h1>Edit Profile</h1>
  );
}
