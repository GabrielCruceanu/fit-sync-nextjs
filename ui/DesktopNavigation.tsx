import { navigationBasic, navigationLogout } from '#/lib/navigation';
import NavigationItem from '#/ui/NavigationItem';
import Link from 'next/link';
import { KaapoFitLogo } from '#/ui/KaapoFitLogo';

export default function DesktopNavigation({
  close,
  isLogged,
}: {
  close: () => void | false;
  isLogged: boolean;
}) {
  return (
    <nav className="hidden w-full justify-between lg:flex">
      <div className="flex h-14 items-center py-4 px-4">
        <Link href="/" className=" space-x-2.5" onClick={close}>
          <div className="h-6">
            <KaapoFitLogo />
          </div>
        </Link>
      </div>
      <div className="flex w-fit lg:flex-row">
        {navigationBasic.map((navItem) => {
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
            key={navigationLogout.slug}
            item={navigationLogout}
            close={close}
          />
        )}
      </div>
    </nav>
  );
}
