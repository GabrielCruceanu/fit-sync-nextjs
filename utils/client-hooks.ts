import { User } from '@supabase/auth-helpers-nextjs';
import {
  TypedClientDetails,
  TypedPhysicalDetails,
  TypedSupabaseClient,
} from '#/types/types';

export const createClientProfile = async (
  user: User,
  client: TypedClientDetails,
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
    .eq('client_id', userId)
    .single();

  if (error) {
    console.log('select client profile error: ', error.message);
  }

  console.log('select client profile data:', clients);
  return clients as unknown as TypedClientDetails;
};

export const getClientPhysicalDetails = async (
  userId: string,
  supabase: TypedSupabaseClient,
) => {
  const { data: physicalDetails, error } = await supabase
    .from('physical_details')
    .select('*')
    .eq('client_id', userId);

  if (error) {
    console.log('select client physical details error: ', error.message);
  }

  console.log('select client  physical details data:', physicalDetails);
  return physicalDetails as unknown as TypedPhysicalDetails[];
};

export const createPhysicalDetails = async ({
  user,
  body_weight,
  body_height,
  shoulders,
  chest,
  waist,
  hip,
  ass,
  thigh,
  neck,
  arm_left,
  arm_right,
  front_photo,
  side_photo,
  back_photo,
  supabase,
}: {
  user: User;
  body_weight: number;
  body_height: number;
  shoulders: number;
  chest: number;
  waist: number;
  hip: number;
  ass: number;
  thigh: number;
  neck: number;
  arm_left: number;
  arm_right: number;
  front_photo: string;
  side_photo: string;
  back_photo: string;
  supabase: TypedSupabaseClient;
}) => {
  const { data, error } = await supabase
    .from('current_physical_details')
    .upsert([
      {
        client_id: user.id,
        body_weight,
        body_height,
        shoulders,
        chest,
        waist,
        hip,
        ass,
        thigh,
        neck,
        arm_left,
        arm_right,
        front_photo,
        side_photo,
        back_photo,
      },
    ]);
  if (error) {
    console.log('create history details error: ', error.message);
  }
  console.log('create history details data:', data);
  return data;
};
