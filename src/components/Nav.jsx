import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle, { useTheme } from './ThemeToggle'

const links = [
  { to: '/platform', label: 'Platform' },
  { to: '/ritualwear', label: 'Ritualwear' },
  { to: '/glowup', label: 'Glow Up' },
  { to: '/ritualwhere', label: 'Ritualwhere?' },
  { to: '/doubles', label: 'Doubles' },
  { to: '/matelier', label: "m'atelier" },
  { to: '/about', label: 'About' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-ink/10"
      style={{ background: 'color-mix(in srgb, var(--bg) 92%, transparent)', backdropFilter: 'blur(12px)' }}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display italic text-2xl text-ink">Ritualware</Link>
        <div className="hidden md:flex gap-6 items-center">
          {links.map(l => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) =>
                `font-sans text-sm transition-colors pb-0.5 border-b ${isActive ? 'text-rose border-rose' : 'text-ink-muted border-transparent hover:text-ink'}`}>
              {l.label}
            </NavLink>
          ))}
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <div className={`w-5 h-px bg-ink mb-1.5 transition-all ${open ? 'rotate-45 translate-y-1.5' : ''}`}/>
          <div className={`w-5 h-px bg-ink mb-1.5 transition-all ${open ? 'opacity-0' : ''}`}/>
          <div className={`w-5 h-px bg-ink transition-all ${open ? '-rotate-45 -translate-y-1.5' : ''}`}/>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
            className="md:hidden overflow-hidden border-t border-ink/10" style={{ background: 'var(--bg)' }}>
            {links.map(l => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="block px-6 py-4 font-sans text-sm text-ink-muted hover:text-rose border-b border-ink/10">
                {l.label}
              </NavLink>
            ))}
            <div className="px-6 py-4">
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
