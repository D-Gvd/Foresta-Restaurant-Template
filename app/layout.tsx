import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { restaurant } from './data/restaurant'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${restaurant.name} — ${restaurant.tagline}`,
  description: restaurant.description,
  openGraph: {
    title: restaurant.name,
    description: restaurant.description,
    images: [{ url: restaurant.images.hero }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-deep text-cream antialiased font-sans">
        {children}
      </body>
    </html>
  )
}
