'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { restaurant } from '../data/restaurant'

const captions = [
  'Wild mushroom & truffle',
  'Dry-aged duck, blackberry jus',
  'Heritage seasonal plate',
  'Seared halibut, samphire',
  'House cocktail menu',
  'The dining room at dusk',
]

export default function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="gallery" ref={ref} className="py-28 md:py-40 overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 md:px-10 mb-12"
      >
        <p className="font-sans text-gold text-xs tracking-widest-2 mb-4">A Glimpse Inside</p>
        <h2 className="font-display italic display-section text-cream">Gallery</h2>
        <span className="rule-gold" />
      </motion.div>

      {/* Horizontal scroll strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="gallery-track pl-6 md:pl-10 pr-6"
      >
        {restaurant.images.gallery.map((src, i) => (
          <div
            key={src}
            className="gallery-item group relative overflow-hidden"
            style={{
              width: 'clamp(260px, 30vw, 380px)',
              aspectRatio: i % 3 === 1 ? '3/4' : '4/5',
            }}
          >
            <img
              src={src}
              alt={captions[i]}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Caption overlay on hover */}
            <div className="absolute inset-0 bg-deep/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <p className="font-display italic text-cream text-lg">{captions[i]}</p>
            </div>
          </div>
        ))}
      </motion.div>

      <p className="font-sans text-stone/50 text-xs text-right pr-6 md:pr-10 mt-4">
        Swipe to explore →
      </p>
    </section>
  )
}
