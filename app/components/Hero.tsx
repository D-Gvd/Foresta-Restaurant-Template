'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { restaurant } from '../data/restaurant'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = restaurant.images.hero
    img.onload = () => setLoaded(true)
    // Show content even if image takes long
    const t = setTimeout(() => setLoaded(true), 1200)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] flex flex-col overflow-hidden">
      {/* Background image */}
      <div
        className={`absolute inset-0 bg-deep transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `url('${restaurant.images.hero}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      />
      {/* Layered dark gradient: bottom-heavy for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-deep/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative flex-1 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-stone text-xs tracking-widest-2 mb-8"
        >
          Est. {restaurant.established}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-display italic display-hero text-cream"
        >
          {restaurant.name}
        </motion.h1>

        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1, ease: 'easeOut' }}
          className="block w-20 h-px bg-gold my-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-sans text-cream/60 text-base md:text-lg font-light"
        >
          {restaurant.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#menu"
            className="px-8 py-3 bg-gold text-deep text-sm font-medium hover:bg-gold-dim transition-colors"
          >
            View Menu
          </a>
          <a
            href="#reservations"
            className="px-8 py-3 border border-cream/40 text-cream text-sm hover:border-cream hover:bg-cream/5 transition-all"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative flex flex-col items-center pb-8 gap-2"
      >
        <span className="font-sans text-stone text-[10px] tracking-widest-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-stone to-transparent"
        />
      </motion.div>
    </section>
  )
}
