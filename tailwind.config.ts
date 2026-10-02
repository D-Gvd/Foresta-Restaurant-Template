import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        deep:       '#080F0A',
        forest:     '#152B1D',
        canopy:     '#1F3D29',
        sage:       '#3D6B4E',
        gold:       '#C4A249',
        'gold-dim': '#A0883C',
        cream:      '#F3EEE5',
        parchment:  '#E5DDD0',
        stone:      '#9A8D7E',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
      },
    },
  },
  plugins: [],
}

export default config
