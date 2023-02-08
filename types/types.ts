import Stripe from 'stripe';
import { Database } from '#/types/supabase';
import { SupabaseClient } from '@supabase/auth-helpers-nextjs';

export interface PageMeta {
  title: string;
  description: string;
  cardImage: string;
}

export interface Customer {
  id: string /* primary key */;
  stripe_customer_id?: string;
}

export interface Product {
  id: string /* primary key */;
  active?: boolean;
  name?: string;
  description?: string;
  image?: string;
  metadata?: Stripe.Metadata;
}

export interface ProductWithPrice extends Product {
  prices?: Price[];
}

export interface Price {
  id: string /* primary key */;
  product_id?: string /* foreign key to products.id */;
  active?: boolean;
  description?: string;
  unit_amount?: number;
  currency?: string;
  type?: Stripe.Price.Type;
  interval?: Stripe.Price.Recurring.Interval;
  interval_count?: number;
  trial_period_days?: number | null;
  metadata?: Stripe.Metadata;
  products?: Product;
}

export interface PriceWithProduct extends Price {}

export interface Subscription {
  id: string /* primary key */;
  user_id: string;
  status?: Stripe.Subscription.Status;
  metadata?: Stripe.Metadata;
  price_id?: string /* foreign key to prices.id */;
  quantity?: number;
  cancel_at_period_end?: boolean;
  created: string;
  current_period_start: string;
  current_period_end: string;
  ended_at?: string;
  cancel_at?: string;
  canceled_at?: string;
  trial_start?: string;
  trial_end?: string;
  prices?: Price;
}

export enum AuthType {
  SIGN_IN = 'SIGN_IN',
  SIGN_UP = 'SIGN_UP',
}

export type TypedSupabaseClient = SupabaseClient<Database>;

export type UserDetails = Database['public']['Tables']['users']['Row'];

export type ClientDetails = Database['public']['Tables']['clients']['Row'];

export type TrainerDetails = Database['public']['Tables']['trainers']['Row'];

export type NutritionistDetails =
  Database['public']['Tables']['nutritionists']['Row'];

export type GymDetails = Database['public']['Tables']['gyms']['Row'];

export type CurrentPhysicalDetails =
  Database['public']['Tables']['current_physical_details']['Row'];

export type HistoryPhysicalDetails =
  Database['public']['Tables']['history_physical_details']['Row'];

export type TrainerReview =
  Database['public']['Tables']['trainer_reviews']['Row'];

export type NutritionistReview =
  Database['public']['Tables']['nutritionist_reviews']['Row'];

export type GymReview = Database['public']['Tables']['gyms_reviews']['Row'];
