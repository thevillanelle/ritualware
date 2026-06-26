import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ALL_APPS as allApps } from '../data/apps'

export default function About() {
  return (
    <main style={{ background: 'var(--bg-dark)', minHeight: '100vh', color: '#FAF7F2' }}>

      {/* Hero */}
      <div style={{ padding: '10rem clamp(2rem, 6vw, 6rem) 6rem', maxWidth: '900px' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ fontFamily: 'Courier Prime, monospace', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', marginBottom: '2.5rem' }}>
          VILE LLC · Ritualware
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(44px, 7vw, 96px)', lineHeight: 1.0, color: '#FAF7F2', marginBottom: '3rem' }}>
          Software for the life<br />
          <span style={{ color: 'var(--rose)' }}>you're building on purpose.</span>
        </motion.h1>
      </div>

      {/* The premise */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '6rem clamp(2rem, 6vw, 6rem)', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '760px' }}>
          <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '2.5rem' }}>
            The premise
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {[
              'Most apps assume you want to be managed down. Reminded, guilted, nudged toward someone else\'s version of a good life.',
              'Ritualware is built on a different assumption: you already know who you are and what you want. You just need the tools to act on it.',
              'What do I wear today? Where should I actually live? How do I look, really? When do I get to stop working? These are questions worth answering seriously.',
            ].map((text, i) => (
              <motion.p key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7 }}
                style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(20px, 2.5vw, 28px)', color: i === 0 ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* The suite */}
      <div style={{ padding: '6rem clamp(2rem, 6vw, 6rem)' }}>
        <div style={{ maxWidth: '760px', marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '1.5rem' }}>
            The Ritualware Suite
          </p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 24px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
            Six apps sharing one login and one Ritual Profile. Style, beauty, city, studio, wealth, identity. Every answer you give in one sharpens the others.
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', marginBottom: '4rem' }}>
          <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)', padding: '2rem 0 0', marginBottom: '2rem' }}>
            Also from VILE LLC — standalone
          </p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(18px, 2vw, 24px)', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: '640px' }}>
            ATLAS, Sal's Library, and EQX Doubles run independently. No shared backend. Same standard of craft.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {allApps.map((app, i) => (
            <motion.a key={i} href={app.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 1.75rem', textDecoration: 'none', background: 'rgba(255,255,255,0.03)', border: `1px solid ${app.color}18`, borderRadius: '12px', transition: 'background 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = `${app.color}12` }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: app.color, flexShrink: 0 }} />
                <div>
                  <p style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: '14px', color: app.color, marginBottom: '2px', opacity: 0.8 }}>{app.question}</p>
                  <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', color: '#FAF7F2' }}>{app.name}</p>
                </div>
              </div>
              <span style={{ fontFamily: 'Courier Prime, monospace', fontSize: '14px', color: app.color, opacity: 0.6, transition: 'opacity 0.2s' }}>→</span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* What we believe */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '6rem clamp(2rem, 6vw, 6rem)', background: 'rgba(255,255,255,0.02)' }}>
        <div style={{ maxWidth: '760px' }}>
          <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', marginBottom: '3rem' }}>
            What we believe
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {[
              { label: 'Intentional', body: 'Nothing in Ritualware is there by default. Every question, every category, every recommendation was put there on purpose.' },
              { label: 'Sensory', body: 'Style, beauty, place, creation. These are physical, felt experiences. The tools treat them that way instead of reducing them to a score.' },
              { label: 'Yours', body: 'The apps learn your preferences and return them to you as infrastructure. They work for you, not toward a generic standard of self-improvement.' },
            ].map((item, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem', alignItems: 'start' }}>
                <p style={{ fontFamily: 'Courier Prime, monospace', fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--rose)', paddingTop: '4px' }}>
                  {item.label}
                </p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Close */}
      <div style={{ padding: '7rem clamp(2rem, 6vw, 6rem)', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic', fontSize: 'clamp(28px, 4vw, 52px)', color: '#FAF7F2', lineHeight: 1.25, maxWidth: '680px' }}>
          Pleasure is a system.<br />
          <span style={{ color: 'var(--rose)' }}>We built the software.</span>
        </motion.p>
      </div>

    </main>
  )
}
