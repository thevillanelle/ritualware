import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('ritual-theme') || 'light')

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('dark', 'elle')
    if (theme === 'dark') root.classList.add('dark')
    if (theme === 'elle') root.classList.add('elle')
    localStorage.setItem('ritual-theme', theme)
  }, [theme])

  return { theme, dark: theme === 'dark', setTheme }
}

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <select
      value={theme}
      onChange={e => setTheme(e.target.value)}
      aria-label="Select theme"
      style={{
        background: 'transparent',
        border: 'none',
        color: 'var(--ink-muted)',
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '14px',
        letterSpacing: '0.01em',
        cursor: 'pointer',
        outline: 'none',
        appearance: 'none',
        WebkitAppearance: 'none',
        padding: 0,
      }}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="elle">Elle</option>
    </select>
  )
}
