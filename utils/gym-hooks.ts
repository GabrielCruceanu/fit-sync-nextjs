import { User } from '@supabase/auth-helpers-nextjs';
import {
  TypedGymDetails,
  TypedNutritionistDetails,
  TypedSupabaseClient,
} from 'ts';

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

export const getGymProfileById = async (
  id: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: gym, error } = await supabase
    .from('gyms')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.log('select gym profile error: ', error.message);
  }
  console.log('select gym profile data:', gym);
  return gym as unknown as TypedGymDetails;
};
export const getGymProfileByUserName = async (
  username: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: gyms, error } = await supabase
    .from('gyms')
    .select('*')
    .eq('username', username)
    .single();

  if (error) {
    console.log('select gym profile error: ', error.message);
  }

  console.log('select gym profile data:', gyms);
  return gyms as unknown as TypedNutritionistDetails;
};
