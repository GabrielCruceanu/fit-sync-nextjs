'use client';
import TrainerProfileHeader from '#/ui/trainer/profile/TrainerProfileHeader';
import TrainerProfileModel from '#/model/trainer/trainerProfile.model';
import TrainerContact from '#/ui/trainer/profile/TrainerContact';
import Reviews from '#/ui/shared/Reviews';
import TrainerDescription from '#/ui/trainer/profile/TrainerDescription';

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
  } = trainer;

  return (
    <>
      <TrainerProfileHeader
        firstName={firstName}
        lastName={lastName}
        profilePicture={profilePicture}
        contact={contact}
        type={type}
        city={city}
        experience={experience}
        certificate={certificate}
        activeClients={activeClients}
        completedClients={completedClients}
      />

      {/* Profile Description */}
      <TrainerDescription description={description} />
      {/* Profile Contact */}
      <TrainerContact contact={contact} />

      {/* Profile Review */}
      {reviews ? <Reviews reviews={reviews} username={username} /> : null}
    </>
  );
}
