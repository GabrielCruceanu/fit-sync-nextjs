'use client';
import { useState } from 'react';
import { RomaniaStatesData } from '#/data/location-data';
import SelectInput from '#/ui/shared/form/SelectInput';
import { NutritionistTypeList } from '#/constants/trainer';
import SectionWithWave from '#/ui/shared/SectionWithWave';
import ProList from '#/ui/shared/ProList';
import TrainerProfileModel from '#/model/trainer/trainerProfile.model';
import { flushSync } from 'react-dom';
import { executeScroll } from '#/lib/scrollTo';
import { handleInputRequired } from '#/utils/helpers';
import { AuthError } from '#/constants/authError';

export default function HeaderSearchANutritionist({
  nutritionists,
}: {
  nutritionists: TrainerProfileModel[];
}) {
  const [nutritionistType, setNutritionistType] = useState('');
  const [nutritionistTypeError, setNutritionistTypeError] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentStateError, setCurrentStateError] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentCityError, setCurrentCityError] = useState('');
  const [currentNutritionists, setCurrentNutritionists] = useState<
    TrainerProfileModel[]
  >([]);
  let currentCites: string[] = [];
  let nutritionistsSearched: TrainerProfileModel[];

  const states = RomaniaStatesData.map((state) => state.name);

  RomaniaStatesData.filter((state) => {
    if (state.name === currentState) {
      currentCites = state.cities;
    }
  });

  const searchNutritionists = () => {
    nutritionistsSearched = nutritionists.filter(
      (nutritionist) =>
        nutritionist.type === nutritionistType &&
        nutritionist.city === currentCity,
    );
    // Will wait until the DOM is updated with the new state
    flushSync(() => {
      setCurrentNutritionists(nutritionistsSearched);
    });

    // Scroll to the trainer section where we see the trainers searched
    executeScroll('nutritionists-section');
  };

  return (
    <>
      <section className="bg-noRepeat flex min-h-screen items-center bg-gray-700 bg-[url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80')] bg-cover bg-center bg-blend-multiply">
        <div className="z-1 relative mx-auto max-w-screen-xl py-8 px-4 text-white lg:py-16 xl:px-0">
          <div className="mx-auto mb-6 flex max-w-screen-md flex-col justify-center text-center lg:mb-0">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-normal text-white md:text-5xl xl:text-6xl">
              Nutritionisti
            </h1>
            <p className="mx-auto mb-6 max-w-xl font-light text-gray-300 md:text-lg xl:mb-8 xl:text-xl">
              Cauta în cea mai cuprinzătoare baza de date de nutritionisti din
              Romania. Nutritionistul tau este aici.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-wrap items-end justify-center rounded bg-gray-800 p-4 lg:mt-12">
            <div className="w-full md:w-4/12 md:px-3">
              <SelectInput
                name="nutritionist-type"
                label="Tip de nutritionist"
                value={nutritionistType}
                placeholder={'Terapeut nutritionist'}
                options={NutritionistTypeList}
                handleChange={(e) => {
                  setNutritionistTypeError('');
                  setNutritionistType(e.target.value);
                }}
                handleBlur={() => {
                  setNutritionistTypeError('');
                  handleInputRequired(nutritionistType)
                    ? setNutritionistType(AuthError.InputRequired)
                    : null;
                }}
                error={nutritionistTypeError}
              />
            </div>
            <div className="mt-4 w-full md:w-4/12 md:px-3">
              <SelectInput
                name="state"
                label="Judet"
                value={currentState}
                placeholder={'Bucuresti'}
                options={states}
                handleChange={(e) => {
                  setCurrentStateError('');
                  setCurrentState(e.target.value);
                }}
                handleBlur={() => {
                  handleInputRequired(currentState)
                    ? setCurrentStateError(AuthError.InputRequired)
                    : null;
                }}
                error={currentStateError}
              />
            </div>
            <div className="mt-4 w-full md:w-4/12 md:px-3">
              <SelectInput
                name="city"
                label="Oras / Sector"
                value={currentCity}
                placeholder={'Sectorul 1'}
                options={currentCites}
                handleChange={(e) => {
                  setCurrentCityError('');
                  setCurrentCity(e.target.value);
                }}
                handleBlur={() => {
                  handleInputRequired(currentCity)
                    ? setCurrentCityError(AuthError.InputRequired)
                    : null;
                }}
                error={currentCityError}
              />
            </div>
            <button
              onClick={searchNutritionists}
              disabled={!currentCites}
              className="mt-6 inline-flex h-fit w-full max-w-[400px] items-center justify-center justify-self-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:mx-auto lg:w-4/12 "
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
                ></path>
              </svg>
              CAUTA
            </button>
          </div>
        </div>
      </section>

      {currentNutritionists.length > 0 ? (
        <SectionWithWave bgWhite={true} id="nutritionists-section">
          <ProList proList={currentNutritionists} isHome={false} />
        </SectionWithWave>
      ) : null}
    </>
  );
}
