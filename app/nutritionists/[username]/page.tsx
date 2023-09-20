import 'server-only';
import { notFound } from 'next/navigation';
import ProProfile from '#/ui/profile/ProProfile';
import { createServerClient } from '#/utils/supabase-server';
import { getReviews } from '#/utils/review-hooks';
import { getNutritionistProfileByUserName } from '#/utils/nutritionist-hooks';

export default async function TrainerIdPage({
  params,
}: {
  params: { username: string };
}) {
  const supabase = createServerClient();

  const nutritionistData = await getNutritionistProfileByUserName(
    params.username,
    supabase,
  );

  const reviewsData = await getReviews(nutritionistData.id, supabase);

  return (
    <>
      {nutritionistData ? (
        <ProProfile pro={nutritionistData} reviews={reviewsData} />
      ) : (
        notFound()
      )}
    </>
  );
}
