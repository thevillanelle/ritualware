import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

const chips = [
  { label: 'Ritualwear', to: '/ritualwear' },
  { label: 'Glow Up', to: '/glowup' },
  { label: 'Ritualwhere?', to: '/ritualwhere' },
  { label: 'Doubles', to: '/doubles' },
  { label: "m'atelier", to: '/matelier' },
]

const suite = [
  {
    question: 'What do I wear?',
    name: 'Ritualwear',
    body: "Your style system — built once, applied every day. A Style Bible that knows your Kibbe type, your color season, your rules. An Oracle that reads all of it and tells you exactly what to wear today, for today's weather.',
    to: '/ritualwear',
    href: 'https://wear.ritualware.app',
    color: '#D4919A',
  },
  {
    question: 'How do I look?',
    name: 'Glow Up',
    body: 'A complete audit across twelve categories of your beauty life. Not a checklist — a scorecard. Section verdicts, quick wins, a week-one plan, a month-one plan, and the non-negotiables that don't move.',
    to: '/glowup',
    href: 'https://glowup.ritualware.app',
    color: '#8FA688',
  },
  {
    question: 'Where do I go?',
    name: 'Ritualwhere?',
    body: 'A city guide built for how you actually live. Neighborhood matching with scored reasons, curated venues by how you want to feel, a dark map of everything across NYC and LA. The city, decoded.',
    to: '/ritualwhere',
    href: 'https://where.ritualware.app',
    color: '#A89BC4',
  },
  {
    question: 'What am I building?',
    name: "m'atelier",
    body: 'Your studio. Projects, goals, skills, circle — tracked the way you actually think about them. Everything you're making, everyone you're making it with, where you're going.',
    to: '/matelier',
    href: 'https://studio.ritualware.app',
    color: '#C8A86B',
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
            className="font-serif italic text-xl text-ink-muted max-w-xl"
            style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            Most systems assume you want to be optimized. Ritualware assumes you want to be known — to yourself, first. Four tools that ask better questions and give you something you can actually use.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4">
            {chips.map(chip => (
              <Link key={chip.to} to={chip.to}
                className="font-mono text-sm text-ink bg-cream-alt border border-ink/15 px-6 py-3 rounded-full hover:border-rose hover:text-rose transition-colors">
                {chip.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* Four questions */}
      <section style={{ padding: '7rem 1.5rem 8rem' }}>
        <div className="max-w-6xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] text-ink-muted" style={{ marginBottom: '4rem' }}>
            four questions. one suite.
          </p>

          <div className="grid md:grid-cols-2" style={{ gap: '1.5rem', marginBottom: '1.5rem' }}>
            {suite.slice(0, 2).map((app, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-cream-alt rounded-3xl" style={{ padding: '3rem', borderLeft: `3px solid ${app.color}` }}>
                <p className="font-serif italic text-lg text-ink-muted" style={{ marginBottom: '0.75rem' }}>{app.question}</p>
                <h2 className="font-display text-3xl text-ink" style={{ marginBottom: '1.25rem' }}>{app.name}</h2>
                <p className="font-sans text-base text-ink-muted leading-relaxed" style={{ marginBottom: '2rem' }}>{app.body}</p>
                <div className="flex gap-4 items-center">
                  <a href={app.href} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-sm px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                    style={{ background: app.color, color: '#FAF7F2' }}>Open →</a>
                  <Link to={app.to} className="font-mono text-xs text-ink-muted hover:text-ink transition-colors">Learn more</Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2" style={{ gap: '1.5rem', marginBottom: '5rem' }}>
            {suite.slice(2).map((app, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-cream-alt rounded-3xl" style={{ padding: '3rem', borderLeft: `3px solid ${app.color}` }}>
                <p className="font-serif italic text-lg text-ink-muted" style={{ marginBottom: '0.75rem' }}>{app.question}</p>
                <h2 className="font-display text-3xl text-ink" style={{ marginBottom: '1.25rem' }}>{app.name}</h2>
                <p className="font-sans text-base text-ink-muted leading-relaxed" style={{ marginBottom: '2rem' }}>{app.body}</p>
                <div className="flex gap-4 items-center">
                  <a href={app.href} target="_blank" rel="noopener noreferrer"
                    className="font-mono text-sm px-5 py-2.5 rounded-full transition-all hover:opacity-90"
                    style={{ background: app.color, color: '#FAF7F2' }}>Open →</a>
                  <Link to={app.to} className="font-mono text-xs text-ink-muted hover:text-ink transition-colors">Learn more</Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* The thread */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="bg-cream-dark rounded-3xl" style={{ padding: '4rem', textAlign: 'center' }}>
            <p className="font-mono text-xs tracking-[0.3em] text-amber" style={{ marginBottom: '1.5rem' }}>the thread</p>
            <p className="font-serif italic leading-relaxed max-w-2xl mx-auto"
              style={{ fontSize: 'clamp(22px,3vw,36px)", color: '#FAF7F2' }}>
              One login. One profile. Every answer you give in one app makes the others sharper.
            </p>
            <div style={{ marginTop: '2.5rem' }}>
              <Link to="/platform"
                className="font-mono text-sm text-amber hover:text-amber/80 transition-colors">
                See how the platform works →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
