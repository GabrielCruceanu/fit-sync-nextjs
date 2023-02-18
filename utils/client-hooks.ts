import { User } from '@supabase/auth-helpers-nextjs';
import { ClientDetails, TypedSupabaseClient } from '#/types/types';

export const createClientProfile = async (
  user: User,
  client: ClientDetails,
  supabase: TypedSupabaseClient,
) => {
  const { data, error } = await supabase.from('clients').upsert([client]);

  if (error) {
    console.log('create client profile error: ', error.message);
  }
  console.log('create  client profile data:', data);
  return data;
};

export const getClientProfile = async (
  userId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: clients, error } = await supabase
    .from('clients')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.log('select client profile error: ', error.message);
  }

  console.log('select client profile data:', clients);
  return clients as unknown as ClientDetails;
};
