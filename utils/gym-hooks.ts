import { User } from '@supabase/auth-helpers-nextjs';
import { TypedGymDetails, TypedSupabaseClient } from '#/types';

export const createGymProfile = async (
  user: User,
  gym: TypedGymDetails,
  supabase: TypedSupabaseClient,
) => {
  const { error } = await supabase.from('gyms').upsert([gym]);

  if (error) {
    console.log('create gym profile error: ', error.message);
    return false;
  }
  console.log('create  gym profile data:');
  location.reload();
};

export const getAllGyms = async (supabase: TypedSupabaseClient) => {
  const { data: gyms, error } = await supabase.from('gyms').select('*');

  if (error) {
    console.log('select gyms error: ', error.message);
  }

  console.log('select gyms data:', gyms);
  return gyms as unknown as TypedGymDetails[];
};
