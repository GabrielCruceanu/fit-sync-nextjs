import { User } from '@supabase/auth-helpers-nextjs';
import { TypedNutritionistDetails, TypedSupabaseClient } from '#/types';

export const createNutritionistProfile = async (
  user: User,
  nutritionist: TypedNutritionistDetails,
  supabase: TypedSupabaseClient,
) => {
  const { error } = await supabase.from('nutritionists').upsert([nutritionist]);

  if (error) {
    console.log('create nutritionist profile error: ', error.message);
    return false;
  }
  console.log('create  nutritionist profile data:');
  location.reload();
};

export const getAllNutritionists = async (supabase: TypedSupabaseClient) => {
  const { data: nutritionists, error } = await supabase
    .from('nutritionists')
    .select('*');

  if (error) {
    console.log('select nutritionists error: ', error.message);
  }

  console.log('select nutritionists data:', nutritionists);
  return nutritionists as unknown as TypedNutritionistDetails[];
};
