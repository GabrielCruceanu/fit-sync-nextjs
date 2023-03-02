import { DefaultTags } from '#/ui/shared/DefaultTags';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};
export default function HeadUi({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <DefaultTags />
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
