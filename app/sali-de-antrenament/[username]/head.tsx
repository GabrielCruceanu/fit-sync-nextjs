import HeadUi from '#/ui/shared/HeadUi';
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

export default async function Head({
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
    <>
      <HeadUi
        title={`Antrenor ${
          trainer ? trainer.firstName + ' ' + trainer.lastName : ''
        } | Kaapo.Fit`}
        description="Kaapo.Fit este platforma construită pentru antrenorii personali care vor să-și dezvolte afacerea și să managerieze mai ușor clienții online."
      />
    </>
  );
}
