import { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import { Building2, Mail, MapPin, Phone } from 'lucide-react'
import { COMPANY_INFO } from '../constants'
import Button from '../components/ui/Button'

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <Motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white py-12"
    >
      <div className="mx-auto w-full max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-brand-navy to-[#0e6b73] p-6 text-white shadow-lg sm:p-8">
          <p className="inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Contact Us
          </p>
          <h1 className="mt-4 font-montserrat text-3xl font-extrabold sm:text-4xl">
            Get In Touch With Green Nations power
          </h1>
          <p className="mt-3 max-w-3xl text-slate-100">
            Share your requirement and our team will connect with you for consultation, site
            support, and a tailored solar solution.
          </p>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            <article className="rounded-2xl border border-slate-200 bg-bg-light p-5 shadow-sm">
              <h2 className="font-montserrat text-xl font-bold text-brand-navy">Contact Information</h2>
              <div className="mt-4 space-y-3">
                <p className="flex items-center gap-3 text-slate-700">
                  <Mail className="h-5 w-5 text-brand-green" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-brand-green">
                    {COMPANY_INFO.email}
                  </a>
                </p>
                {COMPANY_INFO.phones.map((phone) => (
                  <p key={phone} className="flex items-center gap-3 text-slate-700">
                    <Phone className="h-5 w-5 text-brand-green" />
                    <a href={`tel:+91${phone}`} className="hover:text-brand-green">
                      +91 {phone}
                    </a>
                  </p>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-bg-light p-5 shadow-sm">
              <h2 className="font-montserrat text-xl font-bold text-brand-navy">Office Addresses</h2>
              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-2 flex items-center gap-2 font-semibold text-brand-navy">
                    <Building2 className="h-4 w-4 text-brand-green" />
                    {COMPANY_INFO.addresses.pune.title}
                  </p>
                  <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>{COMPANY_INFO.addresses.pune.address}</span>
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className="mb-2 flex items-center gap-2 font-semibold text-brand-navy">
                    <Building2 className="h-4 w-4 text-brand-green" />
                    {COMPANY_INFO.addresses.pimpriChinchwad.title}
                  </p>
                  <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    <span>{COMPANY_INFO.addresses.pimpriChinchwad.address}</span>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-montserrat text-2xl font-bold text-brand-navy">Send Us A Message</h2>
            <p className="mt-2 text-slate-600">
              Fill out the form and our team will contact you shortly.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault()
                setIsSubmitted(true)
                event.currentTarget.reset()
              }}
            >
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  required
                  className="h-12 w-full rounded-md border border-slate-200 px-3 text-base outline-none focus:border-brand-green"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Phone Number</label>
                  <input
                    type="tel"
                    required
                    className="h-12 w-full rounded-md border border-slate-200 px-3 text-base outline-none focus:border-brand-green"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    required
                    className="h-12 w-full rounded-md border border-slate-200 px-3 text-base outline-none focus:border-brand-green"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-base outline-none focus:border-brand-green"
                />
              </div>

              <Button type="submit">Submit Enquiry</Button>
            </form>

            {isSubmitted && (
              <p className="mt-4 rounded-md border border-brand-green/30 bg-brand-green/10 px-3 py-2 text-sm font-medium text-brand-navy">
                Thanks for contacting us. Our team will reach out soon.
              </p>
            )}
          </section>
        </section>
      </div>
    </Motion.div>
  )
}

export default ContactPage

