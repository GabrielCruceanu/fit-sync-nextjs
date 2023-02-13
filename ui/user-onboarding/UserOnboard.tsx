import { useState } from 'react';
import {
  ButtonType,
  ClientDetails,
  GymDetails,
  NutritionistDetails,
  TrainerDetails,
  UserDetails,
} from '#/types/types';
import { OnboardStepsType } from '#/ui/user-onboarding/OnboardSteps';
import { GenderList, UserType } from '#/constants/user';
import UserOnboardWrap from '#/ui/user-onboarding/UserOnboardWrap';
import InputSelectButton from '#/ui/shared/form/InputSelectButton';
import Input from '#/ui/shared/form/Input';
import {
  handleInputRequired,
  validateOnlyLetter,
  validateIsPhoneNumber,
  validateUsername,
} from '#/utils/helpers';
import { AuthError } from '#/constants/authError';
import SelectInput from '#/ui/shared/form/SelectInput';
import { RomaniaStatesData } from '#/constants/location';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import ButtonFull from '#/ui/shared/form/ButtonFull';
import Datepicker from 'react-tailwindcss-datepicker';
import clsx from 'clsx';

export default function UserOnboard() {
  const { supabase, session } = useSupabase();
  const [onboardSteps, setOnboardSteps] = useState<OnboardStepsType>(
    OnboardStepsType.UserType,
  );
  const [userType, setUserType] = useState<UserDetails['user_type']>(null);
  const [userDetails, setUserDetails] = useState<
    ClientDetails | TrainerDetails | NutritionistDetails | GymDetails | null
  >(null);

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
  const [street, setStreet] = useState('');
  const [streetError, setStreetError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [birth, setBirth] = useState({
    startDate: null,
    endDate: null,
  });
  const [birthError, setBirthError] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [birthMonth, setBirthMonth] = useState('');
  const [birthYear, setBirthYear] = useState('');

  const handleSetOnboardSteps = (value: OnboardStepsType) => {
    setOnboardSteps(value);
  };

  const handleSetUserType = (value: UserDetails['user_type']) => {
    setUserType(value);
  };

  const handleSetUserDetails = (
    value:
      | ClientDetails
      | TrainerDetails
      | NutritionistDetails
      | GymDetails
      | null,
  ) => {
    setUserDetails(value);
  };

  const handleUserTypeClick = (value: UserDetails['user_type']) => {
    handleSetUserType(value);
    handleSetOnboardSteps(OnboardStepsType.UserDetails);
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

  const handleBirthChange = (newValue: any) => {
    setBirthError('');
    setBirth(newValue);
    const dateLanding = new Date(newValue.startDate);
    const date = dateLanding.getDate().toString();
    const month = (dateLanding.getMonth() + 1).toString();
    const year = dateLanding.getFullYear().toString();
    setBirthDate(date);
    setBirthMonth(month);
    setBirthYear(year);
    handleInputRequired(newValue.startDate === null ? '' : newValue.startDate)
      ? setBirthError(AuthError.InputRequired)
      : null;
  };

  const handleConfirm = () => {
    console.log('confirm');
  };
  console.log('onboardSteps onboard', onboardSteps);
  console.log('userType onboard', userType);
  console.log('userDetails onboard', userDetails);
  console.log('email onboard', session?.user.email);
  console.log('-------------------------------------');

  console.log('birthDate', birthDate);
  console.log('birthMonth', birthMonth);
  console.log('birthYear', birthYear);

  if (onboardSteps === OnboardStepsType.UserType)
    return (
      <UserOnboardWrap
        currentStep={OnboardStepsType.UserType}
        heading={'Tip utilizator'}
        paragraph={'Ce tip de cont doresti sa ai?'}
      >
        <ul className="container mb-6 flex flex-wrap items-center justify-center">
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
              label={'Sala de antrenament'}
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
        paragraph={
          'Completeaza campurile de mai jos pentru a merge mai departe.'
        }
      >
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
                    setNameError('');
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
                    setLastNameError('');
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
                    setFirstNameError('');
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
                setUsernameError('');
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
                  value={gender}
                  placeholder="Masculin"
                  options={genderType}
                  handleChange={(e) => {
                    setGenderError('');
                    setGender(e.target.value);
                  }}
                  handleBlur={() => {
                    setGenderError('');
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
              value={currentState}
              placeholder="Bucuresti"
              options={states}
              handleChange={(e) => {
                setCurrentStateError('');
                setCurrentState(e.target.value);
              }}
              handleBlur={() => {
                setCurrentStateError('');
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
              value={currentCity}
              placeholder="Sector 1"
              options={currentCites}
              handleChange={(e) => {
                setCurrentCityError('');
                setCurrentCity(e.target.value);
              }}
              handleBlur={() => {
                setCurrentCityError('');
                handleInputRequired(currentCity)
                  ? setCurrentCityError(AuthError.InputRequired)
                  : null;
              }}
              error={currentCityError}
            />
          </div>

          {/*Phone*/}
          <div className="my-2 w-full md:w-6/12 md:px-2">
            <Input
              name="phone"
              label="Telefon"
              value={phone}
              type="phone"
              placeholder="0770121943"
              error={phoneError}
              handleChange={(event) => {
                setPhone(event.target.value);
                setPhoneError('');
              }}
              handleBlur={() => {
                setPhoneError('');
                handleInputRequired(phone)
                  ? setPhoneError(AuthError.InputRequired)
                  : !validateIsPhoneNumber(phone)
                  ? setPhoneError(AuthError.OnlyNumbers)
                  : null;
              }}
            />
          </div>

          {userType !== UserType.Gym ? (
            <>
              {/*Birth*/}
              <div className="my-2 w-full md:w-6/12 md:px-2">
                <label
                  htmlFor="birth"
                  className="mb-2 block text-left text-sm font-medium text-gray-300"
                >
                  An de nastere
                </label>
                <Datepicker
                  inputId="birth"
                  useRange={false}
                  asSingle={true}
                  placeholder={'DD/MM/YYYY'}
                  displayFormat={'DD/MM/YYYY'}
                  value={birth}
                  onChange={handleBirthChange}
                  inputClassName={clsx(
                    'rounded-lg border border-gray-600 bg-gray-700 p-2.5 capitalize text-white placeholder-gray-400 focus:border-primary-600 focus:outline-none focus:ring-primary-600 sm:text-sm',
                    {
                      'border-red-600': birthError,
                    },
                  )}
                />
                {birthError ? (
                  <p className="mt-2 block text-xs font-medium text-red-500">
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
                  }}
                  handleBlur={() => {
                    setStreetError('');
                    handleInputRequired(street)
                      ? setStreetError(AuthError.InputRequired)
                      : null;
                  }}
                />
              </div>
            </>
          )}
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
            handleClick={() =>
              handleSetOnboardSteps(OnboardStepsType.UserConfirm)
            }
          />
        </div>
      </UserOnboardWrap>
    );

  return (
    <UserOnboardWrap
      currentStep={OnboardStepsType.UserConfirm}
      heading={'User Confirm'}
      paragraph={
        'Prin apasarea butonului de confirma iti vei salva datele de\n' +
        '              utilizarea'
      }
    >
      <div className="flex space-x-3">
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
          shortText={'Urmatorul'}
          longText={'Confirm'}
          disabled={true}
          handleClick={() => handleConfirm()}
        />
      </div>
    </UserOnboardWrap>
  );
}
