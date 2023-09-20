import Profile from '#/ui/profile/Profile';
import LoadingDots from '#/ui/shared/LoadingDots';
import { getClientProfile } from '#/utils/client-hooks';
import { UserType } from '#/constants/user';
import { getTrainerProfile } from '#/utils/trainer-hooks';
import { getNutritionistProfileById } from '#/utils/nutritionist-hooks';
import { getGymProfileById } from '#/utils/gym-hooks';
import { createServerClient } from '#/utils/supabase-server';
import { redirect } from 'next/navigation';
import { PagesLinks } from '#/constants/links';

export default async function ProfilePage() {
  const supabase = createServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();
  let loading = false;

  if (!session) {
    return redirect(PagesLinks.auth.link);
  }
  loading = true;
  let clientProfile;
  let trainerProfile;
  let nutritionistProfile;
  let gymProfile;

  if (!session?.user.id) throw new Error('No user');
  const { data, error, status } = await supabase
    .from('users')
    .select('user_type')
    .eq('id', session?.user.id)
    .single();

  try {
    if (error && status !== 406) {
      throw error;
    }

    if (data) {
      console.log('data', data);
      switch (data.user_type) {
        case UserType.Client:
          clientProfile = await getClientProfile(session.user.id, supabase);
          break;
        case UserType.Trainer:
          trainerProfile = await getTrainerProfile(session.user.id, supabase);
          break;
        case UserType.Nutritionist:
          nutritionistProfile = await getNutritionistProfileById(
            session.user.id,
            supabase,
          );
          break;
        case UserType.Gym:
          gymProfile = await getGymProfileById(session.user.id, supabase);
          break;
      }
    }
  } catch (error) {
    alert('Error loading user_type data!');
    console.log(error);
  } finally {
    loading = false;
  }
  return loading ? (
    <div className="m-6 flex min-h-screen items-center justify-center">
      <LoadingDots />
    </div>
  ) : (
    <Profile
      userType={data?.user_type ? data.user_type : null}
      clientProfile={clientProfile ? clientProfile : null}
      gymProfile={gymProfile ? gymProfile : null}
      trainerProfile={trainerProfile ? trainerProfile : null}
      nutritionistProfile={nutritionistProfile ? nutritionistProfile : null}
    />
  );
}
