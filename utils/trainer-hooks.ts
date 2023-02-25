import { User } from '@supabase/auth-helpers-nextjs';
import {
  TypedTrainerDetails,
  TypedSupabaseClient,
  TypedClientDetails,
} from '#/types/types';

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

export const getTrainerProfile = async (
  userId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: trainers, error } = await supabase
    .from('trainers')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.log('select trainer profile error: ', error.message);
  }

  console.log('select trainer profile data:', trainers);
  return trainers as unknown as TypedTrainerDetails;
};
