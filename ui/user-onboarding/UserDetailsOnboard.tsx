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
import clsx from 'clsx';
import { AuthError } from '#/constants/authError';
import { GenderType } from '#/constants/user';

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

  console.log('UserDetailsOnboard userType', userType);
  const [username, setUsername] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [gender, setGender] = useState('');
  const [genderError, setGenderError] = useState('');

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

    let { data: usernames, error } = await supabase
      .from('usernames')
      .select('*');

    const finded = usernames?.find((item) => item.username === username);
    if (finded) {
      setUsernameError(AuthError.UsernameIsNotAvailable);
    }
  };

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
              {/*LAST NAME*/}
              <div className="my-3 w-full md:w-6/12 md:px-2">
                <label
                  htmlFor="lastname"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Nume *
                </label>
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  className={clsx(
                    'block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-primary-600 focus:ring-primary-600 sm:text-sm',
                    {
                      'border-red-600': lastNameError.length > 0,
                    },
                  )}
                  value={lastName}
                  placeholder="Jon"
                  required={true}
                  onChange={(event) => {
                    setLastName(event.target.value);
                    setLastNameError('');
                  }}
                  onBlur={() => {
                    handleInputRequired(lastName)
                      ? setLastNameError(AuthError.InputRequired)
                      : !validateOnlyLetter(lastName)
                      ? setLastNameError(AuthError.OnlyLetter)
                      : null;
                  }}
                />
                {lastNameError ? (
                  <p className="mt-2 block text-xs font-medium text-red-500">
                    {lastNameError}
                  </p>
                ) : null}
              </div>
              {/*FIRST NAME*/}
              <div className="my-3 w-full md:w-6/12 md:px-2">
                <label
                  htmlFor="firstname"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Prenume *
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  className={clsx(
                    'block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-primary-600 focus:ring-primary-600 sm:text-sm',
                    {
                      'border-red-600': firstNameError.length > 0,
                    },
                  )}
                  value={firstName}
                  placeholder="Doe"
                  required={true}
                  onChange={(event) => {
                    setFirstName(event.target.value);
                    setFirstNameError('');
                  }}
                  onBlur={() => {
                    handleInputRequired(firstName)
                      ? setFirstNameError(AuthError.InputRequired)
                      : !validateOnlyLetter(firstName)
                      ? setFirstNameError(AuthError.OnlyLetter)
                      : null;
                  }}
                />
                {firstNameError ? (
                  <p className="mt-2 block text-xs font-medium text-red-500">
                    {firstNameError}
                  </p>
                ) : null}
              </div>
              {/*USERNAME*/}
              <div className="my-3 w-full md:w-6/12 md:px-2">
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Nume de utilizator *
                </label>
                <input
                  type="text"
                  name="username"
                  id="email"
                  className={clsx(
                    'block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-primary-600 focus:ring-primary-600 sm:text-sm',
                    {
                      'border-red-600': usernameError.length > 0,
                    },
                  )}
                  value={username}
                  placeholder="jondoe"
                  required={true}
                  onChange={(event) => {
                    setUsername(event.target.value);
                    setUsernameError('');
                  }}
                  onBlur={() => {
                    handleSearchUsername();
                  }}
                />
                {usernameError ? (
                  <p className="mt-2 block text-xs font-medium text-red-500">
                    {usernameError}
                  </p>
                ) : null}
              </div>
              {/*GENDER*/}
              <div className="my-3 w-full md:w-6/12 md:px-2">
                <label
                  htmlFor="gender"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Gen *
                </label>
                <select
                  name="gender"
                  id="gender"
                  className={clsx(
                    'block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-white placeholder-gray-400 focus:border-primary-600 focus:ring-primary-600 sm:text-sm',
                    {
                      'border-red-600': genderError.length > 0,
                    },
                  )}
                  value={gender}
                  placeholder="Masculin"
                  required={true}
                  onChange={(event) => {
                    setGender(event.target.value);
                    setGenderError('');
                  }}
                  onBlur={() => {
                    handleInputRequired(gender)
                      ? setGenderError(AuthError.InputRequired)
                      : null;
                  }}
                >
                  <option value="">Alege</option>
                  <option value={GenderType.Male}>Masculin</option>
                  <option value={GenderType.Female}>Feminin</option>
                  <option value={GenderType.Other}>Altul</option>
                </select>
                {genderError ? (
                  <p className="mt-2 block text-xs font-medium text-red-500">
                    {genderError}
                  </p>
                ) : null}
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
