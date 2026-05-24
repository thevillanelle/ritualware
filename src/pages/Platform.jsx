import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const apps = [
  {
    to: '/ritualwear',
    question: 'What do I wear?',
    name: 'Ritualwear',
    desc: 'Answer 32 questions about your style once. The Oracle uses your profile — your Kibbe type, your color season, your preferences — alongside today\'s weather to generate a complete look. From silhouette to fragrance.',
    accent: '#D4919A',
    href: 'https://vile-style-oracle.vercel.app',
  },
  {
    to: '/glowup',
    question: 'How do I look?',
    name: 'Glow Up',
    desc: '42 questions across 12 categories. A real audit — not a quiz — built on Elle Porcher\'s actual beauty hierarchy. You get a scorecard, a week-one plan, and the non-negotiables that don\'t move.',
    accent: '#8FA688',
    href: 'https://glowup.vercel.app',
  },
  {
    to: '/ritualwhere',
    question: 'Where do I go?',
    name: 'Ritualwhere?',
    desc: '14 questions. Your neighborhood, scored against Elle\'s actual criteria. A third space finder matched to your goals. A map of 26 venues she actually recommends in New York.',
    accent: '#A89BC4',
    href: 'https://ritualwhere.vercel.app',
  },
]

export default function Platform() {
  return (
    <main className="pt-32 pb-24">

      {/* Hero */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-24">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-xs text-amber tracking-[0.25em] mb-4">the platform</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display text-[clamp(44px,6vw,80px)] text-ink mb-8 leading-tight">
          Three questions.<br />One place.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-sans text-xl text-ink-muted leading-relaxed max-w-2xl mb-4">
          Ritualware is three tools built on the personal frameworks of Elle Porcher — a style philosophy, a beauty hierarchy, and a guide to thriving in New York City.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="font-serif italic text-xl text-ink-muted leading-relaxed max-w-2xl">
          Your answers live in one profile. Every tool knows you. The more you use, the more they understand each other.
        </motion.p>
      </div>

      {/* Three apps */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto space-y-6 mb-24">
        {apps.map((app, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.12 }}
            className="bg-cream-alt rounded-3xl p-8 md:p-10 border-l-4"
            style={{ borderLeftColor: app.accent }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <p className="font-serif italic text-ink-muted text-lg mb-1">{app.question}</p>
                <h2 className="font-display text-3xl text-ink mb-4">{app.name}</h2>
                <p className="font-sans text-lg text-ink leading-relaxed">{app.desc}</p>
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a href={app.href} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-sm px-6 py-3 rounded-full text-cream-DEFAULT text-center transition-all hover:opacity-90"
                  style={{ backgroundColor: app.accent }}>
                  Open →
                </a>
                <Link to={app.to}
                  className="font-mono text-xs text-center text-ink-muted hover:text-ink transition-colors">
                  Learn more
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* One profile */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto">
        <div className="bg-cream-dark rounded-3xl p-10 md:p-16 text-center">
          <p className="font-mono text-xs text-amber tracking-[0.25em] mb-6">one profile</p>
          <h2 className="font-display italic text-[clamp(32px,4vw,56px)] leading-tight mb-6" style={{ color: '#FAF7F2' }}>
            Log in once.<br />Every tool knows you.
          </h2>
          <p className="font-sans text-lg leading-relaxed max-w-xl mx-auto mb-10" style={{ color: '#C8BFB0' }}>
            Your style rules, your beauty audit, your neighborhood profile — in one place. What you tell Ritualwear informs what Glow Up sees. What Ritualwhere learns about how you move through the city connects back to everything else.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { href: 'https://vile-style-oracle.vercel.app', label: 'Open Ritualwear', color: '#D4919A' },
              { href: 'https://glowup.vercel.app', label: 'Open Glow Up', color: '#8FA688' },
              { href: 'https://ritualwhere.vercel.app', label: 'Open Ritualwhere?', color: '#A89BC4' },
            ].map(btn => (
              <a key={btn.label} href={btn.href} target="_blank" rel="noopener noreferrer"
                className="font-mono text-sm px-6 py-3 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: btn.color, color: '#FAF7F2' }}>
                {btn.label} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
