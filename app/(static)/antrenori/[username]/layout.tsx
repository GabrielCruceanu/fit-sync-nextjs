import React from 'react';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container mx-auto lg:flex lg:flex-wrap">
      <div className="lg:w-8/12">{children}</div>

      <aside className="mt-4 lg:w-4/12">
        <div className="p-4">
          <Image
            src="https://kaapo-fit-angular.vercel.app/assets/images/ad-square.jpg"
            alt="Jese Leos"
            width={362}
            height={362}
          />
        </div>
        <div className="p-4">
          <Image
            src="https://kaapo-fit-angular.vercel.app/assets/images/ad-square.jpg"
            alt="Jese Leos"
            width={362}
            height={362}
          />
        </div>
        <div className="p-4">
          <Image
            src="https://kaapo-fit-angular.vercel.app/assets/images/ad-square.jpg"
            alt="Jese Leos"
            width={362}
            height={362}
          />
        </div>
      </aside>
    </div>
  );
}
