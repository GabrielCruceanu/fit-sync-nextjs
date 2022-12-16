'use client';

import Link from 'next/link';

export default function TextLink({
  link,
  target,
  content,
}: {
  link: string;
  target: string;
  content: string;
}) {
  return (
    <Link
      href={link}
      target={target}
      className="cursor-pointer text-teal-500 transition-all ease-in hover:text-teal-700"
    >
      {content}
    </Link>
  );
}
