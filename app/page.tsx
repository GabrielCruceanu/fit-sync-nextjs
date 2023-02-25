import HomeHowItWorks from '#/ui/home/HomeHowItWorks';
import HomeHeader from '#/ui/home/HomeHeader';
import ClientHowItWorks from '#/ui/home/ClientHowItWorks';
import ClientFeatures from '#/ui/home/ClientFeatures';
import HomeBeAPro from '#/ui/home/HomeBeAPro';
import ClientFAQ from '#/ui/home/ClientFAQ';
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

export default async function HomePage() {
  const trainersData: TrainerProfileModel[] = await getTrainersData();

  return (
    <>
      <HomeHeader />
      <HomeHowItWorks />
      <ClientHowItWorks />
      {/*<ClientFeatures trainers={trainersData} />*/}
      <HomeBeAPro />
      <ClientFAQ />
    </>
  );
}
