'use client';

import * as React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '#/lib/validations/auth';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
import { toast } from '#/components/ui/use-toast';
import { AuthError } from '#/constants/authError';
import { PagesLinks } from '#/constants/links';
import { AuthProvider } from '#/types/Auth';
import { cn } from '#/lib/utils';
import { Label } from '#/components/ui/label';
import { Input } from '#/components/ui/input';
import { Button } from '#/components/ui/button';
import { Icons } from '#/components/icons';
import { useSupabase } from '#/ui/auth/SupabaseProvider';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof RegisterSchema>;

export function UserSignUpForm({ className, ...props }: UserAuthFormProps) {
  const { supabase, session } = useSupabase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(RegisterSchema) });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
  const [isFacebookLoading, setIsFacebookLoading] =
    React.useState<boolean>(false);

  const searchParams = useSearchParams();

  async function onSubmit(data: FormData) {
    const { email, password, confirmPassword } = data;
    setIsLoading(true);
    try {
      if (password !== confirmPassword) {
        setIsLoading(false);
        return toast({
          title: 'Parole diferite',
          description: 'Parolele trebuie sa fie identice.',
          variant: 'destructive',
        });
      }
      const {
        data: { user },
        error,
      } = await supabase.auth.signUp({
        email,
        password,
      });

      setIsLoading(false);

      if (!error && !user) {
        return toast({
          title: 'Inregistrare cu success',
          description: 'Verifica-ti e-mailul pentru linkul de autentificare!',
        });
      }

      if (error?.message === AuthError.InvalidLoginCredentials) {
        return toast({
          title: 'Credentiale invalide',
          description: 'Adresa de email sau parola nu este valida',
          variant: 'destructive',
        });
      }

      if (error?.message === AuthError.EmailNotConfirmed) {
        return toast({
          title: 'Adresa de email neconfirmata',
          description: 'Adresa de email nu a fost confirmata, verifica in spam',
          variant: 'destructive',
        });
      }
    } catch (error: any) {
      console.log('Error thrown:', error.message);

      return toast({
        title: error.title,
        description: error.message,
        variant: 'destructive',
      });
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
          redirectTo: PagesLinks.profile.link,
        },
      });
      if (error) {
        return toast({
          title: error.name,
          description: error.message,
          variant: 'destructive',
        });
      }
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

          {/*Confirm Password*/}
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Confirma Parola
            </Label>
            <Input
              id="confirmPassword"
              placeholder="••••••••"
              type="password"
              autoCapitalize="none"
              autoComplete="password"
              autoCorrect="off"
              disabled={isLoading || isGoogleLoading || isFacebookLoading}
              {...register('confirmPassword')}
            />
            {errors?.confirmPassword && (
              <p className="px-1 text-xs text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Creaza cont
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
            className="bg-blue-500 text-white hover:bg-blue-700 hover:text-white"
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
