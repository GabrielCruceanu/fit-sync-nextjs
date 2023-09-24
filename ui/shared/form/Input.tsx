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

export default function InputGroup({
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
    <div className="w-full mb-2">
      {label ? (
        <label
          htmlFor={name}
          className="mb-1 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
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
