'use client';
import ProfileHeader from '#/ui/profile/ProfileHeader';
import TrainerProfileModel from '#/model/trainer/trainerProfile.model';
import ProfileContact from '#/ui/profile/ProfileContact';
import Reviews from '#/ui/shared/Reviews';
import ProfileDescription from '#/ui/profile/ProfileDescription';
import ProfilePrograms from '#/ui/profile/ProfilePrograms';

export default function TrainerProfile({
  trainer,
}: {
  trainer: TrainerProfileModel;
}) {
  const {
    firstName,
    lastName,
    username,
    profilePicture,
    type,
    city,
    description,
    experience,
    certificate,
    activeClients,
    completedClients,
    contact,
    reviews,
    programs,
    state,
  } = trainer;

  return (
    <>
      {/* Profile Header */}
      <ProfileHeader
        firstName={firstName}
        lastName={lastName}
        profilePicture={profilePicture}
        phone={contact.phone}
        type={type}
        city={city}
        experience={experience}
        certificate={certificate}
        activeClients={activeClients}
        completedClients={completedClients}
        name={null}
        state={state}
      />

      {/* Profile Description */}
      <ProfileDescription description={description} />

      {/* Profile Contact */}
      <ProfileContact contact={contact} />

      {/* Profile Review */}
      {reviews ? <Reviews reviews={reviews} username={username} /> : null}

      {/* Profile Programs */}
      {programs ? <ProfilePrograms programs={programs} /> : null}
    </>
  );
}
