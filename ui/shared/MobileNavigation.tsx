import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import {
  navigationAuth,
  navigationClient,
  navigationLogout,
  navigationStatic,
  navigationTrainer,
} from '#/constants/navigation';
import { ProCardCTA } from '#/ui/shared/ProCardCTA';
import NavigationItem from '#/ui/shared/NavigationItem';
import Link from 'next/link';
import { KaapoFitLogo } from '#/ui/shared/KaapoFitLogo';

export default function MobileNavigation({
  isLogged,
  isTrainer,
}: {
  isLogged: boolean;
  isTrainer: boolean;
}) {
  const navLinks = !isLogged
    ? navigationStatic
    : isLogged && isTrainer
    ? navigationTrainer
    : navigationClient;

  const navbar = document.getElementById('navbar');
  const btnNavbarToggler = document.getElementById('btnNavbarToggler');
  const navClosed = document.getElementById('navClosed');
  const navOpen = document.getElementById('navOpen');

  const handleMenu = () => {
    if (btnNavbarToggler && navbar && navClosed && navOpen) {
      console.log('navbar', navbar);

      navbar.classList.toggle('show');
      navClosed.classList.toggle('hidden');
      navOpen.classList.toggle('hidden');
    }
  };

  return (
    <>
      <div className="fixed z-50 flex h-14 items-center justify-between py-4 px-4 lg:hidden">
        <Link href="/" className=" space-x-2.5" onClick={handleMenu}>
          <div className="h-6">
            <KaapoFitLogo />
          </div>
        </Link>

        <button
          type="button"
          className="py-4 text-2xl text-white hover:text-gray-200"
          id="btnNavbarToggler"
          onClick={handleMenu}
        >
          <XIcon id="navClosed" className="hidden h-8 w-8" />
          <MenuAlt2Icon id="navOpen" className="h-8 w-8" />
        </button>
      </div>

      <nav
        id="navbar"
        className="fixed bottom-0 top-0 z-50  -translate-x-full overflow-y-auto bg-gray-900"
      >
        <div className="flex min-h-full flex-col px-4 py-8">
          <div>
            {navLinks.map((navItem) => {
              return (
                <NavigationItem
                  key={navItem.slug}
                  item={navItem}
                  close={handleMenu}
                />
              );
            })}
          </div>
          <div className="mt-auto">
            <div className="mb-4">
              <ProCardCTA close={handleMenu} />
            </div>
            {isLogged ? (
              <NavigationItem
                key={navigationLogout.slug}
                item={navigationLogout}
                close={handleMenu}
              />
            ) : (
              <>
                <NavigationItem
                  key={navigationAuth.slug}
                  item={navigationAuth}
                  close={handleMenu}
                />
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
