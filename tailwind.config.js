/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Redefined color palette
        crimson: {
          400: '#f87171', // Soft Red (text)
          500: '#ef4444', // VIBRANT RED (Accents, Buttons)
          600: '#b91c1c', // Deep Red (hover)
        },
        slate: {
          700: '#334155', // Grey (borders, cards)
          800: '#1e293b', // Deep Grey (sections)
          950: '#020617', // Black/Deep Blue (base bg)
        },
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};