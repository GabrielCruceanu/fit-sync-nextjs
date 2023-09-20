'use client';

import '#/styles/globals.css';
import React, { Fragment, useEffect } from 'react';
import {
  usePathname,
  useRouter,
  useSelectedLayoutSegment,
} from 'next/navigation';
import * as gtag from '#/lib/gtag';
import Gtag from '#/ui/shared/Gtag';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import { KaapoFitLogo } from '#/ui/shared/KaapoFitLogo';
import {
  navigationAuth,
  navigationClient,
  navigationProfessional,
  navigationStatic,
} from '#/constants/navigation';
import { ProCardCTA } from '#/ui/shared/ProCardCTA';
import { PagesLinks } from '#/constants/links';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { useUserContext } from '#/utils/useUserContext';
import { UserType } from '#/constants/user';
import Link from 'next/link';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function Navigation() {
  const { supabase, session } = useSupabase();
  const user = useUserContext();
  const isLogged = session?.user;
  const isProfessional = user?.userDetails?.user_type !== UserType.Client;
  const pathname = usePathname();
  const router = useRouter();
  const segment = useSelectedLayoutSegment();

  const navLinks = isProfessional ? navigationProfessional : navigationClient;

  const logout = () => {
    supabase.auth.signOut().then(() => router.push('/'));
  };

  useEffect(() => {
    // function to get the current page url and pass it to gtag pageView() function
    const handleRouteChange = (url: string) => {
      gtag.pageView(url);
    };
    handleRouteChange(pathname ? pathname : '/');

    return () => {
      handleRouteChange(pathname ? pathname : '/');
    };
  }, [pathname]);

  return (
    <>
      <Gtag />
      <Disclosure
        as="nav"
        className="border-1 fixed left-0 right-0 top-0 z-50 border-b border-teal-500 bg-gray-900"
      >
        {({ open }) => (
          <>
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                <div className="flex w-full">
                  <a href="/" className={'h-6 max-w-[104px]'}>
                    <KaapoFitLogo />
                  </a>
                </div>
                <div className="hidden w-full justify-center md:flex">
                  <div className="flex items-baseline space-x-4">
                    {navigationStatic.map((item) => (
                      <Link
                        key={item.name}
                        href={item.slug}
                        prefetch={true}
                        className={classNames(
                          item.slug === `/${segment}` ||
                            (item.slug === '/' && segment === null)
                            ? 'bg-gray-800 text-teal-500'
                            : 'text-gray-300 hover:bg-gray-700',
                          'rounded-md px-3 py-2 align-middle text-sm font-medium leading-5 transition hover:text-white',
                        )}
                        aria-current={
                          item.slug === `/${segment}` ||
                          (item.slug === '' && segment === null)
                            ? 'page'
                            : undefined
                        }
                      >
                        {item.name}
                      </Link>
                    ))}
                    {/* Profile dropdown */}
                    {isLogged && (
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="rounded-md px-3 py-2 align-middle text-sm font-medium leading-5 text-gray-300 transition hover:bg-gray-700 hover:text-white">
                            Profil
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {navLinks.map((item) => (
                              <Menu.Item key={item.name}>
                                {() => (
                                  <a
                                    href={item.slug}
                                    className={classNames(
                                      item.slug === `/${segment}`
                                        ? 'bg-gray-800 text-teal-500'
                                        : 'text-gray-300 hover:bg-gray-700',
                                      'block w-full rounded-md px-3 py-2 text-center align-middle text-sm font-medium leading-5 transition hover:text-white',
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}

                            <Menu.Item>
                              {() => (
                                <button
                                  onClick={logout}
                                  className="block w-full rounded-md px-3 py-2 align-middle text-sm font-medium leading-5 text-red-500 transition hover:bg-red-700 hover:text-white"
                                >
                                  Deconectare
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )}
                  </div>
                </div>
                {isLogged ? (
                  <div className="hidden w-full justify-end md:flex">
                    <div className="ml-4 flex items-center md:ml-6">
                      {user?.userDetails?.name ||
                      user?.userDetails?.last_name ||
                      user?.userDetails?.first_name ? (
                        <div className="ml-3 text-right">
                          <div className="mb-1 text-sm font-medium leading-none text-gray-400">
                            Salutare,
                          </div>
                          <div className="text-base font-medium leading-none text-white">
                            {user?.userDetails
                              ? user?.userDetails?.name
                                ? user?.userDetails?.name
                                : user?.userDetails?.last_name +
                                  ' ' +
                                  user?.userDetails?.first_name
                              : 'Prenume Nume'}
                          </div>
                        </div>
                      ) : null}

                      <div className="ml-3 flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <a href={PagesLinks.profile.link}>
                          {user.userDetails?.profile_picture_url ? (
                            <Image
                              className="h-8 w-8 rounded-full"
                              src={user.userDetails?.profile_picture_url}
                              alt={
                                user.userDetails?.name
                                  ? user.userDetails?.name
                                  : user.userDetails?.first_name! +
                                    user.userDetails?.last_name!
                              }
                              width="100"
                              height="100"
                            />
                          ) : (
                            <div className="h-8 w-8 rounded-full bg-gray-400"></div>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden w-full justify-end md:flex">
                    <a
                      href={navigationAuth.slug}
                      className={classNames(
                        navigationAuth.slug === segment
                          ? 'bg-teal-500 text-white hover:border-teal-900 hover:bg-teal-900'
                          : 'text-gray-300 hover:bg-teal-500',
                        'hidden rounded-md border border-teal-500 px-3 py-2 align-middle text-sm font-medium leading-5 transition hover:text-white md:block',
                      )}
                    >
                      {navigationAuth.name}
                    </a>
                  </div>
                )}

                <div className="flex w-full justify-end md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigationStatic.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.slug}
                    className={classNames(
                      item.slug === segment ||
                        (item.slug === '/' && segment === null)
                        ? 'bg-gray-800 text-teal-500'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                    aria-current={item.slug === segment ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
              {isLogged ? (
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      {user.userDetails?.profile_picture_url ? (
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={user.userDetails?.profile_picture_url}
                          alt={
                            user.userDetails?.name
                              ? user.userDetails?.name
                              : user.userDetails?.first_name! +
                                user.userDetails?.last_name!
                          }
                          width="100"
                          height="100"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-full bg-gray-400"></div>
                      )}
                    </div>
                    <div className="ml-3">
                      <div className="mb-1 text-sm font-medium leading-none text-gray-400">
                        Salutare,
                      </div>
                      <div className="text-base font-medium leading-none text-white">
                        {user?.userDetails?.name
                          ? user?.userDetails?.name
                          : user?.userDetails?.last_name +
                            ' ' +
                            user?.userDetails?.first_name}
                      </div>
                    </div>
                    {/* Notification */}
                    {/*<button*/}
                    {/*  type="button"*/}
                    {/*  className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"*/}
                    {/*>*/}
                    {/*  <span className="sr-only">View notifications</span>*/}
                    {/*  <BellIcon className="h-6 w-6" aria-hidden="true" />*/}
                    {/*</button>*/}
                    {/*<button*/}
                    {/*  type="button"*/}
                    {/*  onClick={logout}*/}
                    {/*  className="ml-4 ml-auto rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"*/}
                    {/*>*/}
                    {/*  <span className="sr-only">{navigationLogout.name}</span>*/}
                    {/*  <ArrowLeftOnRectangleIcon*/}
                    {/*    className="h-6 w-6"*/}
                    {/*    aria-hidden="true"*/}
                    {/*  />*/}
                    {/*</button>*/}
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {navLinks.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.slug}
                        className={classNames(
                          item.slug === segment ||
                            (item.slug === '/' && segment === null)
                            ? 'bg-gray-800 text-teal-500'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium',
                        )}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                    <Disclosure.Button
                      as="div"
                      className={
                        'block rounded-md px-3 py-2 text-base font-medium text-red-500 hover:bg-gray-700 hover:text-white'
                      }
                    >
                      <button onClick={logout}>Deconectare</button>
                    </Disclosure.Button>
                  </div>
                </div>
              ) : (
                <>
                  <Disclosure.Button
                    key={navigationAuth.slug}
                    as="a"
                    className={classNames(
                      navigationAuth.slug === segment
                        ? 'bg-teal-800'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'mx-2 block rounded-md bg-gray-800 px-3 py-2 text-base font-medium text-teal-500 sm:mx-3',
                    )}
                    href={navigationAuth.slug}
                  >
                    {navigationAuth.name}
                  </Disclosure.Button>
                  <Disclosure.Button
                    as="a"
                    className="m-4 block"
                    key="ProCardCTA"
                    href={PagesLinks.proPage.link}
                  >
                    <ProCardCTA />
                  </Disclosure.Button>
                </>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
