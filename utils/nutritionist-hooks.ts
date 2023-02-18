import { User } from '@supabase/auth-helpers-nextjs';
import { NutritionistDetails, TypedSupabaseClient } from '#/types/types';

export const createNutritionistProfile = async (
  user: User,
  nutritionist: NutritionistDetails,
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
