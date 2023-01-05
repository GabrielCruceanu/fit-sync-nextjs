import clsx from 'clsx';
import React from 'react';
import WaveSvg from '#/ui/shared/WaveSvg';

export default function SectionWithWave({
  bgWhite,
  id,
  children,
}: {
  bgWhite: boolean;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`relative px-4 py-[100px] ${
        bgWhite
          ? 'bg-white text-gray-900 md:py-[200px] xl:py-[260px]'
          : ' bg-gray-900 text-white'
      }`}
      id={id}
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
