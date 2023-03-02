import 'server-only';
import HeaderSearchATrainer from '../../ui/search-a-pro/HeaderSearchATrainer';
import { createServerClient } from '#/utils/supabase-server';
import { getAllTrainers } from '#/utils/trainer-hooks';

export default async function SearchTrainerPage() {
  const supabase = createServerClient();

  const trainersData = await getAllTrainers(supabase);
  return (
    <>
      <HeaderSearchATrainer trainers={trainersData} />
    </>
  );
}
