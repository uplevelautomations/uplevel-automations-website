/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Site-wide "clay" theme (2026-11-20). slate and blue are remapped to
      // warm neutrals and terracotta so every page matches the homepage
      // (src/home/home.css) without touching each page's classes.
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['DM Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        background: '#F7F2E9',
        slate: {
          50: '#faf6ef',
          100: '#f3ede3',
          200: '#e6dccd',
          300: '#d3c6b3',
          400: '#a99c8a',
          500: '#7d7264',
          600: '#615749',
          700: '#4a4237',
          800: '#322c24',
          900: '#221d17',
          950: '#15120e',
        },
        blue: {
          50: '#fbf1ec',
          100: '#f6e0d5',
          200: '#edc2ad',
          300: '#e09c7f',
          400: '#d37552',
          500: '#c95f3a',
          600: '#c4532f',
          700: '#a3431f',
          800: '#84371b',
          900: '#6b2e19',
          950: '#3a160b',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
