import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const apps = [
  { to: '/ritualwear', question: 'What do I wear?', name: 'Ritualwear', domain: 'wear.ritualware.app', href: 'https://wear.ritualware.app', color: '#D4919A',
    why: 'Most style advice is generic. The Oracle isn\'t advising you — it\'s applying your own system back to you. You built the rules. It follows them.',
    tech: 'React + Vite · Supabase (auth + profile) · Gemini 2.5 Flash · Open-Meteo weather API · Pexels API · Zustand' },
  { to: '/glowup', question: 'How do I look?', name: 'Glow Up', domain: 'glowup.ritualware.app', href: 'https://glowup.ritualware.app', color: '#8FA688',
    why: 'An audit isn\'t useful if it goes shallow. Twelve categories, scored independently, weighted against the whole. The result isn\'t a number — it\'s a plan.',
    tech: 'React + Vite · Supabase · Gemini 2.5 Flash · Framer Motion · Zustand' },
  { to: '/ritualwhere', question: 'Where do I go?', name: 'Ritualwhere?', domain: 'where.ritualware.app', href: 'https://where.ritualware.app', color: '#A89BC4',
    why: 'A neighborhood score without a reason is just a number. Ritualwhere gives you the score and the logic — built from your actual answers, not a vibes average.',
    tech: 'React + Vite · Supabase · Leaflet.js + CartoDB · Gemini 2.5 Flash · NYC + LA venue data' },
  { to: '/matelier', question: 'What am I building?', name: "m\'atelier", domain: 'studio.ritualware.app', href: 'https://studio.ritualware.app', color: '#C8A86B',
    why: 'Projects, goals, skills, circle. The part of your life that\'s about creation. Everything you\'re making and everyone you\'re making it with — tracked in one place.',
    tech: 'React + Vite · Supabase · Framer Motion · Markdown export' },
]

function TechSpec({ tech }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ marginTop: '1.5rem' }}>
      <button onClick={() => setOpen(o => !o)}
        className="font-mono text-xs tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2"
        style={{ color: '#9A8B7A', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        <span style={{ display: 'inline-block', transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}>›</span>
        TECH SPECS
      </button>
      {open && (
        <p className="font-mono text-xs leading-relaxed" style={{ color: '#9A8B7A', marginTop: '0.75rem', paddingLeft: '1rem', borderLeft: '1px solid rgba(154,139,122,0.3)' }}>
          {tech}
        </p>
      )}
    </div>
  )
}

export default function Platform() {
  return (
    <main className="pt-32 pb-24">

      {/* Opening */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm text-amber tracking-[0.25em] mb-4">the platform</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display text-[clamp(44px,6vw,80px)] text-ink mb-8 leading-tight">
          Four questions.<br />One suite.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-sans text-xl text-ink-muted leading-relaxed max-w-2xl mb-6">
          What do I wear. How do I look. Where do I go. What am I building. Four questions most people answer by outsourcing — to trends, to algorithms, to whatever's convenient. Ritualware answers them from the inside out.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="font-serif italic text-xl text-ink-muted leading-relaxed max-w-2xl">
          Each app works on its own. Together, they build a picture that gets sharper every time you answer a question.
        </motion.p>
      </div>

      {/* Four apps */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto space-y-5 mb-28">
        {apps.map((app, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-cream-alt rounded-3xl p-8 md:p-10"
            style={{ borderLeft: `4px solid ${app.color}` }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <p className="font-serif italic text-ink-muted text-lg mb-1">{app.question}</p>
                <h2 className="font-display text-3xl text-ink mb-2">{app.name}</h2>
                <p className="font-mono text-xs mb-4" style={{ color: app.color }}>{app.domain}</p>
                <p className="font-sans text-base text-ink-muted leading-relaxed">{app.why}</p>
                <TechSpec tech={app.tech} />
              </div>
              <div className="flex flex-col gap-3 shrink-0">
                <a href={app.href} target="_blank" rel="noopener noreferrer"
                  className="font-mono text-sm px-6 py-3 rounded-full text-cream-DEFAULT text-center transition-all hover:opacity-90"
                  style={{ backgroundColor: app.color }}>
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

      {/* The Ritual Profile */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-cream-dark rounded-3xl p-10">
            <p className="font-mono text-xs text-amber tracking-[0.25em] mb-6">one profile</p>
            <h2 className="font-display italic text-3xl mb-6" style={{ color: '#FAF7F2' }}>
              Log in once.<br />Every app knows you.
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-4" style={{ color: '#C8BFB0' }}>
              The Ritual Profile accumulates every answer you've ever given — across all four apps. The first quiz populates it. Every one after makes it richer.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#9A8B7A' }}>
              One button sends the whole profile to Gemini 2.5 Flash and generates a prose study of who you are right now. Saved — so it doesn't regenerate every time you open it.
            </p>
          </div>
          <div className="bg-cream-alt rounded-3xl p-10">
            <p className="font-mono text-xs text-amber tracking-[0.25em] mb-6">under the hood</p>
            <div className="space-y-4 font-mono text-sm text-ink-muted">
              {[
                ['Apps', '4'],
                ['Supabase tables', '16'],
                ['AI model', 'Gemini 2.5 Flash'],
                ['Auth', 'Google OAuth + email'],
                ['Maps', 'Leaflet + CartoDB'],
                ['Cities', 'New York · Los Angeles'],
                ['Deploy', 'Vercel'],
              ].map(([label, val], i) => (
                <div key={i} className="flex justify-between border-b border-ink/10 pb-3">
                  <span>{label}</span><span className="text-ink">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* AI philosophy */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto">
        <div className="bg-cream-alt rounded-3xl p-10 md:p-16 text-center">
          <p className="font-mono text-xs text-amber tracking-[0.25em] mb-6">the philosophy</p>
          <h2 className="font-display italic text-[clamp(28px,4vw,48px)] text-ink leading-tight mb-8">
            AI-optional. Not AI-mandatory.
          </h2>
          <p className="font-sans text-xl text-ink-muted leading-relaxed max-w-2xl mx-auto mb-6">
            Every feature has a rule-based default. AI adds a narrative layer when you want it. The apps work without hitting the API, load instantly, and don't fail silently.
          </p>
          <p className="font-serif italic text-lg text-ink-muted">
            The question for each feature was: does AI make this better, or does it just make it more expensive to run?
          </p>
        </div>
      </div>

    </main>
  )
}
