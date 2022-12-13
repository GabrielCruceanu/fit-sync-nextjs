import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import {
  navigationStatic,
  navigationLogout,
  navigationAuth,
  navigationTrainer,
  navigationClient,
} from '#/constants/navigation';
import { ProCardCTA } from '#/ui/shared/ProCardCTA';
import NavigationItem from '#/ui/shared/NavigationItem';
import Link from 'next/link';
import { KaapoFitLogo } from '#/ui/shared/KaapoFitLogo';

export default function MobileNavigation({
  close,
  handleMenu,
  isOpen,
  isLogged,
  isTrainer,
}: {
  close: () => void | false;
  handleMenu: () => void;
  isOpen: boolean;
  isLogged: boolean;
  isTrainer: boolean;
}) {
  const navLinks = !isLogged
    ? navigationStatic
    : isLogged && isTrainer
    ? navigationTrainer
    : navigationClient;
  return (
    <>
      <div className="flex h-14 items-center py-4 px-4 lg:hidden">
        <Link href="/" className=" space-x-2.5" onClick={close}>
          <div className="h-6">
            <KaapoFitLogo />
          </div>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center space-x-2 px-4 lg:hidden"
        onClick={handleMenu}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Meniu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-gray-300 transition-all" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-gray-300 transition-all" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:hidden lg:overflow-hidden ', {
          'fixed inset-x-0 bottom-0 top-14 mt-px overscroll-none bg-gray-900 transition-all':
            isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="flex min-h-full flex-col px-4 py-8">
          <div>
            {navLinks.map((navItem) => {
              return (
                <NavigationItem
                  key={navItem.slug}
                  item={navItem}
                  close={close}
                />
              );
            })}
          </div>
          <div className="mt-auto">
            <div className="mb-4">
              <ProCardCTA close={close} />
            </div>
            {isLogged ? (
              <NavigationItem
                key={navigationLogout.slug}
                item={navigationLogout}
                close={close}
              />
            ) : (
              <>
                <NavigationItem
                  key={navigationAuth.slug}
                  item={navigationAuth}
                  close={close}
                />
              </>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
