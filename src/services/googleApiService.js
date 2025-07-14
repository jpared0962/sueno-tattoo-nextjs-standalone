import { supabase } from '../lib/supabase.js'

/**
 * Client-side service for calling the Google APIs Edge Function
 * This replaces direct client-side Google API calls for better security
 */
class GoogleApiService {
  constructor() {
    this.baseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hqnwthvicofazfdnsati.supabase.co'
    this.functionPath = '/functions/v1/google-apis'
  }

  /**
   * Get the current session token for authentication
   */
  async getAuthToken() {
    const { data: { session } } = await supabase.auth.getSession()
    return session?.access_token || import.meta.env.VITE_SUPABASE_ANON_KEY
  }

  /**
   * Make a request to the Google APIs Edge Function
   */
  async callFunction(payload) {
    try {
      const token = await this.getAuthToken()
      
      const response = await fetch(`${this.baseUrl}${this.functionPath}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      const data = await response.json()
      
      if (!data.success) {
        throw new Error(data.error || 'Unknown error from Edge Function')
      }

      return data.data

    } catch (error) {
      console.error('Google API service error:', error)
      throw error
    }
  }

  /**
   * Get Search Console analytics data
   */
  async getSearchConsoleData(url = 'https://www.suenotattoo.com') {
    return this.callFunction({
      action: 'search-console',
      url: url
    })
  }

  /**
   * Get PageSpeed Insights data
   */
  async getPageSpeedData(url = 'https://www.suenotattoo.com', strategy = 'mobile') {
    return this.callFunction({
      action: 'pagespeed-insights',
      url: url,
      strategy: strategy
    })
  }

  /**
   * Get comprehensive SEO data (combines multiple APIs)
   */
  async getComprehensiveSEOData(url = 'https://suenotattoo.com') {
    try {
      const [searchConsoleData, mobilePageSpeed, desktopPageSpeed] = await Promise.allSettled([
        this.getSearchConsoleData(url),
        this.getPageSpeedData(url, 'mobile'),
        this.getPageSpeedData(url, 'desktop')
      ])

      return {
        searchConsole: searchConsoleData.status === 'fulfilled' ? searchConsoleData.value : null,
        pageSpeed: {
          mobile: mobilePageSpeed.status === 'fulfilled' ? mobilePageSpeed.value : null,
          desktop: desktopPageSpeed.status === 'fulfilled' ? desktopPageSpeed.value : null
        },
        timestamp: new Date().toISOString()
      }
    } catch (error) {
      console.error('Error getting comprehensive SEO data:', error)
      throw error
    }
  }

  /**
   * Extract key metrics from PageSpeed data
   */
  extractPageSpeedMetrics(pageSpeedData) {
    if (!pageSpeedData?.lighthouseResult?.audits) {
      return null
    }

    const audits = pageSpeedData.lighthouseResult.audits
    
    return {
      performance: pageSpeedData.lighthouseResult.categories.performance?.score * 100 || 0,
      accessibility: pageSpeedData.lighthouseResult.categories.accessibility?.score * 100 || 0,
      bestPractices: pageSpeedData.lighthouseResult.categories['best-practices']?.score * 100 || 0,
      seo: pageSpeedData.lighthouseResult.categories.seo?.score * 100 || 0,
      metrics: {
        firstContentfulPaint: audits['first-contentful-paint']?.displayValue,
        largestContentfulPaint: audits['largest-contentful-paint']?.displayValue,
        cumulativeLayoutShift: audits['cumulative-layout-shift']?.displayValue,
        speedIndex: audits['speed-index']?.displayValue,
        totalBlockingTime: audits['total-blocking-time']?.displayValue
      }
    }
  }

  /**
   * Extract key data from Search Console
   */
  extractSearchConsoleMetrics(searchConsoleData) {
    if (!searchConsoleData?.rows) {
      return null
    }

    const totalClicks = searchConsoleData.rows.reduce((sum, row) => sum + (row.clicks || 0), 0)
    const totalImpressions = searchConsoleData.rows.reduce((sum, row) => sum + (row.impressions || 0), 0)
    const avgCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0
    const avgPosition = searchConsoleData.rows.length > 0 
      ? searchConsoleData.rows.reduce((sum, row) => sum + (row.position || 0), 0) / searchConsoleData.rows.length 
      : 0

    return {
      totalClicks,
      totalImpressions,
      averageCTR: Math.round(avgCTR * 100) / 100,
      averagePosition: Math.round(avgPosition * 10) / 10,
      topQueries: searchConsoleData.rows
        .filter(row => row.keys[0]) // queries only
        .sort((a, b) => (b.clicks || 0) - (a.clicks || 0))
        .slice(0, 10)
        .map(row => ({
          query: row.keys[0],
          clicks: row.clicks || 0,
          impressions: row.impressions || 0,
          ctr: row.ctr ? Math.round(row.ctr * 10000) / 100 : 0,
          position: row.position ? Math.round(row.position * 10) / 10 : 0
        }))
    }
  }
}

// Export singleton instance
export const googleApiService = new GoogleApiService()
export default googleApiService