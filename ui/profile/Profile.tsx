import {
  TypedClientDetails,
  TypedGymDetails,
  TypedTrainerDetails,
  TypedUserDetails,
} from '#/types/types';
import UserOnboard from '#/ui/user-onboarding/UserOnboard';
import { UserType } from '#/constants/user';
import ClientProfile from '#/ui/profile/ClientProfile';
import TrainerProfile from '#/ui/profile/TrainerProfile';

export default function Profile({
  userType,
  clientProfile,
  trainerProfile,
  gymProfile,
}: {
  userType: TypedUserDetails['user_type'];
  clientProfile: TypedClientDetails | null;
  trainerProfile: TypedTrainerDetails | null;
  gymProfile: TypedGymDetails | null;
}) {
  switch (userType) {
    case UserType.Client:
      return clientProfile ? (
        <ClientProfile clientProfile={clientProfile} />
      ) : null;
      break;
    case UserType.Trainer:
      return <TrainerProfile trainer={trainerProfile!} reviews={[]} />;
      break;
    case UserType.Gym:
      return <pre>userType: {JSON.stringify(userType)}</pre>;
      break;
    case UserType.Nutritionist:
      return <pre>userType: {JSON.stringify(userType)}</pre>;
      break;

    default:
      return <UserOnboard />;
  }
}
