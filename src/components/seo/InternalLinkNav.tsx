import Link from 'next/link'

interface InternalLink {
  href: string
  text: string
  description?: string
  isExternal?: boolean
}

interface InternalLinkNavProps {
  title: string
  links: InternalLink[]
  columns?: number
  className?: string
}

export function InternalLinkNav({ 
  title, 
  links, 
  columns = 3, 
  className = '' 
}: InternalLinkNavProps) {
  return (
    <nav className={`py-8 px-4 ${className}`} aria-labelledby="internal-nav-title">
      <div className="max-w-6xl mx-auto">
        <h2 id="internal-nav-title" className="text-2xl font-bold text-center mb-8 text-crisp-white">
          {title}
        </h2>
        <div 
          className={`grid grid-cols-1 md:grid-cols-${Math.min(columns, 4)} gap-6`}
          role="list"
        >
          {links.map((link, index) => (
            <div key={index} role="listitem" className="group">
              {link.isExternal ? (
                <a
                  href={link.href}
                  className="block p-4 bg-charcoal-gray/30 hover:bg-charcoal-gray/50 rounded-lg border border-charcoal-gray hover:border-gold transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-describedby={link.description ? `desc-${index}` : undefined}
                >
                  <h3 className="font-semibold text-crisp-white group-hover:text-gold transition-colors">
                    {link.text} ↗
                  </h3>
                  {link.description && (
                    <p id={`desc-${index}`} className="text-sm text-crisp-white/70 mt-2">
                      {link.description}
                    </p>
                  )}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="block p-4 bg-charcoal-gray/30 hover:bg-charcoal-gray/50 rounded-lg border border-charcoal-gray hover:border-gold transition-all"
                  aria-describedby={link.description ? `desc-${index}` : undefined}
                >
                  <h3 className="font-semibold text-crisp-white group-hover:text-gold transition-colors">
                    {link.text}
                  </h3>
                  {link.description && (
                    <p id={`desc-${index}`} className="text-sm text-crisp-white/70 mt-2">
                      {link.description}
                    </p>
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export function ServiceLocationMatrix() {
  const services = [
    { slug: 'custom-tattoos', name: 'Custom Tattoos' },
    { slug: 'traditional-tattoos', name: 'Traditional Tattoos' },
    { slug: 'portrait-tattoos', name: 'Portrait Tattoos' },
    { slug: 'cover-up-tattoos', name: 'Cover-up Tattoos' }
  ]

  const locations = [
    { slug: 'laurel', name: 'Laurel, MD', region: 'maryland' },
    { slug: 'college-park', name: 'College Park, MD', region: 'maryland' },
    { slug: 'beltsville', name: 'Beltsville, MD', region: 'maryland' },
    { slug: 'greenbelt', name: 'Greenbelt, MD', region: 'maryland' }
  ]

  const serviceLocationLinks: InternalLink[] = []

  // Generate service + location combinations
  services.forEach(service => {
    locations.forEach(location => {
      serviceLocationLinks.push({
        href: `/services/${service.slug}/${location.region}/${location.slug}`,
        text: `${service.name} in ${location.name}`,
        description: `Professional ${service.name.toLowerCase()} services in ${location.name}`
      })
    })
  })

  return (
    <InternalLinkNav
      title="Service Areas & Specialties"
      links={serviceLocationLinks}
      columns={2}
      className="bg-charcoal-gray/10"
    />
  )
}

export function LocationServicesNav({ currentLocation }: { currentLocation: string }) {
  const services = [
    {
      href: `/services/custom-tattoos`,
      text: 'Custom Tattoo Designs',
      description: 'Unique, personalized artwork created just for you'
    },
    {
      href: `/services/traditional-tattoos`,
      text: 'Traditional American Style',
      description: 'Classic bold-lined tattoos with timeless appeal'
    },
    {
      href: `/services/portrait-tattoos`,
      text: 'Realistic Portrait Work',
      description: 'Lifelike portraits of people, pets, and meaningful subjects'
    },
    {
      href: `/services/cover-ups`,
      text: 'Cover-up & Rework',
      description: 'Transform existing tattoos into beautiful new artwork'
    },
    {
      href: `/gallery`,
      text: 'View Portfolio',
      description: 'Browse our extensive gallery of completed work'
    },
    {
      href: `/book-consultation`,
      text: 'Book Consultation',
      description: 'Schedule your free consultation and design session'
    }
  ]

  return (
    <InternalLinkNav
      title={`Services Available in ${currentLocation}`}
      links={services}
      columns={3}
    />
  )
}

export function RelatedPages({ 
  currentPage, 
  relatedLinks 
}: { 
  currentPage: string
  relatedLinks: InternalLink[] 
}) {
  return (
    <section className="py-12 px-4 bg-charcoal-gray/5" aria-labelledby="related-pages-title">
      <div className="max-w-4xl mx-auto">
        <h2 id="related-pages-title" className="text-xl font-bold text-center mb-8 text-crisp-white">
          Related Pages
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-center p-3 bg-charcoal-gray/30 hover:bg-charcoal-gray/50 rounded-lg border border-charcoal-gray hover:border-gold transition-all group"
            >
              <span className="text-sm text-crisp-white group-hover:text-gold transition-colors">
                {link.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}