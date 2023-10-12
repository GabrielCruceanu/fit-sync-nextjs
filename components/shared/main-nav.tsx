'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';

import { siteConfig } from '#/config/site';
import { cn } from '#/lib/utils';
import { Icons } from '#/components/icons';
import { MobileNav } from '#/components/shared/mobile-nav';
import { MainNavItem } from '#/ts/types';
import Gtag from '#/ui/shared/Gtag';
import { ThemeToggle } from '#/components/theme/theme-toggle';
import { UserAccountNav } from '#/components/shared/user-account-nav';
import { User } from '@supabase/auth-helpers-nextjs';
import { Button } from '#/components/ui/button';
import { PagesLinks } from '#/constants/links';
import { useSupabase } from '#/modules/application/supabase/supabase-provider';

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const router = useRouter();
  const { session } = useSupabase();

  let user: User | undefined;

  if (session) {
    user = session.user;
  }

  return (
    <>
      <Gtag />
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Icons.logo />
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
          </div>
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? '#' : item.href}
                  className={cn(
                    'flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm',
                    item.href.startsWith(`/${segment}`)
                      ? 'text-foreground/80'
                      : 'text-foreground',
                    item.disabled && 'cursor-not-allowed opacity-80',
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}

          <div className="flex items-center">
            {user ? (
              <>
                <div className="mr-3">
                  <ThemeToggle />
                </div>
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
              </>
            ) : (
              <Button
                variant="default"
                type="button"
                onClick={() => {
                  router.push(PagesLinks.login.link);
                }}
                className="hidden md:inline-block"
              >
                {PagesLinks.login.name}
              </Button>
            )}

            <button
              className="flex items-center md:hidden ml-3"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <Icons.close /> : <Icons.menu />}
            </button>
            {showMobileMenu && items && (
              <MobileNav
                items={items}
                handleClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                {children}
              </MobileNav>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
