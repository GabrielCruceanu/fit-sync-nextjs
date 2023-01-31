'use client';
import { useUser } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';
import Login from '#/ui/auth/Login';
import LoadingDots from '#/ui/shared/LoadingDots';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (user) {
      console.log('user', user);
      router.push('/cont');
    }
  }, [router, user]);

  if (!user) return <Login />;

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
}
