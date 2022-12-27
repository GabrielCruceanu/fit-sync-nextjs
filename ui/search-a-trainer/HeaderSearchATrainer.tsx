'use client';
import HeroBackground from '#/ui/shared/HeroBackground';
import { useState } from 'react';
import { RomaniaStatesData } from '#/constants/location';
import SelectInput from '#/ui/shared/form/SelectInput';
import { TrainerTypeList } from '#/constants/trainer';
import Button, { ButtonType } from '#/ui/shared/Button';
import SectionWithWave from '#/ui/shared/SectionWithWave';
import ProList from '#/ui/shared/ProList';
import TrainerProfileModel from '#/model/trainer/trainerProfile.model';
import { flushSync } from 'react-dom';
import { executeScroll } from '#/lib/scrollTo';

export default function HeaderSearchATrainer({
  trainers,
}: {
  trainers: TrainerProfileModel[];
}) {
  const [trainerType, setTrainerType] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentTrainers, setCurrentTrainers] = useState<TrainerProfileModel[]>(
    [],
  );
  let currentCites: string[] = [];
  let trainersSearched: TrainerProfileModel[];

  const states = RomaniaStatesData.map((state) => state.name);

  RomaniaStatesData.filter((state) => {
    if (state.name === currentState) {
      currentCites = state.cities;
    }
  });

  const searchTrainers = () => {
    trainersSearched = trainers.filter(
      (trainer) => trainer.type === trainerType && trainer.city === currentCity,
    );
    // Will wait until the DOM is updated with the new state
    flushSync(() => {
      setCurrentTrainers(trainersSearched);
    });

    // Scroll to the trainer section where we see the trainers searched
    executeScroll('trainers-section');
  };

  return (
    <>
      <section className="relative z-0 flex min-h-screen w-full items-center justify-center p-4">
        <HeroBackground />
        <div className="container ">
          <div className="items-center justify-around lg:flex">
            <div className="flex w-full flex-col items-center lg:block lg:max-w-[600px]">
              <h1 className="mb-3 text-center text-3xl font-semibold md:text-5xl lg:mb-4 lg:text-5xl lg:leading-tight">
                Antrenori personali
              </h1>
              <p className="mb-4 text-center">
                Căutați în cea mai cuprinzătoare bază de date de formatori din
                România. Antrenorul dumneavoastră este aici.
              </p>
              <div className="w-full justify-center lg:flex">
                <div className="lg:mx-2 lg:w-4/12">
                  <SelectInput
                    name="trainer-type"
                    label="Tip de antrenor"
                    options={TrainerTypeList}
                    handleChange={(e) => setTrainerType(e.target.value)}
                  />
                </div>

                {trainerType ? (
                  <div className="lg:mx-2 lg:w-4/12">
                    <SelectInput
                      name="state"
                      label="Județ"
                      options={states}
                      handleChange={(e) => setCurrentState(e.target.value)}
                    />
                  </div>
                ) : null}

                {currentState ? (
                  <div className="lg:mx-2 lg:w-4/12">
                    <SelectInput
                      name="city"
                      label="Oraș / Sector"
                      options={currentCites}
                      handleChange={(e) => setCurrentCity(e.target.value)}
                    />
                  </div>
                ) : null}
              </div>
              {currentCity ? (
                <div className="mt-4 text-center">
                  <Button
                    type={ButtonType.primary}
                    description="CAUTĂ ANTRENORI"
                    submit={false}
                    onClick={searchTrainers}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {currentTrainers.length > 0 ? (
        <SectionWithWave bgWhite={true} id="trainers-section">
          <ProList proList={currentTrainers} isHome={false} />
        </SectionWithWave>
      ) : null}
    </>
  );
}
