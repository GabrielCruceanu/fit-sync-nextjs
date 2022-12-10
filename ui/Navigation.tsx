'use client';

import '#/styles/globals.css';
import Link from 'next/link';
import { KaapoFitLogo } from '#/ui/KaapoFitLogo';
import MobileNavigation from '#/ui/MobileNavigation';
import { useState } from 'react';
import DesktopNavigation from '#/ui/DesktopNavigation';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const handleMenu = () => setIsOpen(!isOpen);
  const isLogged = false;

  return (
    <header className="fixed top-0 z-10 flex w-full flex-col border-b border-teal-500  bg-gray-900 md:right-0 md:z-auto md:border-b md:border-teal-500 lg:flex-row lg:justify-between">
      <MobileNavigation
        close={close}
        handleMenu={handleMenu}
        isOpen={isOpen}
        isLogged={isLogged}
      />

      <DesktopNavigation isLogged={isLogged} close={close} />
    </header>
  );
}
