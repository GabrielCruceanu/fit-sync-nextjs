'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { User } from '@supabase/auth-helpers-react';
import { Subscription, UserDetails } from '#/types/types';
import { useSupabase } from '#/ui/auth/SupabaseProvider';

type UserContextType = {
  accessToken: string | null;
  user: User | null;
  userDetails: UserDetails | null;
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
  const user = session?.user;
  const accessToken = session?.access_token ?? null;
  const [isLoadingData, setIsloadingData] = useState(false);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const getUserDetails = () => supabase.from('users').select('*').single();
  // const getSubscription = () =>
  //   supabase
  //     .from('subscriptions')
  //     .select('*, prices(*, products(*))')
  //     .in('status', ['trialing', 'active'])
  //     .maybeSingle();
  useEffect(() => {
    if (user && !isLoadingData && !userDetails && !subscription) {
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
  ]);

  const value = {
    accessToken,
    user,
    userDetails,
    isLoading: isLoadingData,
    subscription,
  };

  return <UserContext.Provider value={value} {...props} />;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a MyUserContextProvider.`);
  }
  return context;
};
