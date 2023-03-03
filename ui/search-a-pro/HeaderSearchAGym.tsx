'use client';
import { useState } from 'react';
import { RomaniaStatesData } from '#/data/location-data';
import SelectInput from '#/ui/shared/form/SelectInput';
import SectionWithWave from '#/ui/shared/SectionWithWave';
import ProList from '#/ui/shared/ProList';
import { flushSync } from 'react-dom';
import { executeScroll } from '#/helpers/scrollTo';
import { handleInputRequired } from '#/utils/helpers';
import { AuthError } from '#/constants/authError';
import { TypedGymDetails } from '#/types';
import clsx from 'clsx';
import { removeDuplicate } from '#/helpers/remove-duplicate';
import { useSupabase } from '#/ui/auth/SupabaseProvider';

export default function HeaderSearchAGym({
  gyms,
}: {
  gyms: TypedGymDetails[];
}) {
  const { supabase } = useSupabase();
  const [gymType, setGymType] = useState('');
  const [gymTypeError, setGymTypeError] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentStateError, setCurrentStateError] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentCityError, setCurrentCityError] = useState('');
  const [currentGyms, setCurrentGyms] = useState<TypedGymDetails[]>([]);
  const [showCurrentGyms, setShowCurrentGyms] = useState<boolean>(false);
  let currentCites: string[] = [];
  const gymTypesData = gyms.map((gym) => gym.pro_type as string);
  const gymStatesData = gyms.map((gym) => gym.state as string);
  const gymsTypes: string[] = removeDuplicate(gymTypesData);
  const states: string[] = removeDuplicate(gymStatesData);

  RomaniaStatesData.filter((state) => {
    if (state.name === currentState) {
      currentCites = state.cities;
    }
  });

  const findGyms = async () => {
    if (gymType && currentCity) {
      const { data: gyms } = await supabase
        .from('gyms')
        .select('*')
        .eq('pro_type', gymType)
        .eq('city', currentCity);

      // Will wait until the DOM is updated with the new state
      flushSync(() => {
        setCurrentGyms(gyms as TypedGymDetails[]);
        setShowCurrentGyms(true);
      });

      // Scroll to the trainer section where we see the trainers searched
      executeScroll('gyms-section');
    }
  };

  return (
    <>
      <section className="bg-noRepeat flex min-h-screen items-center bg-gray-700 bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center bg-blend-multiply">
        <div className="z-1 relative mx-auto max-w-screen-xl py-8 px-4 text-white lg:py-16 xl:px-0">
          <div className="mx-auto mb-6 flex max-w-screen-md flex-col justify-center text-center lg:mb-0">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-normal text-white md:text-5xl xl:text-6xl">
              Sali de antrenament
            </h1>
            <p className="mx-auto mb-6 max-w-xl font-light text-gray-300 md:text-lg xl:mb-8 xl:text-xl">
              Sala de antrenament îți poate oferi echipamentul și sprijinul
              personalului de care ai nevoie pentru a-ți atinge potențialul
              maxim.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-wrap items-end justify-center rounded bg-gray-800 p-4 lg:mt-12">
            <div className="w-full">
              <SelectInput
                name="nutritionist-type"
                label="Tip de sala"
                value={gymType}
                placeholder="Gym Fit"
                options={gymsTypes}
                handleChange={(e) => {
                  setGymTypeError('');
                  setGymType(e.target.value);
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  setCurrentState('');
                  setCurrentCity('');
                }}
                handleBlur={() => {
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  setCurrentState('');
                  setCurrentCity('');
                  handleInputRequired(gymType)
                    ? setGymTypeError(AuthError.InputRequired)
                    : null;
                }}
                error={gymTypeError}
              />
            </div>
            <div className="mt-4 w-full">
              <SelectInput
                name="state"
                label="Județ"
                value={currentState}
                placeholder={'Bucuresti'}
                options={states}
                error={currentStateError}
                handleChange={(e) => {
                  setCurrentStateError('');
                  setCurrentState(e.target.value);
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  setCurrentCity('');
                }}
                handleBlur={() => {
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  setCurrentCity('');
                  handleInputRequired(currentState)
                    ? setCurrentStateError(AuthError.InputRequired)
                    : null;
                }}
              />
            </div>
            <div className="mt-4 w-full">
              <SelectInput
                name="city"
                label="Oraș / Sector"
                value={currentCity}
                placeholder={'Sectorul 1'}
                options={currentCites}
                handleChange={(e) => {
                  setCurrentCityError('');
                  setCurrentCity(e.target.value);
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                }}
                handleBlur={() => {
                  setCurrentGyms([]);
                  setShowCurrentGyms(false);
                  handleInputRequired(currentCity)
                    ? setCurrentCityError(AuthError.InputRequired)
                    : null;
                }}
                error={currentCityError}
              />
            </div>
            <button
              onClick={findGyms}
              disabled={
                gymType === '' || currentState === '' || currentCity === ''
              }
              className={clsx(
                'mt-6 inline-flex h-fit w-full max-w-[400px] items-center justify-center justify-self-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:mx-auto',
                {
                  '!bg-gray-300 !text-gray-600':
                    gymType === '' || currentState === '' || currentCity === '',
                },
              )}
            >
              <svg
                className="mr-2 -ml-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
              CAUTA
            </button>
          </div>
        </div>
      </section>

      <div id="gyms-section"></div>
      {showCurrentGyms ? (
        currentGyms.length > 0 ? (
          <SectionWithWave bgWhite={true}>
            <h2 className="mb-4 text-center text-3xl font-bold">
              Sali de antrenament <br /> in {currentCity}
            </h2>
            <ProList proList={currentGyms} isHome={false} />
          </SectionWithWave>
        ) : (
          <SectionWithWave bgWhite={true}>
            <h1>Nu s-au gasit antrenori</h1>
          </SectionWithWave>
        )
      ) : null}
    </>
  );
}
