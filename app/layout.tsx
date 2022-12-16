import React from 'react';
import { Navigation } from '#/ui/shared/Navigation';
import { Footer } from '#/ui/shared/Footer';
import Gtag from '#/ui/shared/Gtag';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="[color-scheme:dark]">
      <head />
      <body className="min-h-screen overflow-y-scroll bg-gray-900">
        <Gtag />
        <Navigation />
        <div className="mt-[56px] h-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
