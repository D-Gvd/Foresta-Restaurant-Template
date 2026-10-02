'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { restaurant } from '../data/restaurant'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function Reservations() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [state, setState] = useState<FormState>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setState('submitting')
    // Replace with your reservation API call
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  return (
    <section
      id="reservations"
      ref={ref}
      className="py-28 md:py-40 bg-deep border-t border-forest"
    >
      <div className="max-w-2xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-sans text-gold text-xs tracking-widest-2 mb-4">Dine with us</p>
          <h2 className="font-display italic display-section text-cream">Reserve a Table</h2>
          <span className="rule-gold" />
          <p className="font-sans text-stone text-sm leading-relaxed">
            For parties of eight or more, please contact us directly at{' '}
            <a href={`tel:${restaurant.contact.phone}`} className="text-cream/70 hover:text-gold transition-colors">
              {restaurant.contact.phone}
            </a>.
          </p>
        </motion.div>

        {state === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 border border-sage/30 bg-canopy/30"
          >
            <p className="font-display italic text-4xl text-cream mb-3">Thank you.</p>
            <p className="font-sans text-stone text-sm">
              We've received your request and will confirm your reservation by email within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name"  label="Full Name"    type="text"  placeholder="Jane Smith"        required />
              <Field id="email" label="Email"         type="email" placeholder="jane@email.com"    required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="phone" label="Phone"         type="tel"   placeholder="+1 (555) 000 0000" />
              <Field id="party" label="Party Size"    type="number" placeholder="2" min={1} max={7} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="date" label="Date"           type="date"   required />
              <div>
                <label htmlFor="time" className="block font-sans text-xs text-stone mb-2">Preferred Time</label>
                <select
                  id="time"
                  name="time"
                  required
                  className="w-full bg-forest border border-sage/30 text-cream text-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors appearance-none"
                >
                  <option value="">Select a time</option>
                  {['5:30 pm','6:00 pm','6:30 pm','7:00 pm','7:30 pm','8:00 pm','8:30 pm','9:00 pm'].map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block font-sans text-xs text-stone mb-2">
                Special Requests <span className="text-stone/50">(optional)</span>
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="Allergies, celebrations, seating preferences…"
                className="w-full bg-forest border border-sage/30 text-cream text-sm px-4 py-3 placeholder-stone/40 focus:outline-none focus:border-gold transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={state === 'submitting'}
              className="w-full py-4 bg-gold text-deep text-sm font-medium hover:bg-gold-dim disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {state === 'submitting' ? 'Sending…' : 'Request Reservation'}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  )
}

// ─── Reusable input field ─────────────────────────────────────────────────────
function Field({
  id,
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { id: string; label: string }) {
  return (
    <div>
      <label htmlFor={id} className="block font-sans text-xs text-stone mb-2">{label}</label>
      <input
        id={id}
        name={id}
        {...props}
        className="w-full bg-forest border border-sage/30 text-cream text-sm px-4 py-3 placeholder-stone/40 focus:outline-none focus:border-gold transition-colors"
      />
    </div>
  )
}
