import 'server-only';

import React from 'react';
import { Navigation } from '#/ui/shared/Navigation';
import { Footer } from '#/ui/shared/Footer';
import { Database } from '#/types/supabase';
import { SupabaseClient } from '@supabase/auth-helpers-nextjs';
import { MyUserContextProvider } from '#/utils/useUser';
import { createServerClient } from '#/utils/supabase-server';
import SupabaseProvider from '#/supabase/supabase-provider';
import SupabaseListener from '#/supabase/supabase-listener';
import SeoProvider from '#/ui/shared/SeoProvider';

export type TypedSupabaseClient = SupabaseClient<Database>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <html lang="ro" className="[color-scheme:dark]">
      <body className="min-h-screen overflow-y-scroll bg-gray-900">
        <SeoProvider />
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <MyUserContextProvider>
            <Navigation />
            <main className="mt-[56.8px] h-full">{children}</main>
            <Footer />
          </MyUserContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
