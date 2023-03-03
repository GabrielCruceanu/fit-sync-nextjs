import {
  TypedClientDetails,
  TypedGymDetails,
  TypedNutritionistDetails,
  TypedTrainerDetails,
  TypedUserDetails,
} from '#/types';
import UserOnboard from '#/ui/user-onboarding/UserOnboard';
import { UserType } from '#/constants/user';
import ClientProfile from '#/ui/profile/ClientProfile';
import ProProfile from '#/ui/profile/ProProfile';

export default function Profile({
  userType,
  clientProfile,
  trainerProfile,
  nutritionistProfile,
  gymProfile,
}: {
  userType: TypedUserDetails['user_type'];
  clientProfile: TypedClientDetails | null;
  trainerProfile: TypedTrainerDetails | null;
  nutritionistProfile: TypedNutritionistDetails | null;
  gymProfile: TypedGymDetails | null;
}) {
  switch (userType) {
    case UserType.Client:
      return clientProfile ? (
        <ClientProfile clientProfile={clientProfile} />
      ) : null;
      break;
    case UserType.Trainer:
      return <ProProfile pro={trainerProfile!} reviews={[]} />;
      break;
    case UserType.Gym:
      return <ProProfile pro={gymProfile!} reviews={[]} />;
      break;
    case UserType.Nutritionist:
      return <ProProfile pro={nutritionistProfile!} reviews={[]} />;
      break;

    default:
      return <UserOnboard />;
  }
}
