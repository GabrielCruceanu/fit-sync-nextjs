import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { Database } from '#/types/supabase';
import { urlRequestIncludes } from '#/helpers/url-request-includes';
import { PagesLinks } from '#/constants/links';

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  url.pathname = PagesLinks.account.link;
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (
    session &&
    (urlRequestIncludes(req, 'inregistrare') ||
      urlRequestIncludes(req, 'autentificare'))
  ) {
    return NextResponse.redirect(url);
  }
  return res;
}
