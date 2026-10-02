'use client'

import { useEffect, useState } from 'react'
import { restaurant } from '../data/restaurant'

const navLinks = [
  { label: 'Menu',         href: '#menu'         },
  { label: 'About',        href: '#about'         },
  { label: 'Gallery',      href: '#gallery'       },
  { label: 'Reservations', href: '#reservations'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep/95 backdrop-blur-md border-b border-forest'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-display italic text-2xl md:text-3xl text-cream tracking-tight hover:text-gold transition-colors"
        >
          {restaurant.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/70 hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservations"
            className="ml-4 px-5 py-2 border border-gold text-gold text-sm hover:bg-gold hover:text-deep transition-all"
          >
            Book a Table
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-deep/98 border-b border-forest ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-display italic text-2xl text-cream/80 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-max px-6 py-2.5 border border-gold text-gold text-sm hover:bg-gold hover:text-deep transition-all"
          >
            Book a Table
          </a>
        </div>
      </div>
    </header>
  )
}
