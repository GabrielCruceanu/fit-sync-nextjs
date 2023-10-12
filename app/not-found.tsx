'use client';
import Link from 'next/link';
import { Button } from '#/components/ui/button';
import * as React from 'react';
import { useRouter } from 'next/navigation';

export default function PostNotFound() {
  const router = useRouter();
  return (
    <section className="bg-background h-screen flex justify-center items-center">
      <div className="h-fit max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Această pagină lipsește.
          </p>
          <p className="mb-6 text-lg font-light ">
            Ne pare rău, nu putem găsi pagina respectivă. Veți găsi multe de
            explorat pe pagina principala.
          </p>
          <Button
            variant="outline"
            type="button"
            onClick={() => {
              router.push('/');
            }}
          >
            Acasă
          </Button>
        </div>
      </div>
    </section>
  );
}
