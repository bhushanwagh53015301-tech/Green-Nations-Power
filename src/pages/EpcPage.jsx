import { motion as Motion } from 'framer-motion'
import SolarCalculator from '../components/calculator/SolarCalculator'
import ContactForm from '../components/forms/ContactForm'

function EpcPage() {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-bg-light py-12"
    >
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h1 className="font-montserrat text-3xl font-extrabold text-brand-navy sm:text-4xl">
            Earn Passive Income from Barren Land. MSKVY 2.0 Specialists.
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-600">
            Submit land details for rapid grid-feasibility review and EPC partnership guidance.
          </p>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="font-montserrat text-2xl font-bold text-brand-navy sm:text-3xl">
            EPC Land Calculator
          </h2>
          <p className="mt-2 max-w-3xl text-slate-600">
            Estimate potential project capacity, yearly income, and feasibility for your land parcel.
          </p>
          <div className="mt-5">
            <SolarCalculator lockedTab="rural" />
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-montserrat text-2xl font-bold text-brand-navy">
            EPC Land Lead Form
          </h2>
          <ContactForm variant="epc" />
        </section>
      </div>
    </Motion.div>
  )
}

export default EpcPage
