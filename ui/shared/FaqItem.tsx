'use client';
import { ArrowCircleDownIcon, ArrowCircleUpIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import clsx from 'clsx';

export default function FaqItem({
  question,
  response,
}: {
  question: string;
  response: string;
}) {
  const [isOpenFaq, openIsOpenFaq] = useState(false);
  const handleFaq = () => openIsOpenFaq(!isOpenFaq);
  return (
    <div className="mt-4 rounded-xl bg-gray-900 p-4 text-white">
      <div
        className="flex cursor-pointer items-start justify-between"
        onClick={handleFaq}
      >
        <h4 className="font-semibold">{question}</h4>
        <span className="ml-4">
          {isOpenFaq ? (
            <ArrowCircleUpIcon className="block w-8 text-teal-100 transition-all ease-linear" />
          ) : (
            <ArrowCircleDownIcon className="block w-8 text-teal-100 transition-all ease-linear" />
          )}
        </span>
      </div>
      <p
        className={clsx('transition-all ease-linear', {
          'mt-4 h-auto transition-all ease-linear': isOpenFaq,
          'mt-0 h-0 overflow-hidden transition-all ease-linear': !isOpenFaq,
        })}
      >
        {response}
      </p>
    </div>
  );
}
