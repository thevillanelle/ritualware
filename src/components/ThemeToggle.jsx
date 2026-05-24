import { useEffect, useState } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(() => localStorage.getItem('ritual-theme') === 'dark')
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('ritual-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('ritual-theme', 'light')
    }
  }, [dark])
  return { dark, toggle: () => setDark(d => !d) }
}

export default function ThemeToggle({ dark, toggle }) {
  return (
    <button onClick={toggle} aria-label="Toggle theme"
      className="font-mono text-xs text-ink-muted hover:text-ink transition-colors tracking-widest">
      {dark ? '◑ LIGHT' : '◐ DARK'}
    </button>
  )
}
