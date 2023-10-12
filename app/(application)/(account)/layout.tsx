import { DashboardNav } from '#/components/application/header/dashboard-nav';

import { dashboardConfig } from '#/config/dashboard';
import * as React from 'react';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export const dynamic = 'force-dynamic';
export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col space-y-6 mt-[65px]">
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  );
}
