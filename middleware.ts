import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

// Pass the authConfig to Next.js Middleware
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};