import Link from 'next/link'

interface BreadcrumbItem {
  name: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Don't show breadcrumbs on homepage
  if (items.length <= 1) return null

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": item.name,
              "item": item.href ? `${process.env.NEXT_PUBLIC_SITE_URL || 'https://suenotattoo.com'}${item.href}` : undefined
            }))
          })
        }}
      />

      {/* Breadcrumb Navigation */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex space-x-2 text-sm text-crisp-white/70">
          {items.map((item, index) => (
            <li key={index}>
              {index > 0 && <span className="mr-2">/</span>}
              {item.href ? (
                <Link href={item.href} className="hover:text-gold transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="text-crisp-white">
                  {item.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}