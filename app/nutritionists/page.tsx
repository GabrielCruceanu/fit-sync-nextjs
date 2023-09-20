import 'server-only';
import HeaderSearchANutritionist from '#/ui/search-a-pro/HeaderSearchANutritionist';
import { getAllNutritionists } from '#/utils/nutritionist-hooks';
import { createServerClient } from '#/utils/supabase-server';

export default async function SearchNutritionistsPage() {
  const supabase = createServerClient();
  const nutritionistsData = await getAllNutritionists(supabase);
  return (
    <>
      <HeaderSearchANutritionist nutritionists={nutritionistsData} />
    </>
  );
}
