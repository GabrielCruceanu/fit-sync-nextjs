import { UserType } from '#/constants/user';
export default function UserTypeOnboard() {
  return (
    <section className="bg-gray-900 py-8 lg:py-0">
      <div className="lg:flex">
        <div className=" w-full max-w-md bg-primary-600 p-12 lg:h-screen">
          <div className="block rounded-lg bg-primary-500 p-8 text-white">
            <h2 className="mb-1 text-2xl font-semibold">Your selected plan</h2>
            <p className="mb-4 font-light text-primary-100 sm:text-lg">
              30-day free trial
            </p>
            {/*List*/}
            <ul role="list" className="space-y-4 text-left">
              <li className="flex items-center space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Premium support:{' '}
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-green-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto flex items-center px-4 md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <ol className="mb-6 flex items-center text-center text-sm font-medium text-gray-400 sm:text-base lg:mb-12">
              <li className="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-gray-700 after:content-[''] sm:after:inline-block xl:after:mx-10">
                <div className="flex items-center after:mx-2 after:font-light after:text-gray-500 after:content-['/'] sm:block sm:after:hidden">
                  <div className="mr-2 sm:mx-auto sm:mb-2">1</div>
                  Tip utilizator
                </div>
              </li>
              <li className="after:border-1 flex items-center after:mx-6 after:hidden after:h-1 after:w-12 after:border-b after:border-gray-700 after:content-[''] sm:after:inline-block xl:after:mx-10">
                <div className="flex items-center after:mx-2 after:font-light after:text-gray-500 after:content-['/'] sm:block sm:after:hidden">
                  <div className="mr-2 sm:mx-auto sm:mb-2">2</div>
                  Detalii cont
                </div>
              </li>
              <li className="flex items-center sm:block">
                <div className="mr-2 sm:mx-auto sm:mb-2">3</div>
                Confirmare
              </li>
            </ol>
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-white sm:mb-6">
              Spune-ne despre tine
            </h1>
            <p className="mb-4 text-lg font-light text-gray-300">
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
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2  border-gray-700 bg-gray-800
                  p-5 text-gray-400 hover:bg-gray-700 hover:text-gray-300 peer-checked:border-primary-600 peer-checked:text-primary-500"
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
                    ></path>
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
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2  border-gray-700 bg-gray-800
                  p-5 text-gray-400 hover:bg-gray-700 hover:text-gray-300 peer-checked:border-primary-600 peer-checked:text-primary-500"
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
                    ></path>
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
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2  border-gray-700 bg-gray-800
                  p-5 text-gray-400 hover:bg-gray-700 hover:text-gray-300 peer-checked:border-primary-600 peer-checked:text-primary-500"
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
                    ></path>
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
                  className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border-2  border-gray-700 bg-gray-800
                  p-5 text-gray-400 hover:bg-gray-700 hover:text-gray-300 peer-checked:border-primary-600 peer-checked:text-primary-500"
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
                    ></path>
                  </svg>
                </label>
              </li>
            </ul>
            <button className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:py-3.5">
              Next: Account Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
