import {
  navigationAuth,
  navigationClient,
  navigationLogout,
  navigationStatic,
  navigationTrainer,
} from '#/constants/navigation';
import NavigationItem from '#/ui/shared/NavigationItem';
import Link from 'next/link';
import { KaapoFitLogo } from '#/ui/shared/KaapoFitLogo';

export default function DesktopNavigation({
  close,
  isLogged,
  isTrainer,
}: {
  close: () => void | false;
  isLogged: boolean;
  isTrainer: boolean;
}) {
  const navLinks = !isLogged
    ? navigationStatic
    : isLogged && isTrainer
    ? navigationTrainer
    : navigationClient;

  return (
    <nav className="hidden w-full lg:block">
      <div className="container mx-auto justify-between lg:flex">
        <div className="flex h-14 items-center py-4 px-4">
          <Link href="/" className=" space-x-2.5" onClick={close}>
            <div className="h-6">
              <KaapoFitLogo />
            </div>
          </Link>
        </div>
        <div className="flex w-fit lg:flex-row">
          {navLinks.map((navItem) => {
            return (
              <NavigationItem key={navItem.slug} item={navItem} close={close} />
            );
          })}
        </div>

        <div className="flex pr-4">
          {isLogged ? (
            <NavigationItem
              key={navigationLogout.slug}
              item={navigationLogout}
              close={close}
            />
          ) : (
            <NavigationItem
              key={navigationAuth.slug}
              item={navigationAuth}
              close={close}
            />
          )}
        </div>
      </div>
    </nav>
  );
}
