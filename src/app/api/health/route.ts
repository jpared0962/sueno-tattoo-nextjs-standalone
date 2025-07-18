import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Simple health check that doesn't depend on external services
    return NextResponse.json({ 
      status: 'healthy',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ 
      status: 'unhealthy',
      error: 'Health check failed',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}