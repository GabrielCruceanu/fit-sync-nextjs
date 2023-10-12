import '#/styles/globals.css';

import React from 'react';
import { Metadata } from 'next';

import SupabaseProvider from '#/modules/application/supabase/supabase-provider';
import SupabaseListener from '#/modules/application/supabase/supabase-listener';

import { cn } from '#/lib/utils';
import { fontSans } from '#/lib/fonts';
import { createServerClient } from '#/utils/supabase-server';
import { siteConfig } from '#/config/site';

import { Toaster } from '#/components/ui/toaster';
import { Analytics } from '#/components/analytics';
import { ThemeProvider } from '#/components/theme/theme-provider';
import { MainNav } from '#/components/shared/main-nav';
import { dashboardConfig } from '#/config/dashboard';
import { SiteFooter } from '#/components/shared/site-footer';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Antrenori', 'Nutritionisti', 'Sali de antrenament'],
  authors: [
    {
      name: 'kaapo-studio',
      url: 'https://kaapo.studio',
    },
  ],
  creator: 'kaapo-studio',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    {
      media: '(prefers-color-scheme: dark)',
      color: 'black',
    },
  ], // TODO: Add openGraph
  // openGraph: {
  //   type: 'website',
  //   locale: 'ro_RO',
  //   url: siteConfig.url,
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   siteName: siteConfig.name,
  // },
  // TODO: Add twitter and og jpg
  // twitter: {
  //   card: 'summary_large_image',
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/og.jpg`],
  //   creator: '@kaapo-studio',
  // },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  }, // TODO add webmanifest
  // manifest: `${siteConfig.url}/site.webmanifest`,
};

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
  const accessToken = session?.access_token || undefined;

  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={cn(
          'min-min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={accessToken} />
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <MainNav items={dashboardConfig.mainNav} />
            {children}
            <SiteFooter />
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
