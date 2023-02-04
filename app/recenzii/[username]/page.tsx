import TrainerProfileModel from '#/model/trainer/trainerProfile.model';
import TrainerProfileHeader from '#/ui/trainer/profile/TrainerProfileHeader';
import { notFound } from 'next/navigation';
import TrainerProfile from '#/ui/trainer/profile/TrainerProfile';
import Reviews from '#/ui/shared/Reviews';

async function getTrainersData() {
  const res = await fetch('http://localhost:3000/api/trainers');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch trainers data');
  }

  return res.json();
}

export default async function ReviewsPage({
  params,
}: {
  params: { username: string };
}) {
  const trainersData: TrainerProfileModel[] = await getTrainersData();
  const trainer = trainersData.find((trainer) => {
    if (trainer.username === params.username) {
      return trainer;
    }
  });
  return (
    <>{trainer?.reviews ? <Reviews reviews={trainer.reviews} /> : notFound()}</>
  );
}
