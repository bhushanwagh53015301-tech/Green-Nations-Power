import { motion as Motion } from 'framer-motion'
import { BadgeCheck, Building2, Factory, FileCheck2, IndianRupee, Zap } from 'lucide-react'
import SolarCalculator from '../components/calculator/SolarCalculator'
import ContactForm from '../components/forms/ContactForm'
import Button from '../components/ui/Button'

const businessBenefits = [
  {
    title: 'Lower Monthly OPEX',
    description:
      'Cut recurring electricity spend with high-yield rooftop and captive solar generation.',
    icon: IndianRupee,
  },
  {
    title: 'Tariff Risk Protection',
    description:
      'Reduce dependence on annual tariff escalation by locking long-term solar energy economics.',
    icon: Zap,
  },
  {
    title: 'Tax and Financial Advantage',
    description:
      'Leverage depreciation and structured project planning to improve year-one cashflow.',
    icon: BadgeCheck,
  },
  {
    title: 'Reliable Engineering Delivery',
    description:
      'Detailed design, quality components, and commissioning support for stable generation.',
    icon: FileCheck2,
  },
]

const industriesServed = [
  'Manufacturing Plants',
  'Warehouses and Logistics Parks',
  'Hospitals and Institutions',
  'Commercial Buildings and IT Parks',
  'Agro-processing Units',
  'Hotels and Hospitality Facilities',
]

const deliveryFlow = [
  'Energy audit and sanctioned load analysis',
  'Feasibility, design, and generation projection',
  'Commercial proposal and ROI planning',
  'Execution, testing, and synchronization',
  'Performance monitoring and O&M support',
]

const FALLBACK_SOLAR_IMAGE =
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80'

function CommercialPage() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white py-12"
    >
      <div className="mx-auto w-full max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-navy to-[#0e6b73] text-white shadow-lg">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                Commercial and Industrial Solar
              </p>
              <h1 className="mt-4 font-montserrat text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Slashing OPEX for MIDC Factories and Commercial Facilities
              </h1>
              <p className="mt-4 max-w-2xl text-base text-slate-100 sm:text-lg">
                Engineer your power costs down with grid-synchronized captive solar plants built for
                long-term reliability and predictable savings.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="bg-white !text-brand-navy hover:bg-slate-100">Request Site Survey</Button>
                <Button to="/projects" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20">
                  View Commercial Projects
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-white/20 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80"
                alt="Commercial rooftop solar plant"
                onError={(event) => {
                  event.currentTarget.onerror = null
                  event.currentTarget.src = FALLBACK_SOLAR_IMAGE
                }}
                className="h-72 w-full object-cover lg:h-[380px]"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-brand-green" />
            <h2 className="font-montserrat text-2xl font-bold text-brand-navy sm:text-3xl">
              Business Benefits
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {businessBenefits.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-brand-green">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-montserrat text-xl font-semibold text-brand-navy">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-slate-200 bg-bg-light p-6 shadow-sm">
            <h2 className="font-montserrat text-2xl font-bold text-brand-navy">Industries We Serve</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {industriesServed.map((industry) => (
                <li key={industry} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700">
                  {industry}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-bg-light p-6 shadow-sm">
            <h2 className="font-montserrat text-2xl font-bold text-brand-navy">Execution Flow</h2>
            <ol className="mt-4 space-y-3">
              {deliveryFlow.map((step, index) => (
                <li key={step} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-700">{step}</p>
                </li>
              ))}
            </ol>
          </article>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-bg-light p-5 shadow-sm sm:p-6">
          <h2 className="font-montserrat text-2xl font-bold text-brand-navy sm:text-3xl">
            Commercial Savings Calculator
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Estimate CAPEX, annual savings, and payback for your sanctioned load with instant
            commercial projections.
          </p>
          <div className="mt-5">
            <SolarCalculator lockedTab="commercial" />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-5 flex items-center gap-3">
            <Factory className="h-6 w-6 text-brand-green" />
            <h2 className="font-montserrat text-2xl font-bold text-brand-navy sm:text-3xl">
              Industrial Lead Form
            </h2>
          </div>
          <p className="mb-6 max-w-3xl text-slate-600">
            Share your load details and facility information. Our team will provide a practical
            commercial solar recommendation with sizing and savings guidance.
          </p>
          <ContactForm variant="industrial" />
        </section>
      </div>
    </Motion.div>
  )
}

export default CommercialPage
