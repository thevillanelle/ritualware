import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

const suite = [
  {
    to: '/ritualwear',
    label: 'ritualwear',
    name: 'Ritualwear',
    desc: 'Your style system. A Style Bible built once, applied every day. The Oracle reads your rules and tells you exactly what to wear today.',
    color: '#D4919A',
    bg: 'rgba(212,145,154,0.08)',
    border: 'rgba(212,145,154,0.2)',
  },
  {
    to: '/glowup',
    label: 'glow up',
    name: 'Glow Up',
    desc: 'A complete audit across twelve categories of your beauty life. Not a checklist. A scorecard with a plan you can use tomorrow morning.',
    color: '#8FA688',
    bg: 'rgba(143,166,136,0.08)',
    border: 'rgba(143,166,136,0.2)',
  },
  {
    to: '/ritualwhere',
    label: 'ritualwhere?',
    name: 'Ritualwhere?',
    desc: 'A city guide built for how you actually live. Neighborhood matching with scored reasons. Curated venues by how you want to feel. NYC and LA.',
    color: '#A89BC4',
    bg: 'rgba(168,155,196,0.08)',
    border: 'rgba(168,155,196,0.2)',
  },
  {
    to: '/matelier',
    label: "m'atelier",
    name: "m'atelier",
    desc: 'Your personal studio. Projects, goals, skills, circle. The part of your life that is about building, tracked in one place.',
    color: '#C8A86B',
    bg: 'rgba(200,168,107,0.08)',
    border: 'rgba(200,168,107,0.2)',
  },
  {
    to: '/doubles',
    label: 'doubles',
    name: 'EQX Doubles',
    desc: 'Two classes that actually work together. Matched by type, timed for real travel, across all 36 NYC Equinox locations. For Equinox members.',
    color: '#c8f23a',
    bg: 'rgba(200,242,58,0.05)',
    border: 'rgba(200,242,58,0.2)',
    dark: true,
  },
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex items-center overflow-hidden"
        style={{ minHeight: '90vh', paddingTop: '10rem', paddingBottom: '8rem' }}>
        <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4919A, #A89BC4)' }} />
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display leading-[1.05] text-ink"
            style={{ fontSize: 'clamp(52px,7vw,104px)', marginBottom: '3rem' }}>
            You don't need<br />
            <span className="italic text-rose">another routine.</span><br />
            You need a ritual.
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.4 }}
            className="h-px w-16 origin-left" style={{ background: 'var(--amber)', marginBottom: '3.5rem' }}/>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
            className="font-serif italic text-xl text-ink-muted max-w-xl" style={{ lineHeight: 1.7 }}>
            Most systems assume you want to be optimized. Ritualware assumes you want to be known.
          </motion.p>
        </div>
      </section>

      <Marquee />

      {/* Suite tiles */}
      <section style={{ padding: '7rem 1.5rem 8rem' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '1.25rem' }}>
            {suite.map((app, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                <Link to={app.to} className="block rounded-3xl h-full lift group"
                  style={{
                    padding: '2.5rem',
                    background: app.dark ? '#050505' : app.bg,
                    border: `1px solid ${app.border}`,
                    minHeight: '220px',
                  }}>
                  <p className="font-mono text-xs tracking-[0.2em]" style={{ color: app.color, marginBottom: '1rem' }}>{app.label}</p>
                  <h3 className="font-display text-2xl" style={{ color: app.dark ? '#FAF7F2' : 'var(--ink)', marginBottom: '0.875rem' }}>{app.name}</h3>
                  <p className="font-sans text-sm leading-relaxed" style={{ color: app.dark ? '#888' : 'var(--ink-muted)' }}>{app.desc}</p>
                  <p className="font-mono text-xs mt-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: app.color }}>
                    View {app.name} →
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
