'use client';
import React, { useEffect, useState } from 'react';
import { Navigation } from '#/ui/shared/Navigation';
import { Footer } from '#/ui/shared/Footer';
import { Database } from '#/types/supabase';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { appTitle } from '#/constants';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { MyUserContextProvider } from '#/utils/useUser';
import { usePathname } from 'next/navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient<Database>(),
  );

  const getDefaultSeoConfig = (pathname: string): DefaultSeoProps => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const url = `${baseUrl}${pathname}`;
    const title = appTitle;
    const description = `${appTitle} will help programmers learn how Stripe Connect OAuth Process works with React.`;
    return {
      title,
      canonical: url,
      description,
      openGraph: {
        url,
        title,
        type: 'website',
        description,
        site_name: appTitle,
      },
      additionalMetaTags: [{ name: 'application-name', content: title }],
    };
  };

  const pathname = usePathname();

  return (
    <html lang="ro" className="[color-scheme:dark]">
      <head />
      <body className="min-h-screen overflow-y-scroll bg-gray-900">
        <DefaultSeo {...getDefaultSeoConfig(pathname ? pathname : '/')} />
        <SessionContextProvider supabaseClient={supabaseClient}>
          <MyUserContextProvider>
            <Navigation />
            <main className="mt-[64.8px] h-full">{children}</main>
            <Footer />
          </MyUserContextProvider>
        </SessionContextProvider>
      </body>
    </html>
  );
}
