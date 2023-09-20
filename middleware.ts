import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Database } from '#/types/supabase';
import { urlRequestIncludes } from '#/helpers/url-request-includes';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = '/profile';
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (
    session &&
    (urlRequestIncludes(req, 'registration') ||
      urlRequestIncludes(req, 'login'))
  ) {
    return NextResponse.redirect(url);
  }
  return res;
}
