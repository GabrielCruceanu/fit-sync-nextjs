import { User } from '@supabase/auth-helpers-nextjs';
import { TypedTrainerDetails, TypedSupabaseClient } from '#/types/types';

export const createTrainerProfile = async (
  user: User,
  trainer: TypedTrainerDetails,
  supabase: TypedSupabaseClient,
) => {
  const { data, error } = await supabase.from('trainers').upsert([trainer]);

  if (error) {
    console.log('create trainer profile error: ', error.message);
  }
  console.log('create  trainer profile data:', data);
  return data;
};
