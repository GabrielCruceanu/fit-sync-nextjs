import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '#/types/supabase';

export const createBrowserClient = () =>
  createClientComponentClient<Database>();
