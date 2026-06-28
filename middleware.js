import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match options: skip internal paths, assets, and APIs
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
