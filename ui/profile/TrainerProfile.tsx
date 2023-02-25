'use client';
import ProfileHeader from '#/ui/profile/ProfileHeader';
import ProfileContact from '#/ui/profile/ProfileContact';
import Reviews from '#/ui/shared/Reviews';
import ProfileDescription from '#/ui/profile/ProfileDescription';
import ProfilePrograms from '#/ui/profile/ProfilePrograms';
import { TypedTrainerDetails, TypedTrainerReview } from '#/types/types';

export default function TrainerProfile({
  trainer,
  reviews,
}: {
  trainer: TypedTrainerDetails;
  reviews: TypedTrainerReview[];
}) {
  const {
    first_name,
    last_name,
    username,
    profile_picture_url,
    type,
    city,
    description,
    experience,
    certificate,
    active_clients,
    completed_clients,
    email,
    phone,
    facebook,
    instagram,
    twitter,
    programs,
    trainer_type,
    state,
  } = trainer;

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
        proType={trainer_type}
        city={city}
        experience={experience}
        certificate={certificate}
        activeClients={active_clients}
        completedClients={completed_clients}
        name={null}
        state={state}
      />

      {/* Profile Description */}
      {description ? <ProfileDescription description={description} /> : null}

      {/* Profile Contact */}
      <ProfileContact contact={contact} />

      {/* Profile Review */}
      {/*{reviews ? <Reviews reviews={reviews} username={username!} /> : null}*/}

      {/* Profile Programs */}
      {/*{programs ? <ProfilePrograms programs={programs} /> : null}*/}
    </>
  );
}
