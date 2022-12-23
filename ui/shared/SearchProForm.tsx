'use client';
import { useState } from 'react';
import { RomaniaStatesData } from '#/constants/location';
import SelectInput from '#/ui/shared/form/SelectInput';
import { TrainerTypeList } from '#/constants/trainer';
import Button, { ButtonType } from '#/ui/shared/Button';

export default function SearchProForm() {
  const [trainer, setTrainer] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  let currentCites: string[] = [];

  const states = RomaniaStatesData.map((state) => state.name);

  RomaniaStatesData.filter((state) => {
    if (state.name === currentState) {
      currentCites = state.cities;
    }
  });

  const logsAll = () => {
    console.log('trainer', trainer);
    console.log('currentState', currentState);
    console.log('currentCity', currentCity);
    console.log('currentCites', currentCites);
  };
  return (
    <form action="" className="w-full">
      <SelectInput
        name="trainer-type"
        label="Tip de antrenor"
        options={TrainerTypeList}
        handleChange={(e) => setTrainer(e.target.value)}
      />

      {trainer.length > 0 ? (
        <SelectInput
          name="state"
          label="Județ"
          options={states}
          handleChange={(e) => setCurrentState(e.target.value)}
        />
      ) : null}

      {currentState.length > 0 ? (
        <SelectInput
          name="city"
          label="Oraș"
          options={currentCites}
          handleChange={(e) => setCurrentCity(e.target.value)}
        />
      ) : null}

      <div className="mt-4 text-center">
        <Button
          type={ButtonType.primary}
          description="CAUTĂ UN ANTRENOR"
          submit={false}
          onClick={logsAll}
        />
      </div>
    </form>
  );
}
