import clsx from 'clsx';
import React from 'react';
import WaveSvg from '#/ui/shared/WaveSvg';

export default function SectionWithWave({
  bgWhite,
  children,
}: {
  bgWhite: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={clsx('relative bg-gray-900 px-4 py-[100px] text-white ', {
        'bg-white text-gray-900 md:py-[200px] xl:py-[260px]': bgWhite,
      })}
    >
      <div
        className={clsx('fill:teal-500 absolute -top-1 right-0  w-full', {
          hidden: !bgWhite,
        })}
      >
        <WaveSvg fill="rgb(24, 24, 27)" />
      </div>
      <div className="container mx-auto">{children}</div>
      <div
        className={clsx(
          'fill:teal-500 w absolute -bottom-1 right-0 max-h-28 min-w-full min-w-full rotate-180',
          {
            hidden: !bgWhite,
          },
        )}
      >
        <WaveSvg fill="rgb(24, 24, 27)" />
      </div>
    </section>
  );
}
