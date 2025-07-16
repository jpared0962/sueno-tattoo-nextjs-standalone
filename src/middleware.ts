import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@supabase/ssr'

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Protect admin routes
  if (pathname.startsWith('/admin')) {
    // Get client IP for rate limiting
    const clientIP = request.ip || request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    
    // Basic rate limiting check (could be enhanced with Redis/database)
    const rateLimitKey = `admin_access_${clientIP}`
    
    // Create a response object to pass to Supabase
    let response = NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
    
    // Add additional security headers for admin routes
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet')
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')

    // Create Supabase client
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name: string, value: string, options: any) {
            request.cookies.set({
              name,
              value,
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value,
              ...options,
            })
          },
          remove(name: string, options: any) {
            request.cookies.set({
              name,
              value: '',
              ...options,
            })
            response = NextResponse.next({
              request: {
                headers: request.headers,
              },
            })
            response.cookies.set({
              name,
              value: '',
              ...options,
            })
          },
        },
      }
    )

    // Check if user is authenticated
    const { data: { user } } = await supabase.auth.getUser()
    
    // If accessing admin login page and already authenticated, redirect to dashboard
    if (pathname === '/admin' && user) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url))
    }
    
    // If accessing admin dashboard without authentication, redirect to login
    if (pathname.startsWith('/admin/dashboard') && !user) {
      return NextResponse.redirect(new URL('/admin', request.url))
    }
    
    // If accessing admin dashboard, verify user is actually an admin
    if (pathname.startsWith('/admin/dashboard') && user) {
      try {
        const { data: adminData, error } = await supabase
          .from('admin_users')
          .select('role, permissions')
          .eq('user_id', user.id)
          .single()
          
        if (error || !adminData) {
          // User is authenticated but not an admin - sign them out and redirect
          await supabase.auth.signOut()
          return NextResponse.redirect(new URL('/admin', request.url))
        }
      } catch (error) {
        // Database error - redirect to login for security
        return NextResponse.redirect(new URL('/admin', request.url))
      }
    }

    return response
  }

  // Add security headers for robots.txt
  if (pathname === '/robots.txt') {
    const response = NextResponse.next()
    response.headers.set('Cache-Control', 'public, max-age=3600')
    return response
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/robots.txt'
  ]
}