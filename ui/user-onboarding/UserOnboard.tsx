import UserTypeOnboard from '#/ui/user-onboarding/UserTypeOnboard';
import { useState } from 'react';
import {
  ClientDetails,
  GymDetails,
  NutritionistDetails,
  TrainerDetails,
  UserDetails,
} from '#/types/types';
import UserDetailsOnboard from '#/ui/user-onboarding/UserDetailsOnboard';
import UserConfirmOnboard from '#/ui/user-onboarding/UserConfirmOnboard';
import { OnboardStepsType } from '#/ui/user-onboarding/OnboardSteps';

export default function UserOnboard() {
  const [onboardSteps, setOnboardSteps] = useState<OnboardStepsType>(
    OnboardStepsType.UserType,
  );
  const [userType, setUserType] = useState<UserDetails['user_type']>(null);
  const [userDetails, setUserDetails] = useState<
    ClientDetails | TrainerDetails | NutritionistDetails | GymDetails | null
  >(null);

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

  console.log('onboardSteps onboard', onboardSteps);
  console.log('userType onboard', userType);
  console.log('userDetails onboard', userDetails);
  console.log('-------------------------------------');

  if (onboardSteps === OnboardStepsType.UserType)
    return (
      <UserTypeOnboard
        handleSetUserType={handleSetUserType}
        handleSetOnboardSteps={handleSetOnboardSteps}
      />
    );

  if (onboardSteps === OnboardStepsType.UserDetails)
    return (
      <UserDetailsOnboard
        handleSetUserDetails={handleSetUserDetails}
        handleSetOnboardSteps={handleSetOnboardSteps}
        userType={userType}
      />
    );

  return (
    <UserConfirmOnboard
      handleSetUserDetails={handleSetUserDetails}
      handleSetOnboardSteps={handleSetOnboardSteps}
    />
  );
}
