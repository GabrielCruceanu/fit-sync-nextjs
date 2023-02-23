import { ChangeEventHandler } from 'react';
import clsx from 'clsx';

export type SelectInputProps = {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  options: string[];
  error: string;
  handleChange: ChangeEventHandler<HTMLSelectElement> | undefined;
  handleBlur: ChangeEventHandler<HTMLSelectElement> | undefined;
};

export default function SelectInput({
  label,
  name,
  value,
  placeholder,
  options,
  error,
  handleChange,
  handleBlur,
}: SelectInputProps) {
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
      <select
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        autoComplete={name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={clsx(
          'block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 capitalize text-white placeholder-gray-400 focus:border-primary-600 focus:outline-none focus:ring-primary-600 sm:text-sm',
          {
            'border-red-600': error,
          },
        )}
      >
        <option value="" disabled hidden>
          Alege
        </option>
        {options.map((optionName, key) => (
          <option key={key} value={optionName} className="capitalize">
            {optionName}
          </option>
        ))}
      </select>
      {error ? (
        <p className="mt-2 block text-xs font-medium text-red-500">{error}</p>
      ) : null}
    </div>
  );
}
