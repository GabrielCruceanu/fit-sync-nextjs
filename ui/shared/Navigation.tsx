'use client';

import '#/styles/globals.css';
import MobileNavigation from '#/ui/shared/MobileNavigation';
import { useEffect, useState } from 'react';
import DesktopNavigation from '#/ui/shared/DesktopNavigation';
import { usePathname } from 'next/navigation';
import * as gtag from '#/lib/gtag';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const handleMenu = () => setIsOpen(!isOpen);
  const isLogged = false;
  const isTrainer = false;
  const pathname = usePathname();

  useEffect(() => {
    // function to get the current page url and pass it to gtag pageView() function
    const handleRouteChange = (url: string) => {
      gtag.pageView(url);
    };

    handleRouteChange(pathname ? pathname : 'acasa');

    return () => {
      handleRouteChange(pathname ? pathname : 'acasa');
    };
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 z-50 flex w-full flex-col border-b border-teal-500  bg-gray-900 md:right-0 md:z-10 md:border-b md:border-teal-500 lg:flex-row lg:justify-between">
      <MobileNavigation
        close={close}
        handleMenu={handleMenu}
        isOpen={isOpen}
        isLogged={isLogged}
        isTrainer={isTrainer}
      />

      <DesktopNavigation
        isLogged={isLogged}
        isTrainer={isTrainer}
        close={close}
      />
    </header>
  );
}
