import React from 'react';
import { Navigation } from '#/ui/shared/Navigation';
import { Footer } from '#/ui/shared/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="[color-scheme:dark]">
      <head />
      <body className="min-h-screen overflow-y-scroll bg-gray-900">
        <Navigation />
        <main className="mt-[64.8px] h-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
