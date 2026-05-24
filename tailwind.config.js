/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: 'var(--bg)', alt: 'var(--bg-alt)', dark: 'var(--bg-dark)' },
        ink: { DEFAULT: 'var(--ink)', muted: 'var(--ink-muted)' },
        rose: { DEFAULT: 'var(--rose)' },
        amber: { DEFAULT: 'var(--amber)' },
        sage: { DEFAULT: 'var(--sage)' },
        lavender: { DEFAULT: 'var(--lavender)' },
        gold: { DEFAULT: 'var(--gold)' },
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
