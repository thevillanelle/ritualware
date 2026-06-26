import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SUITE, STANDALONE } from '../data/apps'

const APP_BG = {
  '/ritualwear':  '#3D1A1F',
  '/glowup':      '#1A2D18',
  '/ritualwhere': '#2A1F3D',
  '/matelier':    '#201408',
  '/ritualwealth':'#0F2D1A',
  '/robin':       '#0F1F2D',
  '/atlas':       '#090E1A',
  '/library':     '#0C0A06',
  '/doubles':     '#050505',
}

export default function Home() {
  return (
    <main style={{ background: 'var(--bg-dark)' }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '9rem 2rem 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)', width: '1000px', height: '500px', background: 'radial-gradient(ellipse, rgba(196,113,122,0.25) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '15%', right: '5%', width: '400px', height: '400px', background: 'radial-gradient(ellipse, rgba(176,120,64,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(56px, 9vw, 130px)', lineHeight: 1.0, color: '#FAF7F2', marginBottom: '2.5rem', maxWidth: '960px' }}>
          Apps built for the life<br />
          <span style={{ color: 'var(--rose)' }}>you're designing on purpose.</span>
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link to="/apps"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', padding: '14px 40px', borderRadius: '100px', background: 'var(--rose)', color: '#fff', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            See all apps
          </Link>
          <a href="#suite"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', padding: '14px 32px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.55)', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Explore ↓
          </a>
        </motion.div>
      </section>

      {/* ── MARQUEE ── */}
      <div style={{ background: 'var(--rose)', padding: '1.1rem 0', overflow: 'hidden' }}>
        <div className="marquee-track" style={{ display: 'flex', gap: '2.5rem', whiteSpace: 'nowrap' }}>
          {[...SUITE, ...STANDALONE, ...SUITE, ...STANDALONE].map((app, i) => (
            <span key={i} style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '22px', color: 'rgba(255,255,255,0.9)', flexShrink: 0 }}>
              {app.question} <span style={{ opacity: 0.4, fontStyle: 'normal' }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SUITE PANELS ── */}
      <section id="suite">
        {SUITE.map((app, i) => {
          const bg = APP_BG[app.to] || '#1A120A'
          const flip = i % 2 !== 0
          return (
            <motion.div key={app.to}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '-80px' }}
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '540px' }}
              className="suite-panel">
              {/* Content */}
              <div style={{ order: flip ? 2 : 1, background: bg, padding: 'clamp(3rem, 6vw, 6rem) clamp(2.5rem, 5vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: app.color, opacity: 0.8, marginBottom: '2rem' }}>
                  {app.label}
                </p>
                <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(32px, 4vw, 52px)', color: '#FAF7F2', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  {app.question}
                </p>
                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 2.5vw, 34px)', color: app.color, marginBottom: '1.5rem', lineHeight: 1.15 }}>
                  {app.name}
                </h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: '400px', marginBottom: '2.5rem' }}>
                  {app.desc}
                </p>
                <Link to={app.to}
                  style={{ display: 'inline-block', alignSelf: 'flex-start', fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: app.color, textDecoration: 'none', borderBottom: `1px solid ${app.color}50`, paddingBottom: '3px', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  Learn more →
                </Link>
              </div>

              {/* Color accent panel */}
              <div style={{ order: flip ? 1 : 2, background: `linear-gradient(135deg, ${bg} 0%, color-mix(in srgb, ${app.color} 25%, ${bg}) 100%)`, position: 'relative', overflow: 'hidden', minHeight: '300px' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '240px', height: '240px', borderRadius: '50%', background: app.color, opacity: 0.12, filter: 'blur(80px)' }} />
                </div>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: 'clamp(60px, 10vw, 120px)', color: app.color, opacity: 0.08, lineHeight: 1, textAlign: 'center', userSelect: 'none' }}>
                    {app.name}
                  </p>
                </div>
                <div style={{ position: 'absolute', bottom: '2rem', right: '2rem' }}>
                  <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.2em', color: app.color, opacity: 0.5 }}>{app.domain}</p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </section>

      {/* ── STANDALONE ── */}
      <section style={{ background: '#100C08', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '6rem 0 5rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 3rem' }}>
          <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1rem' }}>
            Also from VILE LLC
          </p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(26px, 3.5vw, 42px)', color: 'rgba(255,255,255,0.7)', marginBottom: '4rem', lineHeight: 1.2 }}>
            Standalone tools. Independent worlds.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.05)' }}>
            {STANDALONE.map((app) => (
              <motion.div key={app.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Link to={app.to}
                  style={{ display: 'block', padding: '3rem 2.5rem', background: APP_BG[app.to] || '#0A0A0A', textDecoration: 'none', height: '100%', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                  <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: app.color, marginBottom: '2rem' }} />
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '20px', color: 'rgba(255,255,255,0.45)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {app.question}
                  </p>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', color: '#FAF7F2', marginBottom: '1.25rem', lineHeight: 1.1 }}>
                    {app.name}
                  </h3>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.3)', lineHeight: 1.75 }}>
                    {app.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGN OFF ── */}
      <section style={{ background: 'var(--rose)', padding: '9rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '50%', transform: 'translateX(-50%)', width: '800px', height: '400px', background: 'radial-gradient(ellipse, rgba(255,255,255,0.12) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(44px, 7vw, 96px)', color: '#FAF7F2', lineHeight: 1.0, marginBottom: '1.5rem' }}>
          Your life is already<br />a production.
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: 'rgba(255,255,255,0.6)', marginBottom: '3.5rem', letterSpacing: '0.05em' }}>
          Treat it like one.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.45 }}>
          <Link to="/apps"
            style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', padding: '15px 44px', borderRadius: '100px', background: '#FAF7F2', color: 'var(--rose)', textDecoration: 'none', display: 'inline-block', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Start here
          </Link>
        </motion.div>
      </section>

    </main>
  )
}
