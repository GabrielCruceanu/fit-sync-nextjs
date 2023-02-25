import 'server-only';

import { notFound } from 'next/navigation';
import TrainerProfile from '#/ui/profile/TrainerProfile';
import { getTrainerProfileByUserName } from '#/utils/trainer-hooks';
import { createServerClient } from '#/utils/supabase-server';
import { getReviews } from '#/utils/review-hooks';

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const supabase = createServerClient();

  const trainerData = await getTrainerProfileByUserName(
    params.username,
    supabase,
  );

  const reviewsData = await getReviews(trainerData.id, supabase);

  return (
    <>
      {trainerData ? (
        <TrainerProfile trainer={trainerData} reviews={reviewsData} />
      ) : (
        notFound()
      )}
    </>
  );
}
