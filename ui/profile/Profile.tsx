import { UserDetails } from '#/types/types';
import UserOnboard from '#/ui/user-onboarding/UserOnboard';

export default function Profile({
  userType,
}: {
  userType: UserDetails['user_type'];
}) {
  return userType ? (
    <div>
      <h1>Profile</h1>
      <pre>userType: {JSON.stringify(userType)}</pre>
    </div>
  ) : (
    <UserOnboard />
  );
}
