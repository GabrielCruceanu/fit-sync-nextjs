import 'server-only';

import '#/styles/globals.css';

import React from 'react';
import { MyUserContextProvider } from '#/utils/useUserContext';
import { createServerClient } from '#/utils/supabase-server';
import SupabaseProvider from '#/ui/auth/SupabaseProvider';
import SupabaseListener from '#/ui/auth/SupabaseListener';
import { ThemeProvider } from '#/components/theme/theme-provider';
import { cn } from '#/lib/utils';
import { fontSans } from '#/lib/fonts';
import { siteConfig } from '#/config/site';
import { Metadata } from 'next';
import { Toaster } from '#/components/ui/toaster';
import { Analytics } from '#/components/analytics';
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
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@kaapo-studio',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};
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
    <html lang="ro" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <SupabaseProvider session={session}>
          <SupabaseListener serverAccessToken={session?.access_token} />
          <MyUserContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              {children}
              <Analytics />
              <Toaster />
            </ThemeProvider>
          </MyUserContextProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
