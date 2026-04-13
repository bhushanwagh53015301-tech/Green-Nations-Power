import { useEffect, useRef, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { BadgeCheck, Clock3, FileText, IndianRupee, Rocket, ShieldCheck, Target, Users, Wrench } from 'lucide-react'
import Button from '../components/ui/Button'
import founderImage from '../../assets/Vikas shivram jagtap.png'

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
    image: 'https://img.icons8.com/fluency/512/goal.png',
  },
  {
    id: 'mission',
    tabLabel: 'Mission',
    title: 'Our Mission',
    description:
      'Deliver innovative, high-quality solar systems that empower homes and businesses with lower energy cost.',
    extraDescription:
      'Our mission is to provide transparent consultation, precise engineering, quality installation, and lifecycle support so customers get measurable performance from day one.',
    icon: Rocket,
    points: [
      'Design practical systems tailored to customer energy requirements.',
      'Use quality components with disciplined engineering execution.',
      'Provide responsive support throughout the project lifecycle.',
    ],
    image: 'https://img.icons8.com/fluency/512/rocket.png',
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

const founderProfile = {
  name: 'Vikas Shivram Jagtap',
  role: 'Founder, Green Nations Power',
  image: founderImage,
  bio:
    'Green Nations Power was founded with one clear goal: make clean energy practical, reliable, and affordable for every household and business. With a strong focus on long-term value, our founder has built the company around quality workmanship, ethical service, and transparent project guidance from consultation to commissioning.',
  note:
    'Our founder leads with a service-first mindset, combining engineering discipline with transparent guidance so customers can adopt solar with confidence. His vision is not only to install solar systems, but to help families and businesses move toward energy independence, reduced electricity costs, and a cleaner future for the next generation.',
}

const aboutUsCorePoints = [
  {
    title: 'On-time Project Delivery',
    description: 'Committed timelines with disciplined planning and execution.',
    icon: Clock3,
  },
  {
    title: 'Safety First',
    description: 'Strict safety protocols across installation and maintenance.',
    icon: ShieldCheck,
  },
  {
    title: 'Compliance',
    description: 'Process alignment with regulatory and technical standards.',
    icon: BadgeCheck,
  },
  {
    title: 'Documentation',
    description: 'Transparent records, approvals, and handover documentation.',
    icon: FileText,
  },
]

const jansamarthDocuments = [
  'Aadhar Card',
  'PAN Card',
  'Light Bill',
  'Cancelled cheque or passbook',
  'Nationalized bank account is required',
]



function AboutPage() {
  const [activeTab, setActiveTab] = useState('vision')
  const [activeTeamIndex, setActiveTeamIndex] = useState(0)
  const [desktopCardHeight, setDesktopCardHeight] = useState(null)
  const whyChooseCardRef = useRef(null)
  const activeVisionMission = visionMissionTabs.find((item) => item.id === activeTab) ?? visionMissionTabs[0]
  const activeTeamMember = teamMembers[activeTeamIndex]
  const ActiveIcon = activeVisionMission.icon

  useEffect(() => {
    const syncDesktopImageHeight = () => {
      if (window.innerWidth < 1024) {
        setDesktopCardHeight(null)
        return
      }

      if (whyChooseCardRef.current) {
        setDesktopCardHeight(whyChooseCardRef.current.offsetHeight)
      }
    }

    syncDesktopImageHeight()
    window.addEventListener('resize', syncDesktopImageHeight)

    return () => {
      window.removeEventListener('resize', syncDesktopImageHeight)
    }
  }, [])

  useEffect(() => {
    const autoplayId = window.setInterval(() => {
      setActiveTeamIndex((previous) => (previous + 1) % teamMembers.length)
    }, 4500)

    return () => window.clearInterval(autoplayId)
  }, [])

  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white"
    >
      <section className="bg-[#f3f5f4] py-16">
        <div className="mx-auto w-full max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="order-2 lg:order-1">
              <p className="inline-flex rounded-md bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
                Founder Spotlight
              </p>
              <h2 className="mt-4 font-montserrat text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
                {founderProfile.name}
              </h2>
              <p className="mt-1 text-base font-semibold text-brand-green">{founderProfile.role}</p>
              <p className="mt-4 text-slate-700">{founderProfile.bio}</p>
              <p className="mt-3 text-slate-600">{founderProfile.note}</p>
              <Button to="/contact" className="mt-6">Connect With Our Team</Button>
            </article>
            <div className="order-1 mx-auto h-[300px] w-full max-w-[520px] overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100 sm:h-[350px] lg:order-2 lg:h-[380px]">
              <img
                src={founderProfile.image}
                alt={`${founderProfile.name}, ${founderProfile.role}`}
                className="h-full w-full object-contain object-top"
              />
            </div>
          </div>

          <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="inline-flex rounded-md bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
              About Us
            </p>
            <h2 className="mt-4 font-montserrat text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Our Commitments
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {aboutUsCorePoints.map((item) => {
                const Icon = item.icon
                return (
                <article
                  key={item.title}
                  className="h-full rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-brand-green">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-montserrat text-2xl font-bold leading-tight text-brand-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
                )
              })}
            </div>
          </section>

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
            <div className="grid grid-cols-2 gap-3 text-center text-sm font-semibold text-slate-600 sm:grid-cols-3 lg:grid-cols-9">
              <span className="rounded-full border border-slate-200 px-3 py-2">MSME</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">MNRE</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Govt. Aligned</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Gautam Solar</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Waaree</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Growatt</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Havells</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">SolarEdge</span>
              <span className="rounded-full border border-slate-200 px-3 py-2">Solar Yaan</span>
            </div>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr]">
            <article ref={whyChooseCardRef} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
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

            <div className="mx-auto w-full max-w-[420px] lg:max-w-none">
              <div
                style={desktopCardHeight ? { height: `${desktopCardHeight}px` } : undefined}
                className="min-h-[260px] overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src="https://i.pinimg.com/1200x/9b/ca/e3/9bcae390dd4791507d72a1dda34de4c4.jpg"
                  alt="Solar panel technician"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <p className="inline-flex rounded-md bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
              Required Document List
            </p>
            <h2 className="mt-4 font-montserrat text-3xl font-extrabold text-brand-navy sm:text-4xl">
              Jansamarth (Bank Loan) Documents
            </h2>
            <ul className="mt-6 space-y-2 text-slate-700">
              {jansamarthDocuments.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 inline-block h-2 w-2 rounded-full bg-brand-green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-xl border border-brand-green/20 bg-emerald-50 px-4 py-3 text-sm font-semibold text-brand-navy">
              We provide complete loan support, including end-to-end documentation and banking support.
            </p>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="inline-flex rounded-md bg-brand-green px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-navy">
                  Team Members
                </p>
                <h2 className="mt-4 font-montserrat text-3xl font-extrabold text-brand-navy sm:text-4xl">
                  Meet The People Behind Every Project
                </h2>
              </div>
              <div />
            </div>

            <Motion.article
              key={activeTeamMember.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-8 grid overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 lg:grid-cols-[0.85fr_1.15fr]"
            >
              <div className="h-[320px] sm:h-[360px] lg:h-[420px]">
                <img
                  src={activeTeamMember.image}
                  alt={`${activeTeamMember.name}, ${activeTeamMember.role}`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-montserrat text-2xl font-bold text-brand-navy">{activeTeamMember.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-green">
                  {activeTeamMember.role}
                </p>
                <p className="mt-4 max-w-2xl text-slate-600">{activeTeamMember.description}</p>
              </div>
            </Motion.article>

            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {teamMembers.map((member, index) => (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setActiveTeamIndex(index)}
                  className={`h-2.5 rounded-full transition ${
                    index === activeTeamIndex ? 'w-8 bg-brand-green' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`View ${member.name}`}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </Motion.div>
  )
}

const teamMembers = [
  {
    name: 'Priya Deshmukh',
    role: 'Solar Design Engineer',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80',
    description: 'Designs efficient systems aligned to site load profile, roof geometry, and long-term performance.',
  },
  {
    name: 'Amit Jadhav',
    role: 'Project Execution Lead',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=900&q=80',
    description: 'Manages end-to-end project delivery with quality checks, safety, and timeline discipline.',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Customer Success Manager',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=900&q=80',
    description: 'Supports customers from proposal through commissioning and helps optimize post-installation output.',
  },
  {
    name: 'Rahul Patil',
    role: 'Operations & Service Head',
    image:
      'https://images.unsplash.com/photo-1542204625-de293a2a4b5b?auto=format&fit=crop&w=900&q=80',
    description: 'Ensures preventive maintenance and responsive after-sales service for consistent plant uptime.',
  },
]
export default AboutPage
