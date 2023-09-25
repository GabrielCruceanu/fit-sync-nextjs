import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <main className="container mx-auto">{children}</main>
    </>
  );
}
