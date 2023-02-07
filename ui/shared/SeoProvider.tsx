'use client';
import { DefaultSeo, DefaultSeoProps } from 'next-seo';
import React from 'react';
import { appTitle } from '#/constants';
import { usePathname } from 'next/navigation';

export default function SeoProvider() {
  const pathname = usePathname();

  const getDefaultSeoConfig = (pathname: string): DefaultSeoProps => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const url = `${baseUrl}${pathname}`;
    const title = appTitle;
    const description = `${appTitle} will help programmers learn how Stripe Connect OAuth Process works with React.`;
    return {
      title,
      canonical: url,
      description,
      openGraph: {
        url,
        title,
        type: 'website',
        description,
        site_name: appTitle,
      },
      additionalMetaTags: [{ name: 'application-name', content: title }],
    };
  };

  return <DefaultSeo {...getDefaultSeoConfig(pathname ? pathname : '/')} />;
}
