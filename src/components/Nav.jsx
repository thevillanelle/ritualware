import { useState, useRef, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle, { useTheme } from './ThemeToggle'
import { SUITE } from '../data/apps'

export default function Nav() {
  const [suiteOpen, setSuiteOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSuiteOpen, setMobileSuiteOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const suiteRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (suiteRef.current && !suiteRef.current.contains(e.target)) setSuiteOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const linkStyle = (isActive) => ({
    fontFamily: 'DM Sans, sans-serif',
    fontSize: '14px',
    color: isActive ? 'var(--rose)' : 'var(--ink-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s',
    letterSpacing: '0.01em',
  })

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid color-mix(in srgb, var(--ink) 8%, transparent)', background: 'color-mix(in srgb, var(--bg) 92%, transparent)', backdropFilter: 'blur(16px)' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2.5rem', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <Link to="/" style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '22px', color: 'var(--ink)', textDecoration: 'none', letterSpacing: '-0.01em' }}>
          Ritualware
        </Link>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="hidden md:flex">

          {/* Suite dropdown */}
          <div ref={suiteRef} style={{ position: 'relative' }}>
            <button onClick={() => setSuiteOpen(o => !o)}
              style={{ ...linkStyle(suiteOpen), background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', padding: 0 }}>
              The Suite
              <svg width="10" height="6" viewBox="0 0 10 6" style={{ transition: 'transform 0.2s', transform: suiteOpen ? 'rotate(180deg)' : 'none', opacity: 0.5 }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>

            <AnimatePresence>
              {suiteOpen && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  style={{ position: 'absolute', top: 'calc(100% + 16px)', left: '50%', transform: 'translateX(-50%)', background: 'var(--bg)', border: '1px solid color-mix(in srgb, var(--ink) 10%, transparent)', borderRadius: '16px', padding: '1rem', width: '640px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', boxShadow: '0 24px 64px rgba(0,0,0,0.12)' }}>
                  {SUITE.map((app) => (
                    <Link key={app.to} to={app.to} onClick={() => setSuiteOpen(false)}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '14px 16px', borderRadius: '10px', textDecoration: 'none', transition: 'background 0.15s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-alt)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: app.color, flexShrink: 0, marginTop: '5px' }} />
                      <div>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, color: 'var(--ink)', marginBottom: '2px' }}>{app.name}</p>
                        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', color: 'var(--ink-muted)', lineHeight: 1.4 }}>{app.question}</p>
                      </div>
                    </Link>
                  ))}
                  <div style={{ gridColumn: '1 / -1', borderTop: '1px solid color-mix(in srgb, var(--ink) 8%, transparent)', marginTop: '6px', paddingTop: '10px' }}>
                    <Link to="/apps" onClick={() => setSuiteOpen(false)}
                      style={{ display: 'block', textAlign: 'center', fontFamily: 'Courier Prime, monospace', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--rose)', textDecoration: 'none', padding: '8px' }}>
                      View all apps →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/about" style={({ isActive }) => linkStyle(isActive)}
            onMouseEnter={e => { if (e.target.style.color !== 'var(--rose)') e.target.style.color = 'var(--ink)' }}
            onMouseLeave={e => { if (e.target.style.color !== 'var(--rose)') e.target.style.color = 'var(--ink-muted)' }}>
            About
          </NavLink>

          <NavLink to="/status" style={({ isActive }) => linkStyle(isActive)}
            onMouseEnter={e => { if (e.target.style.color !== 'var(--rose)') e.target.style.color = 'var(--ink)' }}
            onMouseLeave={e => { if (e.target.style.color !== 'var(--rose)') e.target.style.color = 'var(--ink-muted)' }}>
            Status
          </NavLink>

          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden" onClick={() => setMobileOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}>
          <div style={{ width: '20px', height: '1px', background: 'var(--ink)', marginBottom: '6px', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(45deg) translateY(3.5px)' : 'none' }} />
          <div style={{ width: '20px', height: '1px', background: 'var(--ink)', marginBottom: '6px', transition: 'all 0.2s', opacity: mobileOpen ? 0 : 1 }} />
          <div style={{ width: '20px', height: '1px', background: 'var(--ink)', transition: 'all 0.2s', transform: mobileOpen ? 'rotate(-45deg) translateY(-3.5px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
            style={{ overflow: 'hidden', borderTop: '1px solid color-mix(in srgb, var(--ink) 8%, transparent)', background: 'var(--bg)' }}>

            {/* Suite toggle */}
            <button onClick={() => setMobileSuiteOpen(o => !o)}
              style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 1.5rem', background: 'none', border: 'none', borderBottom: '1px solid color-mix(in srgb, var(--ink) 6%, transparent)', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: 'var(--ink-muted)' }}>
              The Suite
              <svg width="10" height="6" viewBox="0 0 10 6" style={{ transition: 'transform 0.2s', transform: mobileSuiteOpen ? 'rotate(180deg)' : 'none', opacity: 0.4 }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
            </button>

            <AnimatePresence>
              {mobileSuiteOpen && (
                <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} style={{ overflow: 'hidden' }}>
                  {SUITE.map(app => (
                    <Link key={app.to} to={app.to} onClick={() => { setMobileOpen(false); setMobileSuiteOpen(false) }}
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '0.875rem 2rem', borderBottom: '1px solid color-mix(in srgb, var(--ink) 5%, transparent)', textDecoration: 'none' }}>
                      <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: app.color, flexShrink: 0 }} />
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'var(--ink-muted)' }}>{app.name}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {[{ to: '/about', label: 'About' }, { to: '/status', label: 'Status' }].map(l => (
              <NavLink key={l.to} to={l.to} onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '1rem 1.5rem', fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: 'var(--ink-muted)', textDecoration: 'none', borderBottom: '1px solid color-mix(in srgb, var(--ink) 6%, transparent)' }}>
                {l.label}
              </NavLink>
            ))}

            <div style={{ padding: '1rem 1.5rem' }}>
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
