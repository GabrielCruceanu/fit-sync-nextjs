import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
import { Database } from '#/ts/supabase';
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
    (urlRequestIncludes(req, PagesLinks.login.link) ||
      urlRequestIncludes(req, PagesLinks.signUp.link))
  ) {
    return NextResponse.redirect(url);
  }
  if (
    !session &&
    (urlRequestIncludes(req, PagesLinks.account.link) ||
      urlRequestIncludes(req, PagesLinks.onboarding.link))
  ) {
    url.pathname = PagesLinks.login.link;
    return NextResponse.redirect(url);
  }
  return res;
}
