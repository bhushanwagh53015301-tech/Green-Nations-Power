import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

const BASE_KEYWORDS = [
  'best solar rooftop',
  'best solar rooftop company',
  'best solar rooftop installation',
  'best solar commercial',
  'best solar commerical',
  'best solar commercial solutions',
  'best solar institution',
  'best solar institutional solar company',
  'solar rooftop pune',
  'commercial solar company pune',
  'institutional solar installation',
  'solar epc company',
  'solar panel installation company',
  'residential rooftop solar',
  'industrial solar solutions',
  'pm surya ghar yojana',
  'pm surya ghar muft bijli yojana',
  'pmsuryaghar',
  'pmsuryaghar gov in',
  'pmsuryaghar gov in registration',
  'https://pmsuryaghar.gov.in/#/',
  'pm kusum yojana',
  'pm kusum scheme',
  'pm kusum mnre',
  'pmkusum mnre gov in',
  'https://pmkusum.mnre.gov.in/',
  'mnre solar subsidy scheme',
  'government solar subsidy india',
]

const ROUTE_SEO = {
  '/': {
    title: 'Best Solar Rooftop, Commercial & Institution Solutions | Green Nations Power',
    description:
      'Green Nations Power provides best solar rooftop, commercial, and institution solar solutions with end-to-end design, installation, and support.',
    keywords: [
      'best solar rooftop solutions',
      'best solar commercial solutions',
      'best solar institution solutions',
      'rooftop solar systems for homes',
      'commercial and industrial solar projects',
    ],
  },
  '/about': {
    title: 'About Green Nations Power | Best Solar Rooftop Experts',
    description:
      'Learn about Green Nations Power, a trusted team for rooftop, commercial, and institutional solar projects in Pune and nearby regions.',
    keywords: [
      'best solar rooftop experts',
      'trusted solar company',
      'solar solution provider pune',
    ],
  },
  '/residential': {
    title: 'Residential Rooftop Solar Solutions | Green Nations Power',
    description:
      'Get residential rooftop solar systems designed for higher savings, subsidy support, and reliable long-term performance.',
    keywords: [
      'home solar rooftop installation',
      'best residential solar company',
      'rooftop solar subsidy support',
    ],
  },
  '/commercial': {
    title: 'Commercial & Industrial Solar Solutions | Green Nations Power',
    description:
      'Scale business savings with commercial and industrial solar systems, custom engineering, and professional installation support.',
    keywords: [
      'best solar commercial company',
      'best solar commerical provider',
      'industrial solar rooftop solutions',
    ],
  },
  '/epc': {
    title: 'Solar EPC Services | Green Nations Power',
    description:
      'Complete solar EPC services from engineering to commissioning for residential, commercial, and institutional projects.',
    keywords: [
      'best solar epc company',
      'solar engineering procurement construction',
      'institutional solar epc services',
    ],
  },
  '/locations': {
    title: 'Service Locations | Best Solar Provider by City',
    description:
      'Explore Green Nations Power service areas and find city-specific support for rooftop, commercial, and institution solar projects.',
    keywords: [
      'best solar provider by city',
      'solar rooftop near me',
      'commercial solar installation in my city',
    ],
  },
  '/projects': {
    title: 'Solar Projects Portfolio | Green Nations Power',
    description:
      'View completed rooftop, commercial, and institutional solar projects delivered by Green Nations Power.',
    keywords: [
      'solar projects portfolio',
      'commercial solar project company',
      'institutional solar project execution',
    ],
  },
  '/contact': {
    title: 'Contact Green Nations Power | Solar Rooftop Consultation',
    description:
      'Contact Green Nations Power for rooftop, commercial, and institutional solar consultation, site survey, and project planning.',
    keywords: [
      'solar consultation contact',
      'book solar site survey',
      'best solar rooftop company contact',
    ],
  },
}

function setMetaByName(name, content) {
  if (!content) {
    return
  }

  let metaTag = document.querySelector(`meta[name="${name}"]`)
  if (!metaTag) {
    metaTag = document.createElement('meta')
    metaTag.setAttribute('name', name)
    document.head.appendChild(metaTag)
  }
  metaTag.setAttribute('content', content)
}

function formatCityName(citySlug) {
  return citySlug
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

function getSeoDetails(pathname) {
  if (pathname.startsWith('/best-solar-provider-in/')) {
    const citySlug = pathname.replace('/best-solar-provider-in/', '').split('/')[0]
    const cityName = formatCityName(citySlug)

    return {
      title: `Best Solar Provider in ${cityName} | Green Nations Power`,
      description: `Find best solar rooftop, commercial, and institution solar services in ${cityName} with Green Nations Power.`,
      keywords: [
        `best solar provider in ${cityName}`,
        `best solar rooftop in ${cityName}`,
        `best solar commercial in ${cityName}`,
        `best solar institution in ${cityName}`,
      ],
    }
  }

  return ROUTE_SEO[pathname] || ROUTE_SEO['/']
}

function SiteSeoManager() {
  const { pathname } = useLocation()
  const seoDetails = useMemo(() => getSeoDetails(pathname), [pathname])
  const keywordList = useMemo(() => [...BASE_KEYWORDS, ...seoDetails.keywords], [seoDetails.keywords])

  useEffect(() => {
    document.title = seoDetails.title
    setMetaByName('description', seoDetails.description)
    setMetaByName('keywords', keywordList.join(', '))
  }, [seoDetails.title, seoDetails.description, keywordList])

  return (
    <section className="sr-only" aria-label="Website SEO keyword content">
      <h2>{seoDetails.title}</h2>
      <p>{seoDetails.description}</p>
      <p>
        PM Surya Ghar Muft Bijli Yojana and PM Kusum scheme related solar keywords for rooftop,
        commercial, institutional, agriculture, and subsidy-focused services.
      </p>
      <p>{keywordList.join(', ')}</p>
    </section>
  )
}

export default SiteSeoManager
