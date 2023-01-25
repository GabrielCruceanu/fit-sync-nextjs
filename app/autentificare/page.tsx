'use client';
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect } from 'react';
import { KaapoFitLogo } from '#/ui/shared/KaapoFitLogo';
import { getURL } from '#/utils/helpers';
import Auth from '#/ui/auth/Auth';
import LoadingDots from '#/ui/shared/LoadingDots';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const user = useUser();
  const supabaseClient = useSupabaseClient();

  useEffect(() => {
    if (user) {
      router.push('/cont');
    }
  }, [router, user]);

  if (!user)
    return (
      <div className="height-screen-helper flex justify-center">
        <div className="m-auto flex w-80 max-w-lg flex-col justify-between p-3 ">
          <div className="flex h-6 justify-center pb-12">
            <KaapoFitLogo />
          </div>
          <div className="flex flex-col space-y-4">
            {/*<Auth*/}
            {/*  supabaseClient={supabaseClient}*/}
            {/*  redirectTo={getURL()}*/}
            {/*  magicLink={true}*/}
            {/*  appearance={{*/}
            {/*    theme: ThemeSupa,*/}
            {/*    variables: {*/}
            {/*      default: {*/}
            {/*        colors: {*/}
            {/*          brand: '#404040',*/}
            {/*          brandAccent: '#52525b'*/}
            {/*        }*/}
            {/*      }*/}
            {/*    }*/}
            {/*  }}*/}
            {/*  theme="dark"*/}
            {/*/>*/}
            <Auth redirectTo={getURL()} />
          </div>
        </div>
      </div>
    );

  return (
    <div className="m-6">
      <LoadingDots />
    </div>
  );
}
