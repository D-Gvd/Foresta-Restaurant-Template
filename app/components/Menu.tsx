'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { restaurant } from '../data/restaurant'

const { categories } = restaurant.menu

export default function Menu() {
  const [active, setActive] = useState<string>(categories[0].id)
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const currentCategory = categories.find((c) => c.id === active)!

  return (
    <section
      id="menu"
      ref={ref}
      className="py-28 md:py-40 bg-forest"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-20"
        >
          <p className="font-sans text-gold text-xs tracking-widest-2 mb-4">What We Serve</p>
          <h2 className="font-display italic display-section text-cream">The Menu</h2>
          <span className="rule-gold" />
          <p className="font-sans text-stone text-sm max-w-sm leading-relaxed">
            Our menu changes with the seasons. Prices listed per portion; a discretionary 
            service charge of 12.5% is added to the bill.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`relative px-5 py-2 text-sm transition-all duration-200 ${
                active === cat.id
                  ? 'text-deep bg-gold'
                  : 'text-cream/60 border border-sage/40 hover:text-cream hover:border-sage'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Items list */}
        <AnimatePresence mode="wait">
          <motion.ul
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="divide-y divide-sage/20"
          >
            {currentCategory.items.map((item) => (
              <li
                key={item.name}
                className="py-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 group"
              >
                <div className="flex-1">
                  <p className="font-display text-xl text-cream group-hover:text-gold transition-colors">
                    {item.name}
                  </p>
                  <p className="font-sans text-stone text-sm mt-1 max-w-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <p className="font-display italic text-gold text-xl sm:ml-8 flex-shrink-0">
                  {item.price}
                </p>
              </li>
            ))}
          </motion.ul>
        </AnimatePresence>

        {/* Allergen note */}
        <p className="font-sans text-stone text-xs mt-12 border-t border-sage/20 pt-6">
          Please inform us of any allergies or dietary requirements. Our team is happy to advise.
        </p>
      </div>
    </section>
  )
}
