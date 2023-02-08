'use client';
import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import { ReactNode, useState } from 'react';
import { useUser } from '#/utils/useUser';
import { postData } from '#/utils/helpers';
import { PagesLinks } from '#/constants/links';
import Profile from '#/ui/profile/Profile';
import TrainerProfile from '#/ui/trainer/profile/TrainerProfile';
import TrainerProfileModel from '#/model/trainer/trainerProfile.model';

async function getTrainersData() {
  const res = await fetch('https://kaapo.fit/api/trainers');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch trainers data');
  }

  return res.json();
}

export default async function Cont() {
  withPageAuth({ redirectTo: PagesLinks.auth.link });
  const [loading, setLoading] = useState(false);
  const { isLoading, subscription, userDetails } = useUser();
  console.log('userDetails', userDetails);
  let trainersData: TrainerProfileModel[];
  let trainer: TrainerProfileModel | undefined;
  const isTrainer = true;
  isTrainer ? (trainersData = await getTrainersData()) : null;
  trainersData
    ? (trainer = trainersData.find((trainer) => trainer.id === ''))
    : null;

  return <TrainerProfile />;
}
