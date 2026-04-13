import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

const baseSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name is required.'),
  whatsapp: z.string().regex(/^\d{10}$/, 'Enter a valid 10-digit WhatsApp number.'),
})

const industrialSchema = baseSchema.extend({
  sanctionedLoad: z.coerce
    .number({ invalid_type_error: 'Enter sanctioned load.' })
    .min(5, 'Minimum sanctioned load is 5 kW.'),
  companyName: z.string().trim().min(2, 'Company name is required.'),
})

const epcSchema = baseSchema.extend({
  acres: z.coerce.number({ invalid_type_error: 'Enter acres.' }).min(1),
  pinCode: z.string().regex(/^\d{6}$/, 'Enter a valid 6-digit pin code.'),
  extractFileName: z.string().trim().min(1, 'Please upload the 7/12 extract.'),
})

function ContactForm({ variant }) {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const schema = useMemo(() => {
    if (variant === 'industrial') {
      return industrialSchema
    }

    return epcSchema
  }, [variant])

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues:
      variant === 'industrial'
        ? {
            fullName: '',
            whatsapp: '',
            sanctionedLoad: 5,
            companyName: '',
          }
        : {
            fullName: '',
            whatsapp: '',
            acres: 5,
            pinCode: '',
            extractFileName: '',
          },
  })

  const onSubmit = async (values) => {
    setSubmitted(false)
    setSubmitError('')

    if (!WEB3FORMS_ACCESS_KEY) {
      throw new Error('Missing Web3Forms key')
    }

    const formData = new FormData()
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', `New ${variant === 'industrial' ? 'Industrial' : 'EPC'} Lead - Green Nations Power`)
    formData.append('from_name', 'Green Nations Power Website')
    formData.append('replyto', 'greennationpoweruk@gmail.com')
    formData.append('Form Type', variant === 'industrial' ? 'Industrial Lead Form' : 'EPC Land Lead Form')
    formData.append('Full Name', values.fullName)
    formData.append('WhatsApp', values.whatsapp)

    if (variant === 'industrial') {
      formData.append('Sanctioned Load (kW)', String(values.sanctionedLoad))
      formData.append('Company Name', values.companyName)
    } else {
      formData.append('Acres of Land', String(values.acres))
      formData.append('Pin Code', values.pinCode)
      formData.append('7/12 Extract File Name', values.extractFileName)
    }

    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      body: formData,
    })

    const result = await response.json()
    if (!response.ok || !result.success) {
      throw new Error('Submission failed')
    }

    setSubmitted(true)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(
        async (values) => {
          try {
            await onSubmit(values)
          } catch (_error) {
            setSubmitted(false)
            if (!WEB3FORMS_ACCESS_KEY) {
              setSubmitError('Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to enable submissions.')
              return
            }
            setSubmitError('Submission failed. Please try again or contact us on WhatsApp.')
          }
        },
      )}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-base font-medium text-slate-700">Full Name</label>
          <input
            type="text"
            className="h-12 w-full rounded-md border border-slate-200 bg-transparent px-3 text-base"
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm font-medium text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="mb-1 block text-base font-medium text-slate-700">
            WhatsApp Number
          </label>
          <input
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={10}
            className="h-12 w-full rounded-md border border-slate-200 bg-transparent px-3 text-base"
            {...register('whatsapp')}
            onInput={(event) => {
              event.target.value = event.target.value.replace(/\D/g, '').slice(0, 10)
            }}
          />
          {errors.whatsapp && (
            <p className="mt-1 text-sm font-medium text-red-600">{errors.whatsapp.message}</p>
          )}
        </div>
      </div>

      {variant === 'industrial' && (
        <>
          <div>
            <label className="mb-1 block text-base font-medium text-slate-700">
              Sanctioned Load (kW)
            </label>
            <input
              type="number"
              min="5"
              className="h-12 w-full rounded-md border border-slate-200 bg-transparent px-3 text-base"
              {...register('sanctionedLoad')}
            />
            {errors.sanctionedLoad && (
              <p className="mt-1 text-sm font-medium text-red-600">
                {errors.sanctionedLoad.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-1 block text-base font-medium text-slate-700">
              Company Name
            </label>
            <input
              type="text"
              className="h-12 w-full rounded-md border border-slate-200 bg-transparent px-3 text-base"
              {...register('companyName')}
            />
            {errors.companyName && (
              <p className="mt-1 text-sm font-medium text-red-600">{errors.companyName.message}</p>
            )}
          </div>
        </>
      )}

      {variant === 'epc' && (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-1 block text-base font-medium text-slate-700">
                Acres of Land
              </label>
              <input
                type="number"
                min="1"
                className="h-12 w-full rounded-md border border-slate-200 bg-transparent px-3 text-base"
                {...register('acres')}
              />
              {errors.acres && (
                <p className="mt-1 text-sm font-medium text-red-600">{errors.acres.message}</p>
              )}
            </div>

            <div>
              <label className="mb-1 block text-base font-medium text-slate-700">Pin Code</label>
              <input
                type="text"
                maxLength={6}
                inputMode="numeric"
                className="h-12 w-full rounded-md border border-slate-200 bg-transparent px-3 text-base"
                {...register('pinCode')}
                onInput={(event) => {
                  event.target.value = event.target.value.replace(/\D/g, '').slice(0, 6)
                }}
              />
              {errors.pinCode && (
                <p className="mt-1 text-sm font-medium text-red-600">{errors.pinCode.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-base font-medium text-slate-700">7/12 Extract</label>
            <input
              type="file"
              className="h-12 w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-base"
              onChange={(event) => {
                const file = event.target.files?.[0]
                setValue('extractFileName', file?.name ?? '', {
                  shouldValidate: true,
                })
              }}
            />
            {errors.extractFileName && (
              <p className="mt-1 text-sm font-medium text-red-600">
                {errors.extractFileName.message}
              </p>
            )}
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-md bg-brand-green text-base font-semibold text-white shadow-md transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Submitting...' : 'Request Consultation'}
      </button>

      {submitted && (
        <p className="rounded-md border border-brand-green/30 bg-brand-green/10 px-3 py-2 text-sm font-semibold text-brand-navy">
          Details received. Our Uruli Kanchan team will contact you shortly.
        </p>
      )}

      {submitError && (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm font-semibold text-red-700">
          {submitError}
        </p>
      )}
    </form>
  )
}

export default ContactForm
