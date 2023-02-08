'use client';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { navigationAuth } from '#/constants/navigation';
import { SupabaseContext } from '#/ui/auth/SupabaseProvider';
import { UserDetails } from '#/types/types';
import { cleanup } from 'axe-core';
import { useUser } from '#/utils/useUser';

export default function Profile({ supabase, session }: SupabaseContext) {
  const { user, userDetails } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<UserDetails['username']>(null);

  useCallback(() => {
    console.log('user', user);
    console.log('userDetails', userDetails);
    if (!user) return router.push(navigationAuth.slug);
    getProfile();

    return () => {
      cleanup();
    };
  }, [getProfile, router, session, user, userDetails]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from('users')
        .select('username')
        .eq('id', user?.id)
        .single();

      if (error && status !== 406) {
        alert(error.message);
      }

      if (data) {
        setUsername(data.username);
      }
    } catch (error) {
      alert('Error loading user data!');
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Profile</h1>
      {loading ? 'user is loading' : username}
    </>
  );
}
