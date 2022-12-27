import { ChangeEventHandler } from 'react';

export type SelectInputProps = {
  label: string;
  name: string;
  options: string[];
  handleChange: ChangeEventHandler<HTMLSelectElement> | undefined;
};
export default function SelectInput({
  label,
  name,
  options,
  handleChange,
}: SelectInputProps) {
  return (
    <div className="mt-3 w-full">
      <label
        htmlFor={name}
        className="mb-2 block text-left text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        autoComplete={name}
        onChange={handleChange}
        className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-900 py-2 px-3 shadow-sm focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
      >
        <option>Selectează o opțiune</option>
        {options.map((optionName, key) => (
          <option key={key} value={optionName}>
            {optionName}
          </option>
        ))}
      </select>
    </div>
  );
}
