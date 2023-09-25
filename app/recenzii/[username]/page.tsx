// import 'server-only';
//
// import { notFound } from 'next/navigation';
// import Reviews from '#/ui/shared/Reviews';
// import { getReviews } from '#/utils/review-hooks';
// import { createServerClient } from '#/utils/supabase-server';
//
// export default async function ReviewsPage({
//   params,
// }: {
//   params: { username: string };
// }) {
//   const supabase = createServerClient();
//   const { data } = await supabase
//     .from('users')
//     .select('id')
//     .eq('username', params.username)
//     .single();
//
//   const reviewsData = await getReviews(data?.id!, supabase);
//   return <>{reviewsData ? <Reviews reviews={reviewsData} /> : notFound()}</>;
// }
export default function ReviewsPage() {
  return <h1>ReviewsPage</h1>;
}
