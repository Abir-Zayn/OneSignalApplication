/*
Next.js middleware - runs before pages render.
Used for authentication, redirects, and request processing.
*/
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // For now, we'll just log requests
  console.log('Middleware processing request:', request.nextUrl.pathname);

  // In later modules, we'll add authentication checks here
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: ['/todos/:path*', '/dashboard/:path*'],
};
