import { UserType } from '#/constants/user';
import { UserDetails } from '#/types/types';
import OnboardSteps, {
  OnboardStepsType,
} from '#/ui/user-onboarding/OnboardSteps';

export default function UserTypeOnboard({
  handleSetUserType,
  handleSetOnboardSteps,
}: {
  handleSetUserType: (value: UserDetails['user_type']) => void;
  handleSetOnboardSteps: (value: OnboardStepsType) => void;
}) {
  const handleUserTypeClick = (value: UserDetails['user_type']) => {
    handleSetUserType(value);
    handleSetOnboardSteps(OnboardStepsType.UserDetails);
    console.log('handleUserTypeClick', value);
  };
  return (
    <section className="bg-gray-900 py-8 lg:py-0">
      <div className="md:flex md:min-h-[42rem]">
        <div className="mx-auto flex items-center px-4 md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <OnboardSteps currentStep={OnboardStepsType.UserType} />
            <h1 className="mb-4 text-center text-2xl font-extrabold leading-tight tracking-tight text-white">
              Tip utilizator
            </h1>
            <p className="mb-4 text-center text-lg font-light text-gray-300">
              Ce tip de cont doresti sa ai?
            </p>
            <ul className="container mb-6 flex flex-wrap items-center justify-center">
              <li className="mt-3 h-fit w-full md:w-6/12 md:pr-1">
                <input
                  type="radio"
                  id={UserType.Client}
                  name="profession"
                  value={UserType.Client}
                  className="peer hidden"
                  required
                />
                <label
                  htmlFor={UserType.Client}
                  onClick={() => handleUserTypeClick(UserType.Client)}
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2  border-gray-700 bg-gray-800
                  p-5 text-gray-400 transition-all ease-in-out hover:bg-gray-700 hover:text-gray-300 peer-checked:border-primary-600 peer-checked:text-primary-500"
                >
                  <span className="w-full">Client</span>
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
              </li>
              <li className="mt-3 h-fit w-full md:w-6/12 md:pl-1">
                <input
                  type="radio"
                  id={UserType.Trainer}
                  name="profession"
                  value={UserType.Trainer}
                  className="peer hidden"
                  required
                />
                <label
                  htmlFor={UserType.Trainer}
                  onClick={() => handleUserTypeClick(UserType.Trainer)}
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2  border-gray-700 bg-gray-800
                   p-5 text-gray-400 transition-all ease-in-out hover:bg-gray-700 hover:text-gray-300 peer-checked:border-primary-600 peer-checked:text-primary-500"
                >
                  <span className="w-full">Personal Trainer</span>
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
              </li>
              <li className="mt-3 h-fit w-full md:w-6/12 md:pr-1">
                <input
                  type="radio"
                  id={UserType.Nutritionist}
                  name="profession"
                  value={UserType.Nutritionist}
                  className="peer hidden"
                  required
                />
                <label
                  htmlFor={UserType.Nutritionist}
                  onClick={() => handleUserTypeClick(UserType.Nutritionist)}
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2  border-gray-700 bg-gray-800
                  p-5 text-gray-400 transition-all ease-in-out hover:bg-gray-700 hover:text-gray-300 peer-checked:border-primary-600 peer-checked:text-primary-500"
                >
                  <span className="w-full">Nutritionist</span>
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
              </li>
              <li className="mt-3 h-fit w-full md:w-6/12 md:pl-1">
                <input
                  type="radio"
                  id={UserType.Gym}
                  name="profession"
                  value={UserType.Gym}
                  className="peer hidden"
                  required
                />
                <label
                  htmlFor={UserType.Gym}
                  onClick={() => handleUserTypeClick(UserType.Gym)}
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2  border-gray-700 bg-gray-800
                  p-5 text-gray-400 transition-all ease-in-out hover:bg-gray-700 hover:text-gray-300 peer-checked:border-primary-600 peer-checked:text-primary-500"
                >
                  <span className="w-full">Sala de antrenament</span>
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
              </li>
            </ul>
            {/*<button className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:py-3.5">*/}
            {/*  Next: Account Info*/}
            {/*</button>*/}
          </div>
        </div>
      </div>
    </section>
  );
}
