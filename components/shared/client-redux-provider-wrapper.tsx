'use client';

import ReduxProvider from '#/store/ReduxProvider';
import { MainNav } from '#/components/shared/main-nav';

export default function ClientReduxProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReduxProvider>{children}</ReduxProvider>;
}
