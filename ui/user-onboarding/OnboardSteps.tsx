import clsx from 'clsx';

export enum OnboardStepsType {
  UserType = 'USER_TYPE',
  UserDetails = 'USER_DETAILS',
  UserConfirm = 'USER_CONFIRM',
}

export default function OnboardSteps({
  currentStep,
}: {
  currentStep: OnboardStepsType;
}) {
  return (
    <ol className="mb-6 flex items-center justify-center text-center text-sm font-medium sm:text-base lg:mb-12">
      <li className="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-foreground after:content-[''] sm:after:inline-block xl:after:mx-10">
        <div className="flex items-center text-primary after:mx-2 after:font-light after:text-foreground after:content-['/'] sm:block sm:after:hidden">
          {currentStep === OnboardStepsType.UserType ? (
            <div className="mr-2 sm:mx-auto sm:mb-2">1</div>
          ) : (
            <svg
              className="mr-2 h-4 w-4 sm:mx-auto sm:mb-2 sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}

          <span className="hidden md:inline-flex">Tip utilizator</span>
        </div>
      </li>
      <li className="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-foreground after:content-[''] sm:after:inline-block xl:after:mx-10">
        <div
          className={clsx(
            "flex items-center after:mx-2 after:font-light after:text-foreground after:content-['/'] sm:block sm:after:hidden",
            {
              'text-primary':
                currentStep === OnboardStepsType.UserDetails ||
                currentStep === OnboardStepsType.UserConfirm,
            },
          )}
        >
          {currentStep === OnboardStepsType.UserConfirm ? (
            <svg
              className="mr-2 h-4 w-4 sm:mx-auto sm:mb-2 sm:h-6 sm:w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <div className="mr-2 sm:mx-auto sm:mb-2">2</div>
          )}
          <span className="hidden md:inline-flex">Detalii cont</span>
        </div>
      </li>
      <li
        className={clsx('flex items-center sm:block', {
          'text-primary': currentStep === OnboardStepsType.UserConfirm,
        })}
      >
        <div className="mr-2 sm:mx-auto sm:mb-2">3</div>
        <span className="hidden md:inline-flex">Confirmare</span>
      </li>
    </ol>
  );
}
