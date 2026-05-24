/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: '#FAF7F2', alt: '#F0EBE3', dark: '#1C1410' },
        ink: { DEFAULT: '#2C2016', muted: '#7A6B5A' },
        rose: { DEFAULT: '#D4919A', light: '#E8B4B8' },
        amber: { DEFAULT: '#C4956A', light: '#D4AA85' },
        sage: { DEFAULT: '#8FA688', light: '#A8BCAB' },
        lavender: { DEFAULT: '#A89BC4', light: '#C0B5D8' },
        gold: { DEFAULT: '#C8A86B' },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"Courier Prime"', 'Courier', 'monospace'],
      },
    },
  },
  plugins: [],
}
