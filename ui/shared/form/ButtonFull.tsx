import { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { ButtonType } from '#/types';

export type ButtonFullProps = {
  shortText: string;
  longText?: string;
  type: ButtonType;
  disabled?: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
};
export default function ButtonFull({
  shortText,
  longText,
  type,
  disabled,
  handleClick,
}: ButtonFullProps) {
  return (
    <button
      onClick={handleClick}
      className={clsx(
        'w-full items-center rounded-lg border py-2.5 text-center text-sm font-medium focus:z-10 focus:outline-none focus:ring-4 sm:py-3.5',
        {
          'bg-primary-600 hover:bg-primary-700 focus:ring-primary-800':
            type === ButtonType.Primary && !disabled,
          'border-gray-600 bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-gray-700':
            type === ButtonType.Secondary && !disabled,
          'border-gray-300 bg-gray-300 text-gray-600 hover:bg-gray-300 hover:text-gray-600 focus:ring-gray-700':
            disabled,
        },
      )}
    >
      {shortText}
      {longText && (
        <span className={clsx('hidden sm:inline-block')}>: {longText}</span>
      )}
    </button>
  );
}
