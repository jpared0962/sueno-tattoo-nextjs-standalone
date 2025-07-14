import { ReactNode } from 'react'
import { Breadcrumbs } from './Breadcrumbs'
import { GlobalCTA } from '@/components/sections/GlobalCTA'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface SEOLayoutProps {
  children: ReactNode
  breadcrumbs?: BreadcrumbItem[]
  showCTA?: boolean
  ctaVariant?: 'default' | 'services' | 'gallery' | 'contact'
  ctaTitle?: string
  ctaDescription?: string
}

export function SEOLayout({ 
  children, 
  breadcrumbs = [],
  showCTA = true,
  ctaVariant = 'default',
  ctaTitle,
  ctaDescription
}: SEOLayoutProps) {
  return (
    <div className="min-h-screen pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
        
        {children}
        
        {showCTA && (
          <GlobalCTA 
            variant={ctaVariant}
            title={ctaTitle}
            description={ctaDescription}
          />
        )}
      </div>
    </div>
  )
}