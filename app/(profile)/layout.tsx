import React from 'react';
import { MainNav } from '#/components/header/site-header';
import { dashboardConfig } from '#/config/dashboard';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <MainNav items={dashboardConfig.mainNav} />
      <main className="container mx-auto">{children}</main>
    </>
  );
}
