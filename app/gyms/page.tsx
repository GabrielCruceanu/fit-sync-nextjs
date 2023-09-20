import 'server-only';
import HeaderSearchAGym from '#/ui/search-a-pro/HeaderSearchAGym';
import { getAllGyms } from '#/utils/gym-hooks';
import { createServerClient } from '#/utils/supabase-server';
export default async function Page() {
  const supabase = createServerClient();
  const gymsData = await getAllGyms(supabase);
  return (
    <>
      <HeaderSearchAGym gyms={gymsData} />
    </>
  );
}
