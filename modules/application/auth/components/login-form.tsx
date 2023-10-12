'use client';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

import { LoginSchema } from '#/lib/validations/auth';
import { cn } from '#/lib/utils';

import { Database } from '#/ts/supabase';

import { toast } from '#/components/ui/use-toast';
import { Label } from '#/components/ui/label';
import { Input } from '#/components/ui/input';
import { Button } from '#/components/ui/button';
import { Icons } from '#/components/icons';
import { PagesLinks } from '#/constants/links';
import {
  AuthErrorMessage,
  checkErrorMessage,
} from '#/lib/validations/error-check';
import { AuthProvider } from '#/ts/enum';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof LoginSchema>;

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const supabase = createClientComponentClient<Database>();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(LoginSchema) });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const [isFacebookLoading, setIsFacebookLoading] =
    React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);

    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.signInWithPassword({
        email: data.email.toLowerCase(),
        password: data.password,
      });

      setIsLoading(false);

      if (!error && !user) {
        return toast({
          title: AuthErrorMessage.CheckTheEmail.title,
          description: AuthErrorMessage.CheckTheEmail.description,
          variant: AuthErrorMessage.CheckTheEmail.variant,
        });
      }

      if (error) {
        const errorToast = checkErrorMessage(error);
        return toast(errorToast);
      }

      router.replace(PagesLinks.account.link);
    } catch (error: any) {
      console.log('Error thrown:', error.message);

      const errorToast = checkErrorMessage(error);
      return toast(errorToast);
    }
  }

  async function loginWithProvider(provider: AuthProvider) {
    if (provider === AuthProvider.Google) {
      setIsGoogleLoading(true);
    } else if (provider === AuthProvider.Facebook) {
      setIsFacebookLoading(true);
    }
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
          queryParams: {
            access_type: 'offline',
            prompt: 'consent',
          },
        },
      });
      if (error) {
        return toast({
          title: error.name,
          description: error.message,
          variant: 'destructive',
        });
      }
      router.refresh();
    } catch (error: any) {
      console.log('Error thrown:', error.message);

      return toast({
        title: error.title,
        description: error.message,
        variant: 'destructive',
      });
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-2">
          {/*Email*/}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="nume@domeniu.ro"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading || isGoogleLoading || isFacebookLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          {/*Password*/}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Parola
            </Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading || isGoogleLoading || isFacebookLoading}
              {...register('password')}
            />
            {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Intra in cont
          </Button>

          {/*Social Login*/}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                sau
              </span>
            </div>
          </div>
          <Button
            variant="outline"
            type="button"
            disabled={isLoading || isGoogleLoading || isFacebookLoading}
            onClick={() => {
              loginWithProvider(AuthProvider.Google);
            }}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Conecteaza-te prin Google
          </Button>
          <Button
            variant="outline"
            type="button"
            disabled={isLoading || isGoogleLoading || isFacebookLoading}
            onClick={() => {
              loginWithProvider(AuthProvider.Facebook);
            }}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Conecteaza-te prin Facebook
          </Button>
        </div>
      </form>
    </div>
  );
}
