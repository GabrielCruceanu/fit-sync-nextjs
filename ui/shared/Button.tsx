import clsx from 'clsx';
import { MouseEventHandler } from 'react';

export type ButtonProps = {
  type: ButtonType;
  description: string;
  submit?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export enum ButtonType {
  primary = 'PRIMARY',
}

export default function Button({
  type,
  description,
  submit,
  onClick,
}: ButtonProps) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={clsx(
        'inline-flex h-fit w-full max-w-[400px] items-center justify-center justify-self-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4 md:mx-auto lg:w-4/12 ',
        {
          'bg-teal-600 text-white transition ease-in hover:bg-teal-700 focus:ring-teal-700':
            type === ButtonType.primary,
        },
      )}
    >
      {description}
    </button>
  );
}
