import { Link } from 'react-router-dom'
import { getLocationPagePath, SERVICE_LOCATIONS } from '../data/serviceLocations'

const mainPages = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Residential Solar', to: '/residential' },
  { label: 'Commercial Solar', to: '/commercial' },
  { label: 'EPC Land Programs', to: '/epc' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
  { label: 'Service Areas', to: '/locations' },
]

function SitemapPage() {
  return (
    <main className="bg-bg-light py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h1 className="font-montserrat text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Sitemap
          </h1>
          <p className="mt-3 max-w-3xl text-slate-600">
            Browse all important website pages from one place.
          </p>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <article>
              <h2 className="font-montserrat text-xl font-bold text-brand-navy">Main Pages</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {mainPages.map((page) => (
                  <li key={page.to}>
                    <Link
                      to={page.to}
                      className="block rounded-lg border border-slate-200 bg-white px-4 py-3 font-semibold text-brand-navy transition hover:border-brand-green hover:text-brand-green"
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="font-montserrat text-xl font-bold text-brand-navy">Location Pages</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {SERVICE_LOCATIONS.map((city) => (
                  <li key={city.slug}>
                    <Link
                      to={getLocationPagePath(city.slug)}
                      className="block rounded-lg border border-slate-200 bg-white px-4 py-3 font-semibold text-brand-navy transition hover:border-brand-green hover:text-brand-green"
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}

export default SitemapPage
