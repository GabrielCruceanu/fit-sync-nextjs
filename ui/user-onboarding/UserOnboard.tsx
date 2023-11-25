'use client';
import { useState } from 'react';
import {
  ButtonType,
  TypedClientDetails,
  TypedGymDetails,
  TypedNutritionistDetails,
  TypedTrainerDetails,
  TypedUserDetails,
} from 'ts';
import { OnboardStepsType } from '#/ui/user-onboarding/OnboardSteps';
import { GenderList, UserType } from '#/constants/user';
import UserOnboardWrap from '#/ui/user-onboarding/UserOnboardWrap';
import InputSelectButton from '#/ui/shared/form/InputSelectButton';
import Input from '#/ui/shared/form/Input';
import {
  handleInputRequired,
  validateIsPhoneNumber,
  validateOnlyLetter,
  validateUsername,
} from '#/helpers/helpers';
import SelectInput from '#/ui/shared/form/SelectInput';
import { CitiesData, CountriesData } from '#/data/location-data';
import { useSupabase } from '#/modules/application/supabase/supabase-provider';
import ButtonFull from '#/ui/shared/form/ButtonFull';
import Datepicker from 'react-tailwindcss-datepicker';
import clsx from 'clsx';
import Paragraph from '#/ui/shared/Paragraph';
import { createUserName, updateUser } from '#/utils/supabase-client';
import { ExperienceDataList, TrainerTypeList } from '#/constants/trainer';
import { GymsTypeList } from '#/constants/gym';
import { NutritionistTypeList } from '#/constants/nutritionist';
import { createClientProfile } from '#/utils/client-hooks';
import { createNutritionistProfile } from '#/utils/nutritionist-hooks';
import { createTrainerProfile } from '#/utils/trainer-hooks';
import { createGymProfile } from '#/utils/gym-hooks';

import { AuthInputError } from '#/ts/enum';
import { Calendar } from '#/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '#/components/ui/popover';
import { date } from 'zod';
import { format, setDate } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from '#/components/ui/button';
import { cn } from '#/lib/utils';

