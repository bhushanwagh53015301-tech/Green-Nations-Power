export const SERVICE_LOCATIONS = [
  {
    name: 'Pune City (Haveli & Pune City)',
    slug: 'pune-city',
    subtitle: 'Urban and suburban rooftop solar systems for homes, offices, and institutions.',
  },
  {
    name: 'Khed',
    slug: 'khed',
    subtitle: 'Rural and industrial solar planning with EPC execution.',
  },
  {
    name: 'Ambegaon',
    slug: 'ambegaon',
    subtitle: 'Residential rooftops and agriculture-focused solar solutions.',
  },
  {
    name: 'Junnar',
    slug: 'junnar',
    subtitle: 'Mixed residential and farm solar with subsidy-ready systems.',
  },
  {
    name: 'Shirur',
    slug: 'shirur',
    subtitle: 'Commercial rooftops and industrial load reduction programs.',
  },
  {
    name: 'Daund',
    slug: 'daund',
    subtitle: 'Industrial and cooperative segment focused OPEX reduction.',
  },
  {
    name: 'Indapur',
    slug: 'indapur',
    subtitle: 'Residential rooftops, farm loads, and small industrial feeders.',
  },
  {
    name: 'Baramati',
    slug: 'baramati',
    subtitle: 'Large farm and industry-oriented solar ROI engineering.',
  },
  {
    name: 'Purandar',
    slug: 'purandhar',
    subtitle: 'Residential and village cluster solar with EPC support.',
  },
  {
    name: 'Bhor',
    slug: 'bhor',
    subtitle: 'Rural solar pumps and residential rooftop demand.',
  },
  {
    name: 'Velha',
    slug: 'velhe',
    subtitle: 'Remote-area solar electrification and rooftop systems.',
  },
  {
    name: 'Mulshi',
    slug: 'mulshi',
    subtitle: 'Premium residential and resort solar installations.',
  },
  {
    name: 'Mawal',
    slug: 'mawal',
    subtitle: 'Industrial corridor rooftops and commercial solar plants.',
  },
  {
    name: 'Pimpri-Chinchwad',
    slug: 'pimpri-chinchwad-city',
    subtitle: 'High-density urban and industrial solar deployments.',
  },
]

export function getServiceLocationBySlug(citySlug) {
  return SERVICE_LOCATIONS.find((city) => city.slug === citySlug)
}

export function getLocationPagePath(citySlug) {
  return `/best-solar-provider-in/${citySlug}`
}
