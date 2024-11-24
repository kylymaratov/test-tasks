import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['ru', 'en'];
const defaultLocale = locales[0];

function getLocale(request: NextRequest): string {
  const acceptLang = request.headers.get('Accept-Language');

  if (!acceptLang) return defaultLocale;

  const headers = { 'accept-language': acceptLang };
  const languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/_next')) return NextResponse.next();

  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);

  request.nextUrl.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(request.nextUrl);

  return response;
}
export const config = {
  matcher: ['/((?!_next).*)'],
};
