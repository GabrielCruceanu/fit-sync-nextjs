'use client';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { ReactNode, useState } from 'react';
import { useUser } from '#/utils/useUser';
import { postData } from '#/utils/helpers';
import { PagesLinks } from '#/constants/links';

interface Props {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
}

function Card({ title, description, footer, children }: Props) {
  return (
    <div className="p m-auto	my-8 w-full max-w-3xl rounded-md border border-zinc-700">
      <div className="px-5 py-4">
        <h3 className="mb-1 text-2xl font-medium">{title}</h3>
        <p className="text-zinc-300">{description}</p>
        {children}
      </div>
      <div className="rounded-b-md border-t border-zinc-700 bg-zinc-900 p-4 text-zinc-500">
        {footer}
      </div>
    </div>
  );
}

export default function Cont() {
  const [loading, setLoading] = useState(false);
  const { isLoading, subscription, userDetails } = useUser();
  console.log('userDetails', userDetails);
  withPageAuth({ redirectTo: PagesLinks.auth.link });

  const redirectToCustomerPortal = async () => {
    setLoading(true);
    try {
      const { url, error } = await postData({
        url: '/api/create-portal-link',
      });
      window.location.assign(url);
      if (error) console.log('cont error', error);
    } catch (error) {
      if (error) return alert((error as Error).message);
    }
    setLoading(false);
  };

  const subscriptionPrice =
    subscription &&
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: subscription?.prices?.currency,
      minimumFractionDigits: 0,
    }).format((subscription?.prices?.unit_amount || 0) / 100);

  return (
    <section className="mb-32 bg-gray-900">
      <h1>Cont page</h1>
    </section>
  );
}
