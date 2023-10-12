import ProfileHeader from '#/ui/profile/ProfileHeader';
import ProfilePhysicalDetails from '#/ui/profile/ProfilePhysicalDetails';
import { TypedClientDetails } from 'ts';

export default function ClientProfile({
  clientProfile,
}: {
  clientProfile: TypedClientDetails;
}) {
  const {
    first_name,
    last_name,
    profile_picture_url,
    type,
    state,
    city,
    phone,
  } = clientProfile;
  console.log('clientProfile', clientProfile);
  return (
    <>
      {/* Profile Header */}
      <ProfileHeader
        firstName={first_name}
        lastName={last_name}
        profilePicture={profile_picture_url}
        state={state}
        city={city}
        type={type}
        phone={phone}
      />

      {/* Profile Physical Details */}
      <ProfilePhysicalDetails />
    </>
  );
}