export default function UserOnboard() {
  const { supabase, session } = useSupabase();
  const [onboardSteps, setOnboardSteps] = useState<OnboardStepsType>(
    OnboardStepsType.UserType,
  );
  const [userType, setUserType] = useState<TypedUserDetails['user_type']>(null);

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
  const [gymType, setGymType] = useState('');
  const [gymTypeError, setGymTypeError] = useState('');
  const [trainerType, setTrainerType] = useState('');
  const [trainerTypeError, setTrainerTypeError] = useState('');
  const [nutritionistType, setNutritionistType] = useState('');
  const [nutritionistTypeError, setNutritionistTypeError] = useState('');
  const [experience, setExperience] = useState('');
  const [experienceError, setExperienceError] = useState('');
  const [currentCountry, setCurrentCountry] = useState('');
  const [currentCountryError, setCurrentCountryError] = useState('');
  const [currentState, setCurrentState] = useState('');
  const [currentStateError, setCurrentStateError] = useState('');
  const [currentCity, setCurrentCity] = useState('');
  const [currentCityError, setCurrentCityError] = useState('');
  const [street, setStreet] = useState('');
  const [streetError, setStreetError] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [streetNumberError, setStreetNumberError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [birth, setBirth] = useState<Date>();
  const [birthError, setBirthError] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const [confirmBtnDisable, setConfirmBtnDisable] = useState(false);

  const handleSetOnboardSteps = (value: OnboardStepsType) => {
    setOnboardSteps(value);
  };

  const handleSetUserType = (value: TypedUserDetails['user_type']) => {
    setUserType(value);
  };

  const handleUserTypeClick = (value: TypedUserDetails['user_type']) => {
    handleSetUserType(value);
    handleSetOnboardSteps(OnboardStepsType.UserDetails);
  };

  const handleSearchUsername = async () => {
    if (handleInputRequired(username)) {
      setUsernameError(AuthInputError.InputRequired);
      return;
    }

    if (!validateUsername(username)) {
      setUsernameError(AuthInputError.UsernameInvalid);
      return;
    }

    let { data: usernames } = await supabase.from('usernames').select('*');

    const found = usernames?.find((item) => item.username === username);

    if (found) {
      setUsernameError(AuthInputError.UsernameIsNotAvailable);
    }
  };
  const genderTypeList = GenderList;
  const gymTypeList = GymsTypeList;
  const trainerTypeList = TrainerTypeList;
  const nutritionistTypeList = NutritionistTypeList;
  const experienceList = ExperienceDataList;

  let countries: string[];
  let currentStates: string[] = [];
  let currentCites: string[] = [];
  const duplicateCountries = CitiesData.map((city) => city.country);
  const duplicateStates = CitiesData.map((city) => {
    if (city.country === currentCountry) {
      return city.state;
    } else {
      return '';
    }
  });
  const duplicateCities = CitiesData.map((city) => {
    if (city.state === currentState) {
      return city.name;
    } else {
      return '';
    }
  });

  // @ts-ignore
  countries = [...new Set(duplicateCountries)].sort();

  // @ts-ignore
  currentStates = [...new Set(duplicateStates)].sort();

  // @ts-ignore
  currentCites = [...new Set(duplicateCities)].sort();

  const handleBirthChange = (newValue: any) => {
    setBirth(newValue);
    const dateLanding = new Date(newValue);
    const date = dateLanding.getDate().toString();
    const month = (dateLanding.getMonth() + 1).toString();
    const year = dateLanding.getFullYear().toString();

    setBirthDate(date);
    setBirthMonth(month);
    setBirthYear(year);
    handleInputRequired(newValue.startDate === null ? '' : newValue.startDate)
      ? setBirthError(AuthInputError.InputRequired)
      : null;
  };

  const inputsAreOk = () => {
    if (!lastName && userType !== UserType.Gym) {
      setLastNameError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!firstName && userType !== UserType.Gym) {
      setFirstNameError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!username) {
      setUsernameError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!phone) {
      setPhoneError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!currentCountry) {
      setCurrentCountryError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!currentState) {
      setCurrentStateError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!currentCity) {
      setCurrentCityError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!gender && userType !== UserType.Gym) {
      setGenderError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }
    if (!birth && userType !== UserType.Gym) {
      setBirthError(AuthInputError.InputRequired);
      setConfirmBtnDisable(true);
      return;
    }

    switch (userType) {
      case UserType.Gym:
        if (!name) {
          setNameError(AuthInputError.InputRequired);
          setConfirmBtnDisable(true);
          return;
        }
        if (!gymType) {
          setGymTypeError(AuthInputError.InputRequired);
          setConfirmBtnDisable(true);
          return;
        }
        if (!street) {
          setStreetError(AuthInputError.InputRequired);
          setConfirmBtnDisable(true);
          return;
        }
        if (!streetNumber) {
          setStreetNumberError(AuthInputError.InputRequired);
          setConfirmBtnDisable(true);
          return;
        }
        break;
      case UserType.Trainer:
        if (!trainerType) {
          setTrainerTypeError(AuthInputError.InputRequired);
          setConfirmBtnDisable(true);
          return;
        }
        if (!experience) {
          setExperienceError(AuthInputError.InputRequired);
          setConfirmBtnDisable(true);
          return;
        }
        break;
      case UserType.Nutritionist:
        if (!nutritionistType) {
          setNutritionistTypeError(AuthInputError.InputRequired);
          setConfirmBtnDisable(true);
          return;
        }
        if (!experience) {
          setExperienceError(AuthInputError.InputRequired);
          setConfirmBtnDisable(true);
          return;
        }
        break;
    }
    setConfirmBtnDisable(false);
    handleSetOnboardSteps(OnboardStepsType.UserConfirm);
  };

  const handleConfirm = () => {
    const today = new Date().toISOString();
    if (session?.user && session.user.email && userType) {
      createUserName({
        user: session.user,
        username: username,
        supabase: supabase,
      });
      updateUser({
        user: session.user,
        email: session.user.email,
        username: username,
        firstName: firstName ? firstName : null,
        lastName: lastName ? lastName : null,
        name: name ? name : null,
        profile_picture_url: null,
        userType: userType,
        supabase: supabase,
      });

      switch (userType) {
        case UserType.Gym:
          const gym: TypedGymDetails = {
            id: session.user.id,
            email: session.user.email,
            type: userType,
            username: username,
            gym_name: name,
            first_name: null,
            last_name: null,
            active_clients: null,
            completed_clients: null,
            experience: null,
            pro_type: gymType,
            phone: phone,
            country: CountriesData[0].name,
            state: currentState,
            city: currentCity,
            street: street,
            street_number: streetNumber,
            joined: today,
            active_personal_trainers: null,
            certificate: false,
            description: null,
            facebook: null,
            gallery: null,
            has_premium: false,
            instagram: null,
            personal: null,
            profile_picture_url: null,
            twitter: null,
            website: null,
          };
          createGymProfile(session.user, gym, supabase);
          break;
        case UserType.Trainer:
          const trainer: TypedTrainerDetails = {
            id: session.user.id,
            email: session.user.email,
            type: userType,
            username: username,
            joined: today,
            gym_name: null,
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            phone: phone,
            birth_date: birthDate,
            birth_month: birthMonth,
            birth_year: birthYear,
            pro_type: trainerType,
            experience: experience,
            country: CountriesData[0].name,
            city: currentCity,
            state: currentState,
            certificate: false,
            description: null,
            facebook: null,
            gallery: null,
            active_clients: null,
            completed_clients: null,
            has_premium: false,
            profile_picture_url: null,
            twitter: null,
            instagram: null,
            website: null,
          };
          createTrainerProfile(session.user, trainer, supabase);
          break;
        case UserType.Nutritionist:
          const nutritionist: TypedNutritionistDetails = {
            id: session.user.id,
            email: session.user.email,
            joined: today,
            type: userType,
            username: username,
            gym_name: null,
            first_name: firstName,
            last_name: lastName,
            gender: gender,
            phone: phone,
            birth_date: birthDate,
            birth_month: birthMonth,
            birth_year: birthYear,
            pro_type: nutritionistType,
            experience: experience,
            country: CountriesData[0].name,
            city: currentCity,
            state: currentState,
            certificate: false,
            description: null,
            facebook: null,
            gallery: null,
            active_clients: null,
            completed_clients: null,
            programs: null,
            has_premium: false,
            profile_picture_url: null,
            twitter: null,
            instagram: null,
            website: null,
          };
          createNutritionistProfile(session.user, nutritionist, supabase);
          break;
        case UserType.Client:
          const client: TypedClientDetails = {
            client_id: session.user.id,
            first_name: firstName,
            last_name: lastName,
            country: CountriesData[0].name,
            city: currentCity,
            state: currentState,
            email: session.user.email,
            birth_date: birthDate,
            birth_month: birthMonth,
            birth_year: birthYear,
            gender: gender,
            has_premium: false,
            joined: today,
            profile_picture_url: null,
            type: userType,
            username: username,
            phone: phone,
          };
          createClientProfile(session.user, client, supabase);
          break;
      }
    }
  };

  if (onboardSteps === OnboardStepsType.UserType)
    return (
      <UserOnboardWrap
        currentStep={OnboardStepsType.UserType}
        heading={'Tipul de utilizator'}
        paragraph={'Ce tip de cont ați dori să aveți?'}
      >
        <ul className="md:container px-3 mb-6 flex flex-wrap items-center justify-center">
          <li className="mt-3 h-fit w-full md:w-6/12 md:pr-1">
            <InputSelectButton
              label={'Client'}
              name={UserType.Client}
              value={UserType.Client}
              handleClick={() => handleUserTypeClick(UserType.Client)}
            />
          </li>
          <li className="mt-3 h-fit w-full md:w-6/12 md:pl-1">
            <InputSelectButton
              label={'Personal Trainer'}
              name={UserType.Trainer}
              value={UserType.Trainer}
              handleClick={() => handleUserTypeClick(UserType.Trainer)}
            />
          </li>
          <li className="mt-3 h-fit w-full md:w-6/12 md:pr-1">
            <InputSelectButton
              label={'Nutritionist'}
              name={UserType.Nutritionist}
              value={UserType.Nutritionist}
              handleClick={() => handleUserTypeClick(UserType.Nutritionist)}
            />
          </li>
          <li className="mt-3 h-fit w-full md:w-6/12 md:pl-1">
            <InputSelectButton
              label={'Gym'}
              name={UserType.Gym}
              value={UserType.Gym}
              handleClick={() => handleUserTypeClick(UserType.Gym)}
            />
          </li>
        </ul>
      </UserOnboardWrap>
    );

  if (onboardSteps === OnboardStepsType.UserDetails)
    return (
      <UserOnboardWrap
        currentStep={OnboardStepsType.UserDetails}
        heading={'Detalii cont'}
        paragraph={'Completați câmpurile de mai jos pentru a continua.'}
      >
        <form className="mb-6 md:flex md:flex-wrap">
          {userType === UserType.Gym ? (
            <>
              {/*NAME*/}
              <div className="my-2 w-full md:w-4/12 md:px-2">
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
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setNameError('');
                    handleInputRequired(name)
                      ? setNameError(AuthInputError.InputRequired)
                      : !validateOnlyLetter(name)
                      ? setNameError(AuthInputError.OnlyLetter)
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
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setLastNameError('');
                    handleInputRequired(lastName)
                      ? setLastNameError(AuthInputError.InputRequired)
                      : !validateOnlyLetter(lastName)
                      ? setLastNameError(AuthInputError.OnlyLetter)
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
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setFirstNameError('');
                    handleInputRequired(firstName)
                      ? setFirstNameError(AuthInputError.InputRequired)
                      : !validateOnlyLetter(firstName)
                      ? setFirstNameError(AuthInputError.OnlyLetter)
                      : null;
                  }}
                />
              </div>
            </>
          )}

          {/*USERNAME*/}
          <div
            className={clsx('my-2 w-full md:px-2', {
              'md:w-4/12': userType === UserType.Gym,
              'md:w-6/12': userType !== UserType.Gym,
            })}
          >
            <Input
              name="username"
              label="Nume de utilizator"
              value={username}
              type="text"
              placeholder="jondoe"
              error={usernameError}
              handleChange={(event) => {
                setUsername(event.target.value.toLowerCase());
                setUsernameError('');
                setConfirmBtnDisable(false);
              }}
              handleBlur={() => {
                setUsernameError('');
                handleSearchUsername();
                handleInputRequired(username)
                  ? setUsernameError(AuthInputError.InputRequired)
                  : !validateUsername(username)
                  ? setUsernameError(AuthInputError.UsernameInvalid)
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
                  value={gender}
                  placeholder="Masculin"
                  options={genderTypeList}
                  handleChange={(e) => {
                    setGenderError('');
                    setGender(e.target.value);
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setGenderError('');
                    handleInputRequired(gender)
                      ? setGenderError(AuthInputError.InputRequired)
                      : null;
                  }}
                  error={genderError}
                />
              </div>
            </>
          ) : null}

          {userType === UserType.Gym ? (
            <>
              {/*GYM TYPE*/}
              <div className={clsx('my-2 w-full md:w-4/12 md:px-2')}>
                <SelectInput
                  name="gym_type"
                  label="Tip Sala"
                  value={gymType}
                  placeholder="Fitness"
                  options={gymTypeList}
                  handleChange={(e) => {
                    setGymTypeError('');
                    setGymType(e.target.value);
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setGymTypeError('');
                    handleInputRequired(gymType)
                      ? setGymTypeError(AuthInputError.InputRequired)
                      : null;
                  }}
                  error={gymTypeError}
                />
              </div>
            </>
          ) : null}

          {userType === UserType.Trainer ? (
            <>
              {/*TRAINER TYPE*/}
              <div className="my-2 w-full md:w-6/12 md:px-2">
                <SelectInput
                  name="trainer_type"
                  label="Tip Trainer"
                  value={trainerType}
                  placeholder="Fitness"
                  options={trainerTypeList}
                  handleChange={(e) => {
                    setTrainerTypeError('');
                    setTrainerType(e.target.value);
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setTrainerTypeError('');
                    handleInputRequired(trainerType)
                      ? setTrainerTypeError(AuthInputError.InputRequired)
                      : null;
                  }}
                  error={trainerTypeError}
                />
              </div>
            </>
          ) : null}

          {userType === UserType.Nutritionist ? (
            <>
              {/*NUTRITIONIST TYPE*/}
              <div className="my-2 w-full md:w-6/12 md:px-2">
                <SelectInput
                  name="nutritionist_type"
                  label="Tip Nutritionist"
                  value={nutritionistType}
                  placeholder="Medic nutritionist"
                  options={nutritionistTypeList}
                  handleChange={(e) => {
                    setNutritionistTypeError('');
                    setNutritionistType(e.target.value);
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setNutritionistTypeError('');
                    handleInputRequired(nutritionistType)
                      ? setNutritionistTypeError(AuthInputError.InputRequired)
                      : null;
                  }}
                  error={nutritionistTypeError}
                />
              </div>
            </>
          ) : null}

          {userType === UserType.Trainer ||
          userType === UserType.Nutritionist ? (
            <>
              {/*EXPERIENCE*/}
              <div className="my-2 w-full md:w-6/12 md:px-2">
                <SelectInput
                  name="experience"
                  label="Ani de experienta"
                  value={experience}
                  placeholder="5"
                  options={experienceList}
                  handleChange={(e) => {
                    setExperienceError('');
                    setExperience(e.target.value);
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setExperienceError('');
                    handleInputRequired(experience)
                      ? setExperienceError(AuthInputError.InputRequired)
                      : null;
                  }}
                  error={experienceError}
                />
              </div>
            </>
          ) : null}

          {/*COUNTRY*/}
          <div className="my-2 w-full md:w-4/12 md:px-2">
            <SelectInput
              name="country"
              label="Tara"
              value={currentCountry}
              placeholder="Romania"
              options={countries}
              handleChange={(e) => {
                setCurrentCountryError('');
                setCurrentCountry(e.target.value);
                setConfirmBtnDisable(false);
                currentStates = [];
                currentCites = [];
                setCurrentState('');
                setCurrentCity('');
              }}
              handleBlur={() => {
                setCurrentCountryError('');
                handleInputRequired(currentCountry)
                  ? setCurrentCountryError(AuthInputError.InputRequired)
                  : null;
              }}
              error={currentCountryError}
            />
          </div>

          {/*STATE*/}
          <div className="my-2 w-full md:w-4/12 md:px-2">
            <SelectInput
              name="state"
              label="Judet"
              value={currentState}
              placeholder="Bucuresti"
              options={currentStates}
              handleChange={(e) => {
                setCurrentStateError('');
                setCurrentState(e.target.value);
                setConfirmBtnDisable(false);
                currentCites = [];
                setCurrentCity('');
              }}
              handleBlur={() => {
                setCurrentStateError('');
                handleInputRequired(currentState)
                  ? setCurrentStateError(AuthInputError.InputRequired)
                  : null;
              }}
              error={currentStateError}
            />
          </div>

          {/*City*/}
          <div className="my-2 w-full md:w-4/12 md:px-2">
            <SelectInput
              name="city"
              label="Oras / Sector"
              value={currentCity}
              placeholder="Sector 1"
              options={currentCites}
              handleChange={(e) => {
                setCurrentCityError('');
                setCurrentCity(e.target.value);
                setConfirmBtnDisable(false);
              }}
              handleBlur={() => {
                setCurrentCityError('');
                handleInputRequired(currentCity)
                  ? setCurrentCityError(AuthInputError.InputRequired)
                  : null;
              }}
              error={currentCityError}
            />
          </div>

          {userType !== UserType.Gym ? (
            <>
              {/*Birth*/}
              <div className="my-2 w-full md:w-6/12 md:px-2">
                <label
                  htmlFor="birth"
                  className="mb-2 block text-left text-sm font-medium"
                >
                  Data nasterii
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[280px] justify-start text-left font-normal',
                        !date && 'text-muted-foreground',
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {birth ? format(birth, 'PPP') : <span>Alege o data</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={birth}
                      onSelect={($event) => handleBirthChange($event)}
                      initialFocus
                      required
                    />
                  </PopoverContent>
                </Popover>
                {birthError ? (
                  <p className="mt-2 block text-xs font-medium text-red">
                    {birthError}
                  </p>
                ) : null}
              </div>
            </>
          ) : (
            <>
              {/*Street*/}
              <div className="my-2 w-full md:w-6/12 md:px-2">
                <Input
                  name="street"
                  label="Strada"
                  value={street}
                  type="text"
                  placeholder="Unirii nr 13"
                  error={streetError}
                  handleChange={(event) => {
                    setStreet(event.target.value);
                    setStreetError('');
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setStreetError('');
                    handleInputRequired(street)
                      ? setStreetError(AuthInputError.InputRequired)
                      : null;
                  }}
                />
              </div>
              {/*Street Number*/}
              <div className="my-2 w-full md:w-2/12 md:px-2">
                <Input
                  name="streetNumber"
                  label="Numarul"
                  value={streetNumber}
                  type="text"
                  placeholder="13"
                  error={streetNumberError}
                  handleChange={(event) => {
                    setStreetNumber(event.target.value);
                    setStreetNumberError('');
                    setConfirmBtnDisable(false);
                  }}
                  handleBlur={() => {
                    setStreetNumberError('');
                    handleInputRequired(streetNumber)
                      ? setStreetNumberError(AuthInputError.InputRequired)
                      : null;
                  }}
                />
              </div>
            </>
          )}

          {/*Phone*/}
          <div
            className={clsx('my-2 w-full md:px-2', {
              'md:w-6/12': userType !== UserType.Gym,
              'md:w-4/12': userType === UserType.Gym,
            })}
          >
            <Input
              name="phone"
              label="Telefon"
              value={phone}
              type="phone"
              placeholder="+40770121943"
              error={phoneError}
              handleChange={(event) => {
                setPhone(event.target.value);
                setPhoneError('');
                setConfirmBtnDisable(false);
              }}
              handleBlur={() => {
                setPhoneError('');
                handleInputRequired(phone)
                  ? setPhoneError(AuthInputError.InputRequired)
                  : !validateIsPhoneNumber(phone)
                  ? setPhoneError(AuthInputError.OnlyNumbers)
                  : null;
              }}
            />
          </div>
        </form>
        <div className="flex space-x-3">
          <ButtonFull
            type={ButtonType.Secondary}
            shortText={'Anterior'}
            longText={'Tip utilizator'}
            handleClick={() => handleSetOnboardSteps(OnboardStepsType.UserType)}
          />
          <ButtonFull
            type={ButtonType.Primary}
            shortText={'Urmatorul'}
            longText={'Confirmare'}
            disabled={confirmBtnDisable}
            handleClick={() => {
              inputsAreOk();
            }}
          />
        </div>
      </UserOnboardWrap>
    );

  return (
    <UserOnboardWrap
      currentStep={OnboardStepsType.UserConfirm}
      heading={'Confirmare'}
      paragraph={
        'Prin apasarea butonului de confirma iti vei salva datele de utilizarea'
      }
    >
      <div className="flex flex-wrap">
        <div className="w-full md:w-6/12">
          <Paragraph customClass={''}>
            Tip utilizator:{' '}
            <strong className="capitalize text-primary">{userType}</strong>
          </Paragraph>
        </div>

        <div className="w-full md:w-6/12">
          <Paragraph customClass={''}>
            Nume de utilizator:{' '}
            <strong className="text-primary">{username}</strong>
          </Paragraph>
        </div>

        {userType === UserType.Gym ? (
          <div className="w-full md:w-6/12">
            <Paragraph customClass={''}>
              Nume sala:{' '}
              <strong className="capitalize text-primary">{name}</strong>
            </Paragraph>
          </div>
        ) : (
          <>
            <div className="w-full md:w-6/12">
              <Paragraph customClass={''}>
                Nume:{' '}
                <strong className="capitalize text-primary">{lastName}</strong>
              </Paragraph>
            </div>

            <div className="w-full md:w-6/12">
              <Paragraph customClass={''}>
                Prenume:{' '}
                <strong className="capitalize text-primary">{firstName}</strong>
              </Paragraph>
            </div>

            <div className="w-full md:w-6/12">
              <Paragraph customClass={''}>
                Gen:{' '}
                <strong className="capitalize text-primary">{gender}</strong>
              </Paragraph>
            </div>

            <div className="w-full md:w-6/12">
              <Paragraph customClass={''}>
                Data nasterii:{' '}
                <strong className="capitalize text-primary">
                  {birthDate}/{birthMonth}/{birthYear}
                </strong>
              </Paragraph>
            </div>
          </>
        )}

        <div className="w-full md:w-6/12">
          <Paragraph customClass={''}>
            Tara:{' '}
            <strong className="capitalize text-primary">
              {currentCountry}
            </strong>
          </Paragraph>
        </div>

        <div className="w-full md:w-6/12">
          <Paragraph customClass={''}>
            Judet:{' '}
            <strong className="capitalize text-primary">{currentState}</strong>
          </Paragraph>
        </div>

        <div className="w-full md:w-6/12">
          <Paragraph customClass={''}>
            Oras/Sector:{' '}
            <strong className="capitalize text-primary">{currentCity}</strong>
          </Paragraph>
        </div>

        {userType === UserType.Gym ? (
          <>
            <div className="w-full md:w-6/12">
              <Paragraph customClass={''}>
                Strada:{' '}
                <strong className="capitalize text-primary">{street}</strong>
              </Paragraph>
            </div>
            <div className="w-full md:w-6/12">
              <Paragraph customClass={''}>
                Numarul strazii:{' '}
                <strong className="capitalize text-primary">
                  {streetNumber}
                </strong>
              </Paragraph>
            </div>
          </>
        ) : null}
        <div className="w-full md:w-6/12">
          <Paragraph customClass={''}>
            Telefon:{' '}
            <strong className="capitalize text-primary">{phone}</strong>
          </Paragraph>
        </div>
      </div>
      <div className="mt-4 flex space-x-3">
        <ButtonFull
          type={ButtonType.Secondary}
          shortText={'Anterior'}
          longText={'Detalii cont'}
          handleClick={() =>
            handleSetOnboardSteps(OnboardStepsType.UserDetails)
          }
        />
        <ButtonFull
          type={ButtonType.Primary}
          shortText={'Confirm'}
          longText={''}
          handleClick={() => handleConfirm()}
        />
      </div>
    </UserOnboardWrap>
  );
}
