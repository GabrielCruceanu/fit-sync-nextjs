import {
  createBrowserSupabaseClient,
  User,
} from '@supabase/auth-helpers-nextjs';
import { Database } from '#/types/supabase';
import { ProductWithPrice } from '#/types/types';

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

export const updateUserName = async (user: User, name: string) => {
  await supabaseClient
    .from('users')
    .update({
      full_name: name,
    })
    .eq('id', user.id);
};
