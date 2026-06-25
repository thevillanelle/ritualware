import { Link } from 'react-router-dom'
import { SUITE } from '../data/apps'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-alt)', borderTop: '1px solid color-mix(in srgb, var(--ink) 8%, transparent)', padding: '5rem 3.5rem 3rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>

          {/* Brand */}
          <div>
            <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '24px', color: 'var(--ink)', marginBottom: '1rem' }}>Ritualware</p>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', lineHeight: 1.7, maxWidth: '260px' }}>
              Software for the life you're deliberately building. A VILE LLC product.
            </p>
          </div>

          {/* Suite links */}
          <div>
            <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1.5rem', opacity: 0.6 }}>The Suite</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem 1rem' }}>
              {SUITE.map(app => (
                <Link key={app.to} to={app.to} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'var(--ink-muted)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--ink)'} onMouseLeave={e => e.target.style.color = 'var(--ink-muted)'}>
                  {app.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1.5rem', opacity: 0.6 }}>Company</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[{ to: '/about', label: 'About' }, { to: '/platform', label: 'Platform' }, { to: '/status', label: 'System Status' }].map(l => (
                <Link key={l.to} to={l.to} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'var(--ink-muted)', textDecoration: 'none', transition: 'color 0.15s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--ink)'} onMouseLeave={e => e.target.style.color = 'var(--ink-muted)'}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid color-mix(in srgb, var(--ink) 8%, transparent)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', color: 'var(--ink-muted)', opacity: 0.5, letterSpacing: '0.05em' }}>
            © 2025 VILE LLC · New York
          </p>
          <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', color: 'var(--ink-muted)', opacity: 0.4, letterSpacing: '0.05em', fontStyle: 'italic' }}>
            Pleasure is a system you architect.
          </p>
        </div>
      </div>
    </footer>
  )
}
