'use client';

import '#/styles/globals.css';
import React, { Fragment, useEffect } from 'react';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import * as gtag from '#/lib/gtag';
import Gtag from '#/ui/shared/Gtag';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { KaapoFitLogo } from '#/ui/shared/KaapoFitLogo';
import Link from 'next/link';
import {
  navigationClient,
  navigationStatic,
  navigationTrainer,
} from '#/constants/navigation';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Navigation() {
  const isLogged = false;
  const isTrainer = false;
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  const navLinks = !isLogged
    ? navigationStatic
    : isLogged && isTrainer
    ? navigationTrainer
    : navigationClient;

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
    <>
      <Gtag />
      <Disclosure
        as="nav"
        className="border-1 border-b border-teal-500 bg-gray-900"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/" className=" space-x-2.5">
                      <div className="h-6">
                        <KaapoFitLogo />
                      </div>
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navLinks.map((item) => (
                        <a
                          key={item.name}
                          href={item.slug}
                          className={classNames(
                            item.slug === segment ||
                              (item.slug === '/' && segment === null)
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                          )}
                          aria-current={
                            item.slug === segment ||
                            (item.slug === '/' && segment === null)
                              ? 'page'
                              : undefined
                          }
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button
                      type="button"
                      className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="sr-only">Open user menu</span>
                          <Image
                            className="h-8 w-8 rounded-full"
                            src={user.imageUrl}
                            alt=""
                            width="100"
                            height="100"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {navLinks.map((item) => (
                            <Menu.Item key={item.name}>
                              {() => (
                                <a
                                  href={item.slug}
                                  className={classNames(
                                    item.slug === segment ||
                                      (item.slug === '/' && segment === null)
                                      ? 'bg-gray-100'
                                      : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuAlt2Icon
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                {navLinks.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.slug}
                    className={classNames(
                      item.slug === segment ||
                        (item.slug === '/' && segment === null)
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                    aria-current={item.slug === segment ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                      width="100"
                      height="100"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      {/*<header className="relative top-0 left-0 z-50 flex w-full flex-col border-b border-teal-500  bg-gray-900 md:right-0 md:z-10 md:border-b md:border-teal-500 lg:flex-row lg:justify-between">*/}
      {/*  <DesktopNavigation isLogged={isLogged} isTrainer={isTrainer} />*/}
      {/*</header>*/}
      {/*<MobileNavigation isLogged={isLogged} isTrainer={isTrainer} />*/}
    </>
  );
}
