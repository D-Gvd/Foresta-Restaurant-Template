import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { restaurant } from '../data/restaurant'

export default function Footer() {
  return (
    <footer className="bg-deep border-t border-forest">
      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-3 gap-12 md:gap-8">
        {/* Brand */}
        <div>
          <p className="font-display italic text-4xl text-cream mb-3">{restaurant.name}</p>
          <p className="font-sans text-stone text-sm">{restaurant.tagline}</p>
          <span className="rule-gold" />
          <div className="flex gap-4 mt-4">
            <a
              href={restaurant.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-stone hover:text-gold transition-colors"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
            <a
              href={restaurant.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-stone hover:text-gold transition-colors"
            >
              <Facebook size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <p className="font-sans text-xs text-gold tracking-widest-2 mb-5">Find Us</p>
          <ul className="space-y-3 font-sans text-stone text-sm">
            <li className="flex gap-3 items-start">
              <MapPin size={14} strokeWidth={1.5} className="mt-0.5 flex-shrink-0 text-stone/50" />
              <span>
                {restaurant.contact.address}<br />{restaurant.contact.city}
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={14} strokeWidth={1.5} className="flex-shrink-0 text-stone/50" />
              <a href={`tel:${restaurant.contact.phone}`} className="hover:text-cream transition-colors">
                {restaurant.contact.phone}
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={14} strokeWidth={1.5} className="flex-shrink-0 text-stone/50" />
              <a href={`mailto:${restaurant.contact.email}`} className="hover:text-cream transition-colors">
                {restaurant.contact.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <p className="font-sans text-xs text-gold tracking-widest-2 mb-5">Hours</p>
          <ul className="space-y-2">
            {restaurant.hours.map((h) => (
              <li key={h.days} className="flex justify-between gap-6 font-sans text-sm">
                <span className="text-stone">{h.days}</span>
                <span className={h.time === 'Closed' ? 'text-stone/40' : 'text-cream/70'}>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-forest px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="font-sans text-stone/40 text-xs">
          © {new Date().getFullYear()} {restaurant.name}. All rights reserved.
        </p>
        <p className="font-sans text-stone/30 text-xs">
          Template by{' '}
          <a href="#" className="hover:text-stone/60 transition-colors">Foresta Studio</a>
        </p>
      </div>
    </footer>
  )
}
