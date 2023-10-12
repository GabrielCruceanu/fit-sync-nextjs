import React from 'react';
import { MainNav } from '#/components/shared/main-nav';
import { dashboardConfig } from '#/config/dashboard';
import { SiteFooter } from '#/components/shared/site-footer';

interface ProfileLayoutProps {
  children: React.ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <MainNav items={dashboardConfig.mainNav} />
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <main className=" w-full overflow-hidden">{children}</main>
        <aside className="hidden w-[200px] flex-col md:flex">
          <h1>Exmsda</h1>
        </aside>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
