import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SUITE, STANDALONE } from '../data/apps'

const APP_BG = {
  '/ritualwear':   '#3D1A1F',
  '/glowup':       '#1A2D18',
  '/ritualwhere':  '#2A1F3D',
  '/matelier':     '#201408',
  '/ritualwealth': '#0F2D1A',
  '/robin':        '#0F1F2D',
  '/atlas':        '#090E1A',
  '/library':      '#0C0A06',
  '/doubles':      '#050505',
}

function AppRow({ app, index }) {
  const bg = APP_BG[app.to] || '#1A120A'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '2rem', padding: '3.5rem 0', background: bg }}>
        <div style={{ paddingLeft: 'clamp(2rem, 5vw, 5rem)' }}>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(28px, 4vw, 52px)', color: '#FAF7F2', lineHeight: 1.1, marginBottom: '1rem' }}>
            {app.question}
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(18px, 2vw, 26px)', color: app.color, lineHeight: 1 }}>
              {app.name}
            </h2>
            <span style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.2em', color: app.color, opacity: 0.5 }}>
              {app.domain}
            </span>
          </div>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.75, marginTop: '1rem', maxWidth: '520px' }}>
            {app.desc}
          </p>
        </div>
        <div style={{ paddingRight: 'clamp(2rem, 5vw, 5rem)', display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end', flexShrink: 0 }}>
          <a href={app.href} target="_blank" rel="noopener noreferrer"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '12px 28px', borderRadius: '100px', background: app.color, color: '#FAF7F2', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.82'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Open →
          </a>
          <Link to={app.to}
            style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', textAlign: 'center', transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = app.color}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}>
            learn more
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function Apps() {
  return (
    <main style={{ background: 'var(--bg-dark)', minHeight: '100vh' }}>

      {/* Header */}
      <div style={{ padding: '10rem clamp(2rem, 5vw, 5rem) 5rem' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '2rem' }}>
          VILE LLC · All apps
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(52px, 8vw, 110px)', lineHeight: 1.0, color: '#FAF7F2', maxWidth: '800px' }}>
          Every answer.<br /><span style={{ color: 'var(--rose)' }}>One place.</span>
        </motion.h1>
      </div>

      {/* Suite */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ padding: '2.5rem clamp(2rem, 5vw, 5rem) 1.5rem', background: 'rgba(255,255,255,0.02)' }}>
          <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
            The Ritualware Suite — shared backend · one login · one Ritual Profile
          </p>
        </div>
        {SUITE.map((app, i) => <AppRow key={app.to} app={app} index={i} />)}
      </div>

      {/* Standalone */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '1px' }}>
        <div style={{ padding: '2.5rem clamp(2rem, 5vw, 5rem) 1.5rem', background: 'rgba(255,255,255,0.02)' }}>
          <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
            Also from VILE LLC — standalone · independent
          </p>
        </div>
        {STANDALONE.map((app, i) => <AppRow key={app.to} app={app} index={i} />)}
      </div>

      {/* Footer note */}
      <div style={{ padding: '5rem clamp(2rem, 5vw, 5rem)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '22px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.6 }}>
          More coming. VILE LLC ships on its own schedule.
        </p>
      </div>

    </main>
  )
}
