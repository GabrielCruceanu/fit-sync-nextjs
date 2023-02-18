import { User } from '@supabase/auth-helpers-nextjs';
import { GymDetails, TypedSupabaseClient } from '#/types/types';

export const createGymProfile = async (
  user: User,
  gym: GymDetails,
  supabase: TypedSupabaseClient,
) => {
  const { data, error } = await supabase.from('gyms').upsert([gym]);

  if (error) {
    console.log('create gym profile error: ', error.message);
  }
  console.log('create  gym profile data:', data);
  return data;
};
