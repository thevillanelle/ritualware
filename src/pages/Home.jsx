import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SUITE as suite } from '../data/apps'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.25, 0, 0, 1] },
})

export default function Home() {
  return (
    <main style={{ background: 'var(--bg)' }}>

      {/* ── HERO ── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', paddingTop: '7rem' }}>
        {/* ambient orbs */}
        <div style={{ position: 'absolute', top: '20%', right: '-5%', width: '520px', height: '520px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(196,113,122,0.18), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '-8%', width: '380px', height: '380px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(168,155,196,0.14), transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 3.5rem', width: '100%' }}>
          <motion.p {...fade(0.2)} style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '2.5rem' }}>
            VILE LLC · The Ritualware Suite
          </motion.p>

          <motion.h1 {...fade(0.35)} style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(54px, 7.5vw, 112px)', lineHeight: 1.02, color: 'var(--ink)', marginBottom: '3rem', maxWidth: '900px' }}>
            Pleasure is a system<br />
            <span style={{ fontStyle: 'italic', color: 'var(--rose)' }}>you architect.</span>
          </motion.h1>

          <motion.div {...fade(0.55)} style={{ width: '48px', height: '1px', background: 'var(--amber)', marginBottom: '3rem' }} />

          <motion.p {...fade(0.65)} style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(20px, 2vw, 26px)', color: 'var(--ink-muted)', maxWidth: '560px', lineHeight: 1.7, marginBottom: '4rem' }}>
            Software for the life you're deliberately building. Not optimization. Ritual.
          </motion.p>

          <motion.div {...fade(0.8)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/apps" style={{ display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', padding: '14px 32px', borderRadius: '100px', background: 'var(--ink)', color: 'var(--bg)', textDecoration: 'none', transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.target.style.opacity = '0.85'} onMouseLeave={e => e.target.style.opacity = '1'}>
              Explore the Suite
            </Link>
            <a href="#suite" style={{ display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', padding: '14px 32px', borderRadius: '100px', border: '1px solid var(--ink)', color: 'var(--ink)', textDecoration: 'none', opacity: 0.5, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.target.style.opacity = '1'} onMouseLeave={e => e.target.style.opacity = '0.5'}>
              See all apps ↓
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── THESIS ── */}
      <section style={{ padding: '8rem 3.5rem', borderTop: '1px solid color-mix(in srgb, var(--ink) 8%, transparent)', borderBottom: '1px solid color-mix(in srgb, var(--ink) 8%, transparent)', background: 'var(--bg-alt)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '2rem' }}>The premise</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(34px, 3.5vw, 52px)', lineHeight: 1.15, color: 'var(--ink)', marginBottom: '2rem' }}>
              Most apps assume you want to be<br /><span style={{ fontStyle: 'italic', color: 'var(--rose)' }}>managed down.</span>
            </h2>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '22px', color: 'var(--ink-muted)', lineHeight: 1.7 }}>
              Ritualware is different. These tools don't track your habits to guilt you. They learn who you are: your style, your city, your ambitions, your taste. And hand that back to you as infrastructure.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              { label: 'Style', text: 'A Style Bible built once, applied every morning. The Oracle tells you exactly what to wear today.' },
              { label: 'Identity', text: 'Your Ritual Profile. Every answer across the suite in one place. One picture of who you are right now.' },
              { label: 'Intelligence', text: 'A live global feed on a 3D globe. The world at a glance, every time you open it.' },
              { label: 'Freedom', text: 'A FIRE planning suite built for women who want out on their own terms.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.2em', color: 'var(--rose)', textTransform: 'uppercase', paddingTop: '4px', flexShrink: 0, width: '72px' }}>{item.label}</span>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: 'var(--ink-muted)', lineHeight: 1.65 }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUITE ── */}
      <section id="suite" style={{ padding: '9rem 3.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '1rem' }}>The Ritualware Suite</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(36px, 4vw, 56px)', color: 'var(--ink)', lineHeight: 1.1 }}>
                Every tool you need<br /><span style={{ fontStyle: 'italic', color: 'var(--rose)' }}>to know yourself.</span>
              </h2>
            </div>
            <Link to="/apps" style={{ fontFamily: 'Courier Prime, monospace', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', textDecoration: 'none', borderBottom: '1px solid currentColor', paddingBottom: '2px', transition: 'color 0.2s', flexShrink: 0 }}>
              View all apps →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: 'color-mix(in srgb, var(--ink) 10%, transparent)' }}>
            {suite.map((app, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link to={app.to} style={{ display: 'block', background: 'var(--bg)', padding: '2.75rem 2.5rem', textDecoration: 'none', transition: 'background 0.2s', height: '100%' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-alt)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.75rem' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: app.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: app.color }}>{app.label}</span>
                  </div>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '26px', color: 'var(--ink)', marginBottom: '0.875rem', lineHeight: 1.2 }}>{app.name}</h3>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '17px', color: 'var(--ink-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>{app.question}</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: 'var(--ink-muted)', lineHeight: 1.7, opacity: 0.75 }}>{app.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SIGN OFF ── */}
      <section style={{ padding: '8rem 3.5rem', background: 'var(--ink)', textAlign: 'center' }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '2.5rem' }}>
          VILE LLC · Est. New York
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(38px, 5vw, 72px)', color: 'var(--bg)', lineHeight: 1.1, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem' }}>
          The life you want<br /><span style={{ fontStyle: 'italic', color: 'var(--rose)' }}>is a design problem.</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '20px', color: 'rgba(255,255,255,0.5)', maxWidth: '480px', margin: '0 auto 3.5rem', lineHeight: 1.7 }}>
          Software for women who are building on purpose.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <Link to="/apps" style={{ display: 'inline-block', fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 500, letterSpacing: '0.08em', padding: '14px 36px', borderRadius: '100px', background: 'var(--rose)', color: '#fff', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.target.style.opacity = '0.85'} onMouseLeave={e => e.target.style.opacity = '1'}>
            Start with the suite
          </Link>
        </motion.div>
      </section>

    </main>
  )
}
