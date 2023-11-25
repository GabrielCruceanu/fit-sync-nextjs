'use client';
import { DashboardNav } from '#/components/application/header/dashboard-nav';

import { dashboardConfig } from '#/config/dashboard';
import * as React from 'react';
import { usePathname } from 'next/navigation';
import { cva } from 'class-variance-authority';
import { cn } from '#/lib/utils';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-6 my-8 md:my-[65px]">
      <div
        className={cn(
          'container grid flex-1 gap-12 ',
          pathname === '/integrare' ? '' : 'md:grid-cols-[200px_1fr]',
        )}
      >
        {pathname !== '/integrare' && (
          <aside className="hidden w-[200px] flex-col md:flex">
            <DashboardNav items={dashboardConfig.sidebarNav} />
          </aside>
        )}
        <main
          className={cn(
            'flex w-full flex-1 flex-col',
            pathname === '/integrare' ? '' : '',
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
