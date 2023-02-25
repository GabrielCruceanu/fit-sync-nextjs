import { TypedReviews, TypedSupabaseClient } from '#/types';

export const createReview = async (
  review: TypedReviews,
  supabase: TypedSupabaseClient,
) => {
  const { data, error } = await supabase.from('reviews').upsert([review]);

  if (error) {
    console.log('create review error: ', error.message);
  }
  console.log('create review data:', data);
  return data;
};

export const getReviews = async (
  userId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: reviews, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('beneficiary_id', userId);

  if (error) {
    console.log('select reviews error: ', error.message);
  }

  console.log('select reviews data:', reviews);
  return reviews as unknown as TypedReviews[];
};
