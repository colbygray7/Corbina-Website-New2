/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        sand: '#F8F5EF',
        'sand-dark': '#EDE8DF',
        ocean: '#1A3A4A',
        'ocean-light': '#254D63',
        gold: '#C4A882',
        'gold-dark': '#A88B62',
        teal: '#3B7A7A',
        'teal-light': '#4E9B9B',
        body: '#2C2C2C',
        muted: '#6B7280',
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
