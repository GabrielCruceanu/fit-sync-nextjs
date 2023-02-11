'use client';
import {
  ClientDetails,
  GymDetails,
  NutritionistDetails,
  TrainerDetails,
  UserDetails,
} from '#/types/types';
import OnboardSteps, {
  OnboardStepsType,
} from '#/ui/user-onboarding/OnboardSteps';
import { useState } from 'react';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import {
  handleInputRequired,
  validateOnlyLetter,
  validateUsername,
} from '#/utils/helpers';
import { AuthError } from '#/constants/authError';
import { GenderList, UserType } from '#/constants/user';
import { RomaniaStatesData } from '#/constants/location';
import SelectInput from '#/ui/shared/form/SelectInput';
import Input from '#/ui/shared/form/Input';

export default function UserDetailsOnboard({
  handleSetUserDetails,
  handleSetOnboardSteps,
  userType,
}: {
  handleSetUserDetails: (
    value:
      | ClientDetails
      | TrainerDetails
      | NutritionistDetails
      | GymDetails
      | null,
  ) => void;
  handleSetOnboardSteps: (value: OnboardStepsType) => void;
  userType: UserDetails['user_type'];
}) {
  const { supabase } = useSupabase();

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentStateError, setCurrentStateError] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentCityError, setCurrentCityError] = useState('');

  const handleSetOnboardStepsClick = () => {
    handleSetOnboardSteps(OnboardStepsType.UserType);
  };

  const handleUserDetailsClick = () => {
    handleSetUserDetails(null);
    handleSetOnboardSteps(OnboardStepsType.UserConfirm);
    console.log('handleUserDetailsClick');
  };

  const handleSearchUsername = async () => {
    if (handleInputRequired(username)) {
      setUsernameError(AuthError.InputRequired);
      return;
    }

    if (!validateUsername(username)) {
      setUsernameError(AuthError.UsernameInvalid);
      return;
    }

    let { data: usernames } = await supabase.from('usernames').select('*');

    const found = usernames?.find((item) => item.username === username);

    if (found) {
      setUsernameError(AuthError.UsernameIsNotAvailable);
    }
  };
  const genderType = GenderList;

  let currentCites: string[] = [];
  const states = RomaniaStatesData.map((state) => state.name);

  RomaniaStatesData.filter((state) => {
    if (state.name === currentState) {
      currentCites = state.cities;
    }
  });

  console.log('gender', gender);
  console.log('currentState', currentState);

  return (
    <section className="bg-gray-900 py-8 lg:py-0">
      <div className="md:flex md:min-h-[42rem]">
        <div className="mx-auto flex items-center px-4 md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <OnboardSteps currentStep={OnboardStepsType.UserDetails} />
            <h1 className="mb-4 text-center text-2xl font-extrabold leading-tight tracking-tight text-white">
              Detalii cont
            </h1>
            <p className="mb-4 text-center text-lg font-light text-gray-300">
              Completeaza campurile de mai jos pentru a merge mai departe.
            </p>
            <form className="mb-6 md:flex md:flex-wrap">
              {userType === UserType.Gym ? (
                <>
                  {/*NAME*/}
                  <div className="my-2 w-full md:w-6/12 md:px-2">
                    <Input
                      name="name"
                      label="Nume sala"
                      value={name}
                      type="text"
                      placeholder="Gym Fit"
                      error={nameError}
                      handleChange={(event) => {
                        setName(event.target.value);
                        setNameError('');
                      }}
                      handleBlur={() => {
                        handleInputRequired(name)
                          ? setNameError(AuthError.InputRequired)
                          : !validateOnlyLetter(name)
                          ? setNameError(AuthError.OnlyLetter)
                          : null;
                      }}
                    />
                  </div>
                </>
              ) : (
                <>
                  {/*LASTNAME*/}
                  <div className="my-2 w-full md:w-6/12 md:px-2">
                    <Input
                      name="lastname"
                      label="Nume"
                      value={lastName}
                      type="text"
                      placeholder="Jon"
                      error={lastNameError}
                      handleChange={(event) => {
                        setLastName(event.target.value);
                        setLastNameError('');
                      }}
                      handleBlur={() => {
                        handleInputRequired(lastName)
                          ? setLastNameError(AuthError.InputRequired)
                          : !validateOnlyLetter(lastName)
                          ? setLastNameError(AuthError.OnlyLetter)
                          : null;
                      }}
                    />
                  </div>

                  {/*FIRSTNAME*/}
                  <div className="my-2 w-full md:w-6/12 md:px-2">
                    <Input
                      name="firstname"
                      label="Prenume"
                      value={firstName}
                      type="text"
                      placeholder="Doe"
                      error={firstNameError}
                      handleChange={(event) => {
                        setFirstName(event.target.value);
                        setFirstNameError('');
                      }}
                      handleBlur={() => {
                        handleInputRequired(firstName)
                          ? setFirstNameError(AuthError.InputRequired)
                          : !validateOnlyLetter(firstName)
                          ? setFirstNameError(AuthError.OnlyLetter)
                          : null;
                      }}
                    />
                  </div>
                </>
              )}

              {/*USERNAME*/}
              <div className="my-2 w-full md:w-6/12 md:px-2">
                <Input
                  name="username"
                  label="Nume de utilizator"
                  value={username}
                  type="text"
                  placeholder="jondoe"
                  error={usernameError}
                  handleChange={(event) => {
                    setUsername(event.target.value);
                    setUsernameError('');
                  }}
                  handleBlur={() => {
                    handleSearchUsername();
                    handleInputRequired(username)
                      ? setUsernameError(AuthError.InputRequired)
                      : !validateOnlyLetter(username)
                      ? setUsernameError(AuthError.OnlyLetter)
                      : null;
                  }}
                />
              </div>

              {userType !== UserType.Gym ? (
                <>
                  {/*GENDER*/}
                  <div className="my-2 w-full md:w-6/12 md:px-2">
                    <SelectInput
                      name="gender"
                      label="Gen"
                      placeholder="Masculin"
                      options={genderType}
                      handleChange={(e) => {
                        setGenderError('');
                        setGender(e.target.value);
                      }}
                      handleBlur={() => {
                        handleInputRequired(gender)
                          ? setGenderError(AuthError.InputRequired)
                          : null;
                      }}
                      error={genderError}
                    />
                  </div>
                </>
              ) : null}

              {/*STATE*/}
              <div className="my-2 w-full md:w-6/12 md:px-2">
                <SelectInput
                  name="state"
                  label="Judet"
                  placeholder="Bucuresti"
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

              {/*City*/}
              <div className="my-2 w-full md:w-6/12 md:px-2">
                <SelectInput
                  name="city"
                  label="Oras / Sector"
                  placeholder="Sector 1"
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
            </form>
            <div className="flex space-x-3">
              <button
                onClick={() => handleSetOnboardStepsClick()}
                className="w-full items-center rounded-lg border border-gray-600 bg-gray-800 py-2.5 text-center text-sm font-medium text-gray-400 hover:bg-gray-100 hover:bg-gray-700 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-700 sm:py-3.5"
              >
                Anterior
                <span className="hidden sm:inline-block">: Tip utilizator</span>
              </button>
              <button
                onClick={() => handleUserDetailsClick()}
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-800 sm:py-3.5"
              >
                Urmatorul
                <span className="hidden sm:inline-block">: Confirmare</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
