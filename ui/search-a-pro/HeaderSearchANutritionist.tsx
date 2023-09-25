'use client';
import { useState } from 'react';
import { RomaniaStatesData } from '#/data/location-data';
import SelectInput from '#/ui/shared/form/SelectInput';
import SectionWithWave from '#/ui/shared/SectionWithWave';
import ProList from '#/ui/shared/ProList';
import { flushSync } from 'react-dom';
import { executeScroll } from '#/helpers/scroll-to';
import { handleInputRequired } from '#/utils/helpers';
import { InputError } from '#/types/Error';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { TypedNutritionistDetails } from '#/types';
import clsx from 'clsx';
import { removeDuplicate } from '#/helpers/remove-duplicate';

export default function HeaderSearchANutritionist({
  nutritionists,
}: {
  nutritionists: TypedNutritionistDetails[];
}) {
  const { supabase } = useSupabase();
  const [nutritionistType, setNutritionistType] = useState('');
  const [nutritionistTypeError, setNutritionistTypeError] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentStateError, setCurrentStateError] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentCityError, setCurrentCityError] = useState('');
  const [currentNutritionists, setCurrentNutritionists] = useState<
    TypedNutritionistDetails[]
  >([]);
  const [showCurrentNutritionists, setShowCurrentNutritionists] =
    useState<boolean>(false);
  let currentCites: string[] = [];
  const nutritionistTypesData = nutritionists.map(
    (nutritionist) => nutritionist.pro_type as string,
  );
  const nutritionistStatesData = nutritionists.map(
    (trainer) => trainer.state as string,
  );
  const nutritionistTypes: string[] = removeDuplicate(nutritionistTypesData);
  const states: string[] = removeDuplicate(nutritionistStatesData);

  RomaniaStatesData.filter((state) => {
    if (state.name === currentState) {
      currentCites = state.cities;
    }
  });

  const findNutritionists = async () => {
    if (nutritionistTypes && currentCity) {
      const { data: nutritionists } = await supabase
        .from('nutritionists')
        .select('*')
        .eq('pro_type', nutritionistType)
        .eq('city', currentCity);
      // Will wait until the DOM is updated with the new state
      flushSync(() => {
        setCurrentNutritionists(nutritionists as TypedNutritionistDetails[]);
        setShowCurrentNutritionists(true);
      });

      // Scroll to the trainer section where we see the trainers searched
      executeScroll('nutritionists-section');
    }
  };

  return (
    <>
      <section className="bg-noRepeat flex min-h-screen items-center bg-gray-700 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')] bg-cover bg-center bg-blend-multiply">
        <div className="z-1 relative mx-auto max-w-screen-xl py-8 px-4 text-white lg:py-16 xl:px-0">
          <div className="mx-auto mb-6 flex max-w-screen-md flex-col justify-center text-center lg:mb-0">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-normal text-white md:text-5xl xl:text-6xl">
              Nutriționiști
            </h1>
            <p className="mx-auto mb-6 max-w-xl font-light text-gray-300 md:text-lg xl:mb-8 xl:text-xl">
              Aceștia oferă îndrumarea și sfaturile necesare pentru a te asigura
              că obții cele mai bune beneficii din dieta și exercițiile fizice.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-wrap items-end justify-center rounded bg-gray-800 p-4 lg:mt-12">
            <div className="w-full">
              <SelectInput
                name="nutritionist-type"
                label="Tip de nutritionist"
                value={nutritionistType}
                placeholder={'Terapeut nutritionist'}
                options={nutritionistTypes}
                handleChange={(e) => {
                  setNutritionistTypeError('');
                  setNutritionistType(e.target.value);
                  setCurrentNutritionists([]);
                  setShowCurrentNutritionists(false);
                  setCurrentState('');
                  setCurrentCity('');
                }}
                handleBlur={() => {
                  setCurrentNutritionists([]);
                  setShowCurrentNutritionists(false);
                  setCurrentState('');
                  setCurrentCity('');
                  setNutritionistTypeError('');
                  handleInputRequired(nutritionistType)
                    ? setNutritionistType(InputError.InputRequired)
                    : null;
                }}
                error={nutritionistTypeError}
              />
            </div>
            <div className="mt-4 w-full">
              <SelectInput
                name="state"
                label="Judet"
                value={currentState}
                placeholder={'Bucuresti'}
                options={states}
                handleChange={(e) => {
                  setCurrentStateError('');
                  setCurrentState(e.target.value);
                  setCurrentNutritionists([]);
                  setShowCurrentNutritionists(false);
                  setCurrentCity('');
                }}
                handleBlur={() => {
                  setCurrentNutritionists([]);
                  setShowCurrentNutritionists(false);
                  setCurrentCity('');
                  handleInputRequired(currentState)
                    ? setCurrentStateError(InputError.InputRequired)
                    : null;
                }}
                error={currentStateError}
              />
            </div>
            <div className="mt-4 w-full">
              <SelectInput
                name="city"
                label="Oras / Sector"
                value={currentCity}
                placeholder={'Sectorul 1'}
                options={currentCites}
                handleChange={(e) => {
                  setCurrentCityError('');
                  setCurrentCity(e.target.value);
                  setCurrentNutritionists([]);
                  setShowCurrentNutritionists(false);
                }}
                handleBlur={() => {
                  setCurrentNutritionists([]);
                  setShowCurrentNutritionists(false);
                  handleInputRequired(currentCity)
                    ? setCurrentCityError(InputError.InputRequired)
                    : null;
                }}
                error={currentCityError}
              />
            </div>
            <button
              onClick={findNutritionists}
              disabled={
                nutritionistType === '' ||
                currentState === '' ||
                currentCity === ''
              }
              className={clsx(
                'mt-6 inline-flex h-fit w-full max-w-[400px] items-center justify-center justify-self-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:mx-auto',
                {
                  '!bg-gray-300 !text-gray-600':
                    nutritionistType === '' ||
                    currentState === '' ||
                    currentCity === '',
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

      <div id="nutritionists-section"></div>
      {showCurrentNutritionists ? (
        currentNutritionists.length > 0 ? (
          <SectionWithWave bgWhite={true}>
            <h2 className="mb-4 text-center text-3xl font-bold">
              Nutritionisti <br /> in {currentCity}
            </h2>
            <ProList proList={currentNutritionists} isHome={false} />
          </SectionWithWave>
        ) : (
          <SectionWithWave bgWhite={true}>
            <h1>Nu s-au gasit nutritionisti</h1>
          </SectionWithWave>
        )
      ) : null}
    </>
  );
}
