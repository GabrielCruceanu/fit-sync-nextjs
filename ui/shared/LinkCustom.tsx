import React from 'react';
import { useRouter } from 'next/navigation';

export default function LinkCustom({
  url,
  customClass,
  children,
}: {
  url: string;
  customClass: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(url);
  };
  return (
    <a href={url} onClick={handleNavigation} className={`${customClass}`}>
      {children}
    </a>
  );
}
