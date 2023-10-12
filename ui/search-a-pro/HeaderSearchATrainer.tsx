'use client';
import { useState } from 'react';
import { RomaniaStatesData } from '#/data/location-data';
import SelectInput from '#/ui/shared/form/SelectInput';
import SectionWithWave from '#/ui/shared/SectionWithWave';
import ProList from '#/ui/shared/ProList';
import { flushSync } from 'react-dom';
import { executeScroll } from '#/helpers/scroll-to';
import { handleInputRequired } from '#/utils/helpers';
import { TypedTrainerDetails } from 'ts';
import clsx from 'clsx';
import { removeDuplicate } from '#/helpers/remove-duplicate';
import { useSupabase } from '#/modules/application/supabase/supabase-provider';

import { AuthInputError } from '#/ts/enum';

export default function HeaderSearchATrainer({
  trainers,
}: {
  trainers: TypedTrainerDetails[];
}) {
  const { supabase } = useSupabase();
  const [trainerType, setTrainerType] = useState('');
  const [trainerTypeError, setTrainerTypeError] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentStateError, setCurrentStateError] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentCityError, setCurrentCityError] = useState('');
  const [currentTrainers, setCurrentTrainers] = useState<TypedTrainerDetails[]>(
    [],
  );
  const [showCurrentTrainers, setShowCurrentTrainers] =
    useState<boolean>(false);

  let currentCites: string[] = [];
  const trainerTypesData = trainers.map(
    (trainer) => trainer.pro_type as string,
  );
  const trainerStatesData = trainers.map((trainer) => trainer.state as string);
  const trainerTypes: string[] = removeDuplicate(trainerTypesData);
  const states: string[] = removeDuplicate(trainerStatesData);

  RomaniaStatesData.filter((state) => {
    if (state.name === currentState) {
      currentCites = state.cities;
    }
  });

  const findTrainers = async () => {
    if (trainerType && currentCity) {
      const { data: trainers } = await supabase
        .from('trainers')
        .select('*')
        .eq('pro_type', trainerType)
        .eq('city', currentCity);

      flushSync(() => {
        setCurrentTrainers(trainers as TypedTrainerDetails[]);
        setShowCurrentTrainers(true);
      });
      // Scroll to the trainer section where we see the trainers searched
      executeScroll('trainers-section');
    }
  };

  return (
    <>
      <section className="bg-noRepeat flex min-h-screen items-center bg-gray-700 bg-[url('https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')] bg-cover bg-center bg-blend-multiply">
        <div className="z-1 relative mx-auto max-w-screen-xl py-8 px-4 text-white lg:py-16 xl:px-0">
          <div className="mx-auto mb-6 flex max-w-screen-md flex-col justify-center text-center lg:mb-0">
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-normal text-white md:text-5xl xl:text-6xl">
              Antrenori personali
            </h1>
            <p className="mx-auto mb-6 max-w-xl font-light text-gray-300 md:text-lg xl:mb-8 xl:text-xl">
              Caută un antrenor personal să îți descoperi potențialul fizic, să
              îți stabilești obiective realiste și să rămâi motivat.
            </p>
          </div>
          <div className="mt-8 flex w-full flex-wrap items-end justify-center rounded bg-gray-800 p-4 lg:mt-12">
            <div className="w-full">
              <SelectInput
                name="trainer-type"
                label="Tip de antrenor"
                value={trainerType}
                placeholder={'Fitness'}
                options={trainerTypes}
                handleChange={(e) => {
                  setTrainerTypeError('');
                  setTrainerType(e.target.value);
                  setCurrentTrainers([]);
                  setShowCurrentTrainers(false);
                  setCurrentState('');
                  setCurrentCity('');
                }}
                handleBlur={() => {
                  setCurrentTrainers([]);
                  setShowCurrentTrainers(false);
                  setCurrentState('');
                  setCurrentCity('');
                  handleInputRequired(trainerType)
                    ? setTrainerTypeError(AuthInputError.InputRequired)
                    : null;
                }}
                error={trainerTypeError}
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
                  setCurrentTrainers([]);
                  setCurrentCity('');
                  setShowCurrentTrainers(false);
                }}
                handleBlur={() => {
                  setCurrentTrainers([]);
                  setShowCurrentTrainers(false);
                  setCurrentCity('');
                  handleInputRequired(currentState)
                    ? setCurrentStateError(AuthInputError.InputRequired)
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
                  setCurrentTrainers([]);
                  setShowCurrentTrainers(false);
                }}
                handleBlur={() => {
                  setCurrentTrainers([]);
                  setShowCurrentTrainers(false);
                  handleInputRequired(currentCity)
                    ? setCurrentCityError(AuthInputError.InputRequired)
                    : null;
                }}
                error={currentCityError}
              />
            </div>
            <button
              onClick={findTrainers}
              disabled={
                trainerType === '' || currentState === '' || currentCity === ''
              }
              className={clsx(
                'mt-6 inline-flex h-fit w-full max-w-[400px] items-center justify-center justify-self-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 md:mx-auto',
                {
                  '!bg-gray-300 !text-gray-600':
                    trainerType === '' ||
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
      <div id="trainers-section"></div>
      {showCurrentTrainers ? (
        currentTrainers.length > 0 ? (
          <SectionWithWave bgWhite={true}>
            <h2 className="mb-4 text-center text-3xl font-bold">
              Antrenori personali <br /> in {currentCity}
            </h2>
            <ProList proList={currentTrainers} isHome={false} />
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
