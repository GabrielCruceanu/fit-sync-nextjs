import TrainerProfileModel from '#/model/trainer/trainerProfile.model';

async function getTrainersData() {
  const res = await fetch('https://kaapo.fit/api/trainers');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch trainers data');
  }

  return res.json();
}

export default async function TrainerIdPage({
  params,
}: {
  params: { id: string };
}) {
  const trainersData: TrainerProfileModel[] = await getTrainersData();
  const trainer = trainersData.find((trainer) => {
    if (trainer.id === params.id) {
      return trainer;
    }
  });
  return (
    <>
      <h1>
        {trainer ? trainer.firstName + ' ' + trainer.lastName : 'trainer'}
      </h1>
    </>
  );
}
