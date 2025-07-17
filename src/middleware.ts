import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const pathname = request.nextUrl.pathname
    
    // Skip middleware for health checks and api routes
    if (pathname.startsWith('/api/health') || pathname.startsWith('/_next/') || pathname.startsWith('/api/')) {
      return NextResponse.next()
    }
  
  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    // Add additional security headers for admin routes
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
    
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet')
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')

    // Let the dashboard component handle all authentication logic
    // The middleware will only handle security headers for admin routes
    console.log('Admin route accessed:', pathname)
    
    // Allow access to all admin routes - authentication handled by client components
    // This prevents middleware from interfering with the authentication flow

    return response
  }

  // Add security headers for robots.txt
  if (pathname === '/robots.txt') {
    const response = NextResponse.next()
    response.headers.set('Cache-Control', 'public, max-age=3600')
    return response
  }

  return NextResponse.next()
  } catch (error) {
    console.error('Middleware error:', error)
    // Return a basic response instead of crashing
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/robots.txt'
  ]
}