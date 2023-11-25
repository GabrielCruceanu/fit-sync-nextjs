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
          className="mb-2 block text-left text-sm font-medium"
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
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
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
