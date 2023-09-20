import 'server-only';

import React from 'react';
import { Navigation } from '#/ui/shared/Navigation';
import { Footer } from '#/ui/shared/Footer';
import { MyUserContextProvider } from '#/utils/useUserContext';
import { createServerClient } from '#/utils/supabase-server';
import SupabaseProvider from '#/ui/auth/SupabaseProvider';
import SupabaseListener from '#/ui/auth/SupabaseListener';
export const dynamic = 'force-dynamic';
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
    <html lang="ro" className="h-full [color-scheme:dark]">
      <body className="min-h-screen overflow-y-scroll bg-gray-900">
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <MyUserContextProvider>
            <Navigation />
            <main className="mt-[65px] h-full">{children}</main>
            <Footer />
          </MyUserContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
