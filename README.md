# Foresta — Restaurant Website Template

A modern, animated restaurant website template built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Design

- **Palette** — Deep forest green base, warm gold accents, cream text
- **Typography** — Cormorant Garamond (display/headlines) + DM Sans (body)
- **Feel** — Editorial, organic, premium without being stuffy

## Sections

| Section | Description |
|---------|-------------|
| Navbar | Transparent → opaque on scroll, mobile drawer |
| Hero | Full-screen with parallax background, orchestrated fade-in |
| About | Split layout with pull quote, stats, and image |
| Menu | Tabbed categories with animated item transitions |
| Gallery | Horizontal scroll-snap photo strip |
| Reservations | Form with success state |
| Footer | Contact, hours, social links |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customisation

All restaurant data — name, tagline, menu items, hours, photos, contact — lives in one file:

```
app/data/restaurant.ts
```

Edit that file and the entire site updates automatically.

### Swapping images

Replace the Unsplash URLs in `restaurant.images` with your own hosted images. No other changes needed.

### Colours & fonts

Defined in `tailwind.config.ts`. The full palette:

| Token | Hex | Usage |
|-------|-----|-------|
| `deep` | `#080F0A` | Page background |
| `forest` | `#152B1D` | Section backgrounds |
| `canopy` | `#1F3D29` | Card backgrounds |
| `sage` | `#3D6B4E` | Borders, dividers |
| `gold` | `#C4A249` | Accents, prices, CTAs |
| `cream` | `#F3EEE5` | Primary text |
| `stone` | `#9A8D7E` | Secondary text |

### Hooking up reservations

In `app/components/Reservations.tsx`, replace the `await new Promise(...)` stub in `handleSubmit` with your API call (e.g. OpenTable, Resy, or a custom endpoint).

## Stack

- [Next.js 14](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev) — icons
- [Google Fonts](https://fonts.google.com) — Cormorant Garamond + DM Sans
