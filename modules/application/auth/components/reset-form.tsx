'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { ForgotPasswordSchema } from '#/lib/validations/auth';
import { cn } from '#/lib/utils';
import {
  AuthErrorMessage,
  checkErrorMessage,
} from '#/lib/validations/error-check';

import { Database } from '#/ts/supabase';

import { toast } from '#/components/ui/use-toast';
import { Label } from '#/components/ui/label';
import { Input } from '#/components/ui/input';
import { Button } from '#/components/ui/button';
import { Icons } from '#/components/icons';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof ForgotPasswordSchema>;

export function UserResetPasswordForm({
  className,
  ...props
}: UserAuthFormProps) {
  const supabase = createClientComponentClient<Database>();
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
          title: AuthErrorMessage.ResetPassword.title,
          description: AuthErrorMessage.ResetPassword.description,
          variant: AuthErrorMessage.ResetPassword.variant,
        });
      }

      if (error) {
        const errorToast = checkErrorMessage(error);
        return toast(errorToast);
      }
    } catch (error: any) {
      console.log('Error thrown:', error.message);

      const errorToast = checkErrorMessage(error);
      return toast(errorToast);
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
