'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { restaurant } from '../data/restaurant'

export default function About() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-28 md:py-40 px-6 md:px-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="font-sans text-gold text-xs tracking-widest-2 mb-6">Our Story</p>

          <blockquote className="font-display italic display-section text-cream leading-tight mb-8">
            "{restaurant.pullQuote}"
          </blockquote>

          <span className="rule-gold" />

          <p className="font-sans text-stone text-base leading-relaxed max-w-md">
            {restaurant.description}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-forest pt-8">
            {[
              { value: '7', label: 'Years in the kitchen' },
              { value: '40+', label: 'Local farm partners' },
              { value: '12', label: 'Seats at the chefs table' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl text-gold">{stat.value}</p>
                <p className="font-sans text-stone text-xs mt-1 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: image stack */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative"
        >
          {/* Main image */}
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={restaurant.images.about}
              alt="Restaurant interior"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Accent box */}
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-canopy border border-sage/30 flex items-center justify-center p-4">
            <p className="font-display italic text-center text-cream/80 text-lg leading-snug">
              Seasonal.<br />Honest.<br />Local.
            </p>
          </div>
          {/* Gold corner accent */}
          <div className="absolute -top-4 -right-4 w-20 h-20 border border-gold/40" />
        </motion.div>
      </div>
    </section>
  )
}
