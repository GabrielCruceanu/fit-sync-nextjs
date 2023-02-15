import {
  createBrowserSupabaseClient,
  User,
} from '@supabase/auth-helpers-nextjs';
import { Database, Json } from '#/types/supabase';
import {
  ClientDetails,
  GymDetails,
  NutritionistDetails,
  ProductWithPrice,
  TrainerDetails,
  TypedSupabaseClient,
  UserDetails,
} from '#/types/types';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { UserType } from '#/constants/user';

export const supabaseClient = createBrowserSupabaseClient<Database>();

export const getActiveProductsWithPrices = async (): Promise<
  ProductWithPrice[]
> => {
  const { data, error } = await supabaseClient
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { foreignTable: 'prices' });

  if (error) {
    console.log(error.message);
    throw error;
  }
  // TODO: improve the typing here.
  return (data as any) || [];
};

export const updateUserName = async (user: User, username: string) => {
  await supabaseClient
    .from('users')
    .update({
      username: username,
    })
    .eq('id', user.id);
};

export const updateUser = async ({
  user,
  username,
  billingAddress,
  paymentMethod,
  email,
  userType,
  supabase,
}: {
  user: User;
  username: string;
  billingAddress?: Json;
  paymentMethod?: Json;
  email: string;
  userType: UserDetails['user_type'];
  supabase: TypedSupabaseClient;
}) => {
  await supabase
    .from('users')
    .update({
      billing_address: billingAddress,
      paymentMethod: paymentMethod,
      email: email,
      username: username,
      user_type: userType,
    })
    .eq('id', user.id);
};

export const createUserName = async ({
  user,
  username,
  supabase,
}: {
  user: User;
  username: string;
  supabase: TypedSupabaseClient;
}) => {
  const today = new Date().toISOString();
  const { data, error } = await supabase.from('usernames').insert([
    {
      id: user.id,
      created_at: today,
      username: username,
    },
  ]);
  if (error) {
    console.log('create username error: ', error.message);
  }
  console.log('create username data:', data);
  return data;
};

export const createGymProfile = async (
  user: User,
  gym: GymDetails,
  supabase: TypedSupabaseClient,
) => {
  const { data, error } = await supabase.from('gyms').insert([gym]);

  if (error) {
    console.log('create gym profile error: ', error.message);
  }
  console.log('create  gym profile data:', data);
  return data;
};

export const createTrainerProfile = async (
  user: User,
  trainer: TrainerDetails,
  supabase: TypedSupabaseClient,
) => {
  const { data, error } = await supabase.from('trainers').insert([trainer]);

  if (error) {
    console.log('create trainer profile error: ', error.message);
  }
  console.log('create  trainer profile data:', data);
  return data;
};

export const createNutritionistProfile = async (
  user: User,
  nutritionist: NutritionistDetails,
  supabase: TypedSupabaseClient,
) => {
  const { data, error } = await supabase
    .from('nutritionists')
    .insert([nutritionist]);

  if (error) {
    console.log('create nutritionist profile error: ', error.message);
  }
  console.log('create  nutritionist profile data:', data);
  return data;
};

export const createClientProfile = async (
  user: User,
  client: ClientDetails,
  supabase: TypedSupabaseClient,
) => {
  const { data, error } = await supabase.from('clients').insert([client]);

  if (error) {
    console.log('create client profile error: ', error.message);
  }
  console.log('create  client profile data:', data);
  return data;
};
