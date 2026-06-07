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
        border: '1px solid var(--ink-muted)',
        borderRadius: '20px',
        color: 'var(--ink)',
        fontFamily: 'Courier Prime, Courier, monospace',
        fontSize: '11px',
        letterSpacing: '0.1em',
        padding: '4px 10px',
        cursor: 'pointer',
        outline: 'none',
        appearance: 'none',
        WebkitAppearance: 'none',
      }}
    >
      <option value="light">☀️ Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="elle">💗 Elle</option>
    </select>
  )
}
