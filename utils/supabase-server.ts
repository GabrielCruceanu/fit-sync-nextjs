import { headers, cookies } from 'next/headers';
import { createServerComponentSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '#/types/supabase';
import {
  NEXT_PUBLIC_SUPABASE_KEY,
  NEXT_PUBLIC_SUPABASE_URL,
} from '#/utils/constants';

export const createServerClient = () =>
  createServerComponentSupabaseClient<Database>({
    supabaseUrl: NEXT_PUBLIC_SUPABASE_URL,
    supabaseKey: NEXT_PUBLIC_SUPABASE_KEY,
    headers,
    cookies,
  });
