'use client';

import * as React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ForgotPasswordSchema, LoginSchema } from '#/lib/validations/auth';
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

type FormData = z.infer<typeof ForgotPasswordSchema>;

export function UserResetPasswordForm({
  className,
  ...props
}: UserAuthFormProps) {
  const { supabase, session } = useSupabase();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(ForgotPasswordSchema) });

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    const email = data.email.toLowerCase();
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email);

      setIsLoading(false);

      if (!error) {
        return toast({
          title: 'Verifica e-mailul',
          description: 'E-mailul de recuperare a parolei a fost trimis.',
        });
      }

      if (error?.message === AuthError.EmailUsedToMuch) {
        return toast({
          title: 'Incercari multiple',
          description:
            'Ai facut prea multe cerereri de resetare. Incearca mai tarziu.',
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
              disabled={isLoading}
              {...register('email')}
            />
            {errors?.email && (
              <p className="px-1 text-xs text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>

          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Resetare parola
          </Button>
        </div>
      </form>
    </div>
  );
}
