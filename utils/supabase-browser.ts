import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '#/ts/supabase';

export const createBrowserClient = () =>
  createClientComponentClient<Database>();
