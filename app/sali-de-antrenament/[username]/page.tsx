// import 'server-only';
//
// import { notFound } from 'next/navigation';
// import ProProfile from '#/ui/profile/ProProfile';
// import { createServerClient } from '#/utils/supabase-server';
// import { getReviews } from '#/utils/review-hooks';
// import { getGymProfileByUserName } from '#/utils/gym-hooks';
//
// export default async function Page({
//   params,
// }: {
//   params: { username: string };
// }) {
//   const supabase = createServerClient();
//
//   const gymData = await getGymProfileByUserName(params.username, supabase);
//
//   const reviewsData = await getReviews(gymData.id, supabase);
//
//   return (
//     <>
//       {gymData ? (
//         <ProProfile pro={gymData} reviews={reviewsData} />
//       ) : (
//         notFound()
//       )}
//     </>
//   );
// }
export default function GymPage() {
  return <h1>GymPage</h1>;
}
