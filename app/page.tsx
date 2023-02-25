import 'server-only';
import HomeHowItWorks from '#/ui/home/HomeHowItWorks';
import HomeHeader from '#/ui/home/HomeHeader';
import ClientHowItWorks from '#/ui/home/ClientHowItWorks';
import HomeBeAPro from '#/ui/home/HomeBeAPro';
import ClientFAQ from '#/ui/home/ClientFAQ';
import { createServerClient } from '#/utils/supabase-server';
import {
  getAllTrainers,
  getTrainerProfileByUserName,
} from '#/utils/trainer-hooks';
import ClientFeatures from '#/ui/home/ClientFeatures';

export default async function HomePage() {
  const supabase = createServerClient();

  const trainersData = await getAllTrainers(supabase);

  return (
    <>
      <HomeHeader />
      <HomeHowItWorks />
      <ClientHowItWorks />
      <ClientFeatures trainers={trainersData} />
      <HomeBeAPro />
      <ClientFAQ />
    </>
  );
}
