import React from 'react';
import { MainNav } from '#/components/shared/main-nav';
import { dashboardConfig } from '#/config/dashboard';
import { SiteFooter } from '#/components/shared/site-footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
