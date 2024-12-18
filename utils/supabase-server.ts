import { cookies } from 'next/headers';
import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '#/types/supabase';

export const createServerClient = () =>
  createServerActionClient<Database>({
    cookies,
  });
