import { UserType } from '#/constants/user';
import { MouseEventHandler } from 'react';

export type InputSelectButtonProps = {
  label: string;
  name: string;
  value: string;
  handleClick: MouseEventHandler<HTMLLabelElement> | undefined;
};

export default function InputSelectButton({
  label,
  name,
  value,
  handleClick,
}: InputSelectButtonProps) {
  return (
    <>
      <input
        id={name}
        name={name}
        type="radio"
        value={value}
        className="peer hidden"
        required
      />
      <label
        htmlFor={UserType.Trainer}
        onClick={handleClick}
        className="inline-flex text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full cursor-pointer items-center justify-center rounded-lg border-2 bg-primary text-primary-foreground shadow hover:bg-primary/90
                   p-5 transition-all ease-in-out peer-checked:border-primary peer-checked:text-primary"
      >
        <span className="w-full">{label}</span>
        <svg
          className="ml-3 h-6 w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </>
  );
}
