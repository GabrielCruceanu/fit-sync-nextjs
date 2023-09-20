import {
  createClientComponentClient,
  User,
} from '@supabase/auth-helpers-nextjs';
import { Database, Json } from '#/types/supabase';
import {
  ProductWithPrice,
  TypedSupabaseClient,
  TypedUserDetails,
} from '#/types';

export const supabaseClient = createClientComponentClient<Database>();

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
  firstName,
  lastName,
  name,
  billingAddress,
  paymentMethod,
  email,
  profile_picture_url,
  userType,
  supabase,
}: {
  user: User;
  username: string;
  firstName: string | null;
  lastName: string | null;
  name: string | null;
  billingAddress?: Json;
  paymentMethod?: Json;
  email: string;
  profile_picture_url: string | null;
  userType: TypedUserDetails['user_type'];
  supabase: TypedSupabaseClient;
}) => {
  await supabase
    .from('users')
    .update({
      billing_address: billingAddress,
      paymentMethod: paymentMethod,
      email: email,
      username: username,
      first_name: firstName,
      last_name: lastName,
      profile_picture_url: profile_picture_url,
      name: name,
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
  const { data, error } = await supabase.from('usernames').upsert([
    {
      id: user.id,
      username: username,
    },
  ]);
  if (error) {
    console.log('create username error: ', error.message);
  }
  console.log('create username data:', data);
  return data;
};
