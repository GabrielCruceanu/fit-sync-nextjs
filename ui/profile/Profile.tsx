import { ClientDetails, UserDetails } from '#/types/types';
import UserOnboard from '#/ui/user-onboarding/UserOnboard';
import { UserType } from '#/constants/user';
import ClientProfile from '#/ui/profile/ClientProfile';

export default function Profile({
  userType,
  clientProfile,
}: {
  userType: UserDetails['user_type'];
  clientProfile: ClientDetails | null;
}) {
  switch (UserType.Client) {
    case UserType.Client:
      return clientProfile ? (
        <ClientProfile clientProfile={clientProfile} />
      ) : null;
      break;
    // case UserType.Gym:
    //   return <pre>userType: {JSON.stringify(userType)}</pre>;
    //   break;
    // case UserType.Trainer:
    //   return <pre>userType: {JSON.stringify(userType)}</pre>;
    //   break;
    // case UserType.Nutritionist:
    //   return <pre>userType: {JSON.stringify(userType)}</pre>;
    //   break;

    default:
      return <UserOnboard />;
  }
}
