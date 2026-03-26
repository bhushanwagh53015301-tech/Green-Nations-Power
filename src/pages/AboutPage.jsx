import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { IndianRupee, Lightbulb, ShieldCheck, Target, Users, Wrench } from 'lucide-react'
import Button from '../components/ui/Button'

const visionMissionTabs = [
  {
    id: 'vision',
    tabLabel: 'Vision',
    title: 'Our Vision',
    description:
      'To become a global solar leader by driving clean, greener, and more sustainable energy solutions.',
    extraDescription:
      'We envision communities and industries powered by reliable clean energy, where every project contributes to long-term savings, resilience, and environmental responsibility.',
    icon: Target,
    points: [
      'Lead clean-energy adoption across domestic and commercial sectors.',
      'Promote reliable, scalable, and future-ready solar infrastructure.',
      'Create long-term environmental impact through renewable deployment.',
    ],
    image: 'https://img.icons8.com/fluency/512/wind-turbine.png',
  },
  {
    id: 'mission',
    tabLabel: 'Mission',
    title: 'Our Mission',
    description:
      'Deliver innovative, high-quality solar systems that empower homes and businesses with lower energy cost.',
    extraDescription:
      'Our mission is to provide transparent consultation, precise engineering, quality installation, and lifecycle support so customers get measurable performance from day one.',
    icon: Lightbulb,
    points: [
      'Design practical systems tailored to customer energy requirements.',
      'Use quality components with disciplined engineering execution.',
      'Provide responsive support throughout the project lifecycle.',
    ],
    image: 'https://img.icons8.com/fluency/512/renewable-energy.png',
  },
]

const whyChoosePoints = [
  {
    title: 'Affordable Cost',
    description: 'Practical system design that delivers strong long-term savings.',
    icon: IndianRupee,
  },
  {
    title: 'Quality Products',
    description: 'Reliable components and installation standards for consistent performance.',
    icon: ShieldCheck,
  },
  {
    title: 'Our Expert Team',
    description: 'Skilled engineers and technicians focused on quality execution.',
    icon: Users,
  },
  {
    title: 'After-Sales Service',
    description: 'Fast support for maintenance, optimization, and uptime.',
    icon: Wrench,
  },
]

function AboutPage() {
  const [activeTab, setActiveTab] = useState('vision')
  const activeVisionMission = visionMissionTabs.find((item) => item.id === activeTab) ?? visionMissionTabs[0]
  const ActiveIcon = activeVisionMission.icon

  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white"
    >
      <section className="bg-[#f3f5f4] py-16">
        <div className="mx-auto w-full max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="rounded-[24px] border border-slate-200 bg-white p-5 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {visionMissionTabs.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`h-14 text-center font-montserrat text-2xl font-semibold transition sm:text-3xl ${
                    activeTab === item.id
                      ? 'bg-brand-green text-brand-navy'
                      : 'bg-white text-brand-navy hover:bg-emerald-50'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="h-0.5 bg-brand-green/50" />

            <div className="grid items-center gap-10 px-2 py-10 lg:grid-cols-2 lg:px-6 lg:py-12">
              <Motion.article
                key={`${activeVisionMission.id}-text`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-100 text-brand-green">
                    <ActiveIcon className="h-5 w-5" />
                  </span>
                  <h2 className="font-montserrat text-4xl font-extrabold text-brand-green sm:text-5xl">
                    {activeVisionMission.title}
                  </h2>
                </div>
                <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-800">
                  {activeVisionMission.description}
                </p>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
                  {activeVisionMission.extraDescription}
                </p>
                <ul className="mt-5 max-w-2xl space-y-2 text-base text-slate-700">
                  {activeVisionMission.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-2 w-2 rounded-full bg-brand-green" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Motion.article>

              <Motion.div
                key={`${activeVisionMission.id}-image`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="min-h-[260px]"
              >
                <img
                  src={activeVisionMission.image}
                  alt={`${activeVisionMission.title} graphic`}
                  onError={(event) => {
                    event.currentTarget.onerror = null
                    event.currentTarget.src = 'https://img.icons8.com/fluency/512/sun.png'
                  }}
                  className="mx-auto h-[320px] w-full max-w-[520px] object-contain"
                />
              </Motion.div>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1400&q=80"
                alt="Government solar rooftop program"
                className="h-full min-h-[350px] w-full object-cover"
              />
            </div>

            <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="inline-flex rounded-md bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
                Government Initiatives For Solar
              </p>
              <h2 className="mt-4 font-montserrat text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
                Central Government Rooftop <span className="text-brand-green">Solar Subsidy</span> Programme.
              </h2>
              <p className="mt-4 text-slate-600">
                We help customers align with current rooftop subsidy workflows and documentation for a
                smoother project journey.
              </p>
              <div className="mt-6 grid gap-2 text-sm font-semibold text-slate-600 sm:grid-cols-2">
                <span className="rounded-md border border-slate-200 px-3 py-2">MNRE Guided</span>
                <span className="rounded-md border border-slate-200 px-3 py-2">Mahavitaran Process Support</span>
                <span className="rounded-md border border-slate-200 px-3 py-2">National Rooftop Program</span>
                <span className="rounded-md border border-slate-200 px-3 py-2">Transparent Proposal Model</span>
              </div>
              <Button to="/contact" className="mt-6">Need Help? Contact Us</Button>
            </article>
          </div>

          <div className="rounded-[20px] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="grid grid-cols-2 gap-3 text-center text-sm font-semibold text-slate-600 sm:grid-cols-3 lg:grid-cols-6">
              <span className="rounded-full border border-slate-200 px-3 py-2">MSME</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">ISO Practices</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">MNRE</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Govt. Aligned</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Gautam Solar</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Waaree</span>
            </div>
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
            <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="inline-flex rounded-md bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
                Why Choose Us
              </p>
              <h2 className="mt-4 font-montserrat text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
                We Deliver <span className="text-brand-green">Expertise You Can Trust</span> For Every Service
              </h2>
              <p className="mt-4 text-slate-600">
                Tailored project planning and robust execution standards for homes, businesses, and EPC opportunities.
              </p>
              <div className="mt-6 space-y-4">
                {whyChoosePoints.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-brand-green">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-brand-navy">{item.title}</h3>
                        <p className="text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </article>

            <div className="grid gap-4">
              <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80"
                  alt="Wind and solar farm"
                  className="h-52 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80"
                  alt="Solar panel technician"
                  className="h-52 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Motion.div>
  )
}

export default AboutPage
