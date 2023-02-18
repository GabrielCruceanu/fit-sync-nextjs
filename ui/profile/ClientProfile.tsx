import { ClientDetails } from '#/types/types';

export default function ClientProfile({
  clientProfile,
}: {
  clientProfile: ClientDetails;
}) {
  const { first_name, last_name, profile_picture_url, city } = clientProfile;
  console.log('clientProfile', clientProfile);
  return (
    <>
      {/* Profile Header */}
      <pre>{clientProfile.country}</pre>
      {/*<ProfileHeader*/}
      {/*  name={null}*/}
      {/*  firstName={first_name}*/}
      {/*  lastName={last_name}*/}
      {/*  profilePicture={profile_picture_url}*/}
      {/*  city={city}*/}
      {/*/>*/}

      {/* Profile Description */}
      {/*<ProfileDescription description={description} />*/}
    </>
  );
}
