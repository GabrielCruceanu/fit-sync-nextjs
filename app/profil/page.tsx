'use client';
import Profile from '#/ui/profile/Profile';
import { useRouter } from 'next/navigation';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { useEffect, useState } from 'react';
import { navigationAuth } from '#/constants/navigation';
import LoadingDots from '#/ui/shared/LoadingDots';
import {
  TypedClientDetails,
  TypedGymDetails,
  TypedNutritionistDetails,
  TypedTrainerDetails,
  TypedUserDetails,
} from '#/types';
import { getClientProfile } from '#/utils/client-hooks';
import { UserType } from '#/constants/user';
import { getTrainerProfile } from '#/utils/trainer-hooks';
import { flushSync } from 'react-dom';
import { getNutritionistProfileById } from '#/utils/nutritionist-hooks';
import { getGymProfileById } from '#/utils/gym-hooks';

export default function ProfilePage() {
  const router = useRouter();
  const { supabase, session } = useSupabase();
  const [loading, setLoading] = useState(true);
  const [userType, setUserType] = useState<TypedUserDetails['user_type']>(null);
  const [clientProfile, setClientProfile] = useState<TypedClientDetails | null>(
    null,
  );
  const [trainerProfile, setTrainerProfile] =
    useState<TypedTrainerDetails | null>(null);
  const [nutritionistProfile, setNutritionistProfile] =
    useState<TypedNutritionistDetails | null>(null);
  const [gymProfile, setGymProfile] = useState<TypedGymDetails | null>(null);

  useEffect(() => {
    if (!session) {
      router.push(navigationAuth.slug);
    }
    const fetchUser = async () => {
      try {
        if (!session?.user.id) throw new Error('No user');

        const { data, error, status } = await supabase
          .from('users')
          .select('user_type')
          .eq('id', session.user.id)
          .single();

        if (error && status !== 406) {
          throw error;
        }

        if (data) {
          switch (data.user_type) {
            case UserType.Client:
              const clientProfile = await getClientProfile(
                session.user.id,
                supabase,
              );
              setClientProfile(clientProfile);
              break;
            case UserType.Trainer:
              const trainerProfile = await getTrainerProfile(
                session.user.id,
                supabase,
              );
              setTrainerProfile(trainerProfile);
              break;
            case UserType.Nutritionist:
              const nutritionistProfile = await getNutritionistProfileById(
                session.user.id,
                supabase,
              );
              setNutritionistProfile(nutritionistProfile);
              break;
            case UserType.Gym:
              const gymProfile = await getGymProfileById(
                session.user.id,
                supabase,
              );
              setGymProfile(gymProfile);
              break;
          }
          flushSync(() => {
            setUserType(data.user_type);
            switch (data.user_type) {
              case UserType.Client:
                setClientProfile(clientProfile);
                break;
              case UserType.Trainer:
                setTrainerProfile(trainerProfile);
                break;
              case UserType.Nutritionist:
                setNutritionistProfile(nutritionistProfile);
                break;
              case UserType.Gym:
                setGymProfile(gymProfile);
                break;
            }
          });
        }
      } catch (error) {
        alert('Error loading user_type data!');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (session) {
      fetchUser();
    }
  }, [session]);

  return loading ? (
    <div className="m-6 flex min-h-screen items-center justify-center">
      <LoadingDots />
    </div>
  ) : (
    <Profile
      userType={userType}
      clientProfile={clientProfile}
      gymProfile={gymProfile}
      trainerProfile={trainerProfile}
      nutritionistProfile={nutritionistProfile}
    />
  );
}
