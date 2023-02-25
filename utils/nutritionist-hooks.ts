import { User } from '@supabase/auth-helpers-nextjs';
import { TypedNutritionistDetails, TypedSupabaseClient } from '#/types';

export const createNutritionistProfile = async (
  user: User,
  nutritionist: TypedNutritionistDetails,
  supabase: TypedSupabaseClient,
) => {
  const { data, error } = await supabase
    .from('nutritionists')
    .upsert([nutritionist]);

  if (error) {
    console.log('create nutritionist profile error: ', error.message);
  }
  console.log('create  nutritionist profile data:', data);
  return data;
};
