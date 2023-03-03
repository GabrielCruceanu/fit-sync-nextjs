'use client';
import ProfileHeader from '#/ui/profile/ProfileHeader';
import ProfileContact from '#/ui/profile/ProfileContact';
import ProfileDescription from '#/ui/profile/ProfileDescription';
import {
  TypedGymDetails,
  TypedNutritionistDetails,
  TypedReviews,
  TypedTrainerDetails,
} from '#/types';
import Reviews from '#/ui/shared/Reviews';

export default function ProProfile({
  pro,
  reviews,
}: {
  pro: TypedTrainerDetails | TypedNutritionistDetails | TypedGymDetails;
  reviews?: TypedReviews[];
}) {
  const {
    first_name,
    last_name,
    gym_name,
    username,
    profile_picture_url,
    type,
    city,
    description,
    certificate,
    experience,
    active_clients,
    completed_clients,
    email,
    phone,
    facebook,
    instagram,
    twitter,
    pro_type,
    state,
  } = pro;
  const contact = { email, phone, facebook, instagram, twitter };

  return (
    <>
      {/* Profile Header */}
      <ProfileHeader
        firstName={first_name}
        lastName={last_name}
        profilePicture={profile_picture_url}
        phone={phone}
        type={type}
        proType={pro_type}
        city={city}
        experience={experience}
        certificate={certificate}
        activeClients={active_clients}
        completedClients={completed_clients}
        name={gym_name}
        state={state}
      />

      {/* Profile Description */}
      {description ? <ProfileDescription description={description} /> : null}

      {/* Profile Contact */}
      <ProfileContact contact={contact} />

      {/* Profile Review */}
      {reviews ? <Reviews reviews={reviews} username={username!} /> : null}

      {/* Profile Programs */}
      {/*{programs ? <ProfilePrograms programs={programs} /> : null}*/}
    </>
  );
}
