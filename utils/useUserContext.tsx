'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/auth-helpers-react';
import {
  TypedClientDetails,
  TypedGymDetails,
  TypedNutritionistDetails,
  Subscription,
  TypedTrainerDetails,
  TypedUserDetails,
} from '#/types';
import { useSupabase } from '#/ui/auth/SupabaseProvider';

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: TypedUserDetails | null;
  trainerDetails: TypedTrainerDetails | null;
  nutritionistDetails: TypedNutritionistDetails | null;
  gymDetails: TypedGymDetails | null;
  isLoading: boolean;
  subscription: Subscription | null;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export interface Props {
  [propName: string]: any;
}

export const MyUserContextProvider = (props: Props) => {
  const { session, supabase } = useSupabase();
  const user = session?.user ? session.user : null;
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsloadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<TypedUserDetails | null>(null);
  const [clientDetails, setClientDetails] = useState<TypedClientDetails | null>(
    null,
  );
  const [trainerDetails, setTrainerDetails] =
    useState<TypedTrainerDetails | null>(null);
  const [nutritionistDetails, setNutritionistDetails] =
    useState<TypedNutritionistDetails | null>(null);
  const [gymDetails, setGymDetails] = useState<TypedGymDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const getUserDetails = () => supabase.from('users').select('*').single();

  // const getSubscription = () =>
  //   supabase
  //     .from('subscriptions')
  //     .select('*, prices(*, products(*))')
  //     .in('status', ['trialing', 'active'])
  //     .maybeSingle();
  useEffect(() => {
    if (user && !isLoadingData && !userDetails) {
      setIsloadingData(true);

      Promise.allSettled([
        getUserDetails(),
        // getSubscription()
      ]).then((results) => {
        const userDetailsPromise = results[0];
        // const subscriptionPromise = results[1];
        console.log('results', results);

        if (userDetailsPromise.status === 'fulfilled')
          setUserDetails(userDetailsPromise.value.data);

        // if (subscriptionPromise.status === 'fulfilled')
        //   setSubscription(subscriptionPromise.value.data);

        setIsloadingData(false);
      });
    } else if (!user && !isLoadingData) {
      setUserDetails(null);
      setSubscription(null);
    }
  }, [
    user,
    isLoadingData,
    userDetails,
    subscription,
    getUserDetails,
    // getSubscription,
    clientDetails,
    trainerDetails,
    nutritionistDetails,
    gymDetails,
  ]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingData,
    subscription,
    clientDetails,
    trainerDetails,
    nutritionistDetails,
    gymDetails,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`);
  }
  return context;
};
