import {
  TypedClientDetails,
  TypedGymDetails,
  TypedNutritionistDetails,
  TypedTrainerDetails,
} from 'ts';
import OnboardSteps, {
  OnboardStepsType,
} from '#/ui/user-onboarding/OnboardSteps';

export default function UserConfirmOnboard({
  handleSetOnboardSteps,
  handleSetUserDetails,
}: {
  handleSetOnboardSteps: (value: OnboardStepsType) => void;
  handleSetUserDetails: (
    value:
      | TypedClientDetails
      | TypedTrainerDetails
      | TypedNutritionistDetails
      | TypedGymDetails
      | null,
  ) => void;
}) {
  const handleSetOnboardStepsClick = () => {
    handleSetOnboardSteps(OnboardStepsType.UserDetails);
  };

  const handleUserDetailsClick = (value: any) => {
    handleSetUserDetails(value);
    console.log('handleUserDetailsClick', value);
  };
  return (
    <section className="bg-gray-900 py-8 lg:py-0">
      <div className="md:flex md:min-h-[42rem]">
        <div className="mx-auto flex items-center px-4 md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <OnboardSteps currentStep={OnboardStepsType.UserConfirm} />
            <h1 className="mb-4 text-center text-2xl font-extrabold leading-tight tracking-tight text-white">
              User Confirm
            </h1>
            <p className="mb-4 text-center text-lg font-light text-gray-300">
              Prin apasarea butonului de confirma iti vei salva datele de
              utilizarea
            </p>
            {/*<button className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:py-3.5">*/}
            {/*  Next: Account Info*/}
            {/*</button>*/}
            <div className="flex space-x-3">
              <button
                onClick={() => handleSetOnboardStepsClick()}
                className="w-full items-center rounded-lg border border-gray-600 bg-gray-800 py-2.5 text-center text-sm font-medium text-gray-400 hover:bg-gray-100 hover:bg-gray-700 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-700 sm:py-3.5"
              >
                Anterior
                <span className="hidden sm:inline-block">: Detalii cont</span>
              </button>
              <button
                onClick={() => handleUserDetailsClick(' User Details')}
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-800 sm:py-3.5"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
