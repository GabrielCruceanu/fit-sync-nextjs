'use client';
import TrainerProfileHeader from '#/ui/trainer/profile/TrainerProfileHeader';
import TrainerProfileModel from '#/model/trainer/trainerProfile.model';
import TrainerProfileContact from '#/ui/trainer/profile/TrainerProfileContact';
import Reviews from '#/ui/shared/Reviews';
import TrainerProfileDescription from '#/ui/trainer/profile/TrainerProfileDescription';
import TrainerPrograms from '#/ui/trainer/profile/TrainerPrograms';

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
  } = trainer;

  return (
    <>
      {/* Profile Header */}
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
      <TrainerProfileDescription description={description} />

      {/* Profile Contact */}
      <TrainerProfileContact contact={contact} />

      {/* Profile Review */}
      {reviews ? <Reviews reviews={reviews} username={username} /> : null}

      {/* Profile Programs */}
      {programs ? <TrainerPrograms programs={programs} /> : null}
    </>
  );
}
