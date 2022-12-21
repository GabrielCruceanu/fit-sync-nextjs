import clsx from 'clsx';

export type ButtonProps = {
  type: ButtonType;
  description: string;
};

export enum ButtonType {
  primary = 'PRIMARY',
}

export default function Button({ type, description }: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        'mr-3 rounded-md py-2.5 px-4 text-sm font-semibold uppercase focus:outline-none focus:ring-2 md:px-5',
        {
          '"text-white dark:focus:ring-teal-800" bg-teal-700 transition ease-in hover:bg-teal-800 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700':
            type === ButtonType.primary,
        },
      )}
    >
      {description}
    </button>
  );
}
