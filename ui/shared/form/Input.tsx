import { ChangeEventHandler } from 'react';
import clsx from 'clsx';

export type InputProps = {
  label: string;
  name: string;
  value: string;
  type: string;
  placeholder: string;
  error: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: ChangeEventHandler<HTMLInputElement>;
};

export default function Input({
  label,
  name,
  value,
  type,
  placeholder,
  error,
  handleChange,
  handleBlur,
}: InputProps) {
  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={name}
          className="mb-2 block text-left text-sm font-medium text-gray-300"
        >
          {label}
        </label>
      ) : null}
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        autoComplete={name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={clsx(
          'block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-primary-600 focus:outline-none focus:ring-primary-600 sm:text-sm',
          {
            'border-red-600': error,
          },
        )}
      />
      {error ? (
        <p className="mt-2 block text-xs font-medium text-red-500">{error}</p>
      ) : null}
    </div>
  );
}
