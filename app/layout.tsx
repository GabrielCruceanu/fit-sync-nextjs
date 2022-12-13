import React from 'react';
import { Navigation } from '#/ui/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="[color-scheme:dark]">
      <head />
      <body className="overflow-y-scroll bg-gray-900 ">
        <Navigation />
        <div className="mt-[56px]">{children}</div>
      </body>
    </html>
  );
}
