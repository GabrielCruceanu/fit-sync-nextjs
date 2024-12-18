import { notFound } from 'next/navigation';

import { dashboardConfig } from '#/config/dashboard';
import { MainNav } from '#/components/header/main-nav';
import { UserAccountNav } from '#/components/user-account-nav';
import { createServerClient } from '#/utils/supabase-server';
import { DashboardNav } from '#/components/header/dashboard-nav';
import { SiteFooter } from '#/components/site-footer';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const supabase = createServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return notFound();
  }
  const user = session.user;

  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={dashboardConfig.mainNav} />
          <UserAccountNav
            user={{
              // name: user.name,
              // image: user.image,
              // email: user.email,
              name: 'nume',
              image: '',
              email: user.email,
            }}
          />
        </div>
      </header>
      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr]">
        <aside className="hidden w-[200px] flex-col md:flex">
          <DashboardNav items={dashboardConfig.sidebarNav} />
        </aside>
        <main className="flex w-full flex-1 flex-col overflow-hidden">
          {children}
        </main>
      </div>
      <SiteFooter className="border-t" />
    </div>
  );
}
