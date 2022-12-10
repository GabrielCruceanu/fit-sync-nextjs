import { navigationLogout, NavItem } from '#/lib/navigation';
import { useSelectedLayoutSegment } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

export default function NavigationItem({
  item,
  close,
}: {
  item: NavItem;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;
  const isBlog = item.slug === 'blog';
  const isLogout = item.slug === navigationLogout.slug;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'flex items-center justify-between border-t border-gray-500 py-3 px-2 text-sm font-semibold last:border-b hover:text-gray-300 lg:w-fit',
        {
          'text-gray-300 hover:text-teal-700': !isActive,
          'text-teal-500': isActive,
          'border-b': isBlog,
          'min-w-full justify-self-end border-red-500 text-red-500': isLogout,
        },
      )}
    >
      {item.name}
      <span>{'>'}</span>
    </Link>
  );
}
