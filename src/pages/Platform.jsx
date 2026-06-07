import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const apps = [
  { to: '/ritualwear', question: 'What do I wear?', name: 'Ritualwear', domain: 'wear.ritualware.app', href: 'https://wear.ritualware.app', color: '#D4919A' },
  { to: '/glowup',    question: 'How do I look?',  name: 'Glow Up',    domain: 'glowup.ritualware.app', href: 'https://glowup.ritualware.app', color: '#8FA688' },
  { to: '/ritualwhere',question: 'Where do I go?', name: 'Ritualwhere?',domain: 'where.ritualware.app', href: 'https://where.ritualware.app', color: '#A89BC4' },
  { to: '/matelier',  question: 'What am I building?', name: "m'atelier", domain: 'studio.ritualware.app', href: 'https://studio.ritualware.app', color: '#C8A86B' },
,
  { to: '/doubles', question: 'Where do I work out?', name: 'EQX Doubles', domain: 'thevillanelle.github.io/eqx-doubles', href: 'https://thevillanelle.github.io/eqx-doubles/index.html', color: '#c8f23a',
    note: 'For Equinox members in NYC.' },]

export default function Platform() {
  return (
    <main className="pt-32 pb-24">

      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm text-amber tracking-[0.25em] mb-4">the platform</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display text-[clamp(44px,6vw,80px)] text-ink mb-8 leading-tight">
          Four tools.<br />One place.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-sans text-xl text-ink-muted leading-relaxed max-w-2xl mb-4">
          Ritualware is a suite of interconnected apps built on the personal frameworks of Elle Porcher — a style philosophy, a beauty hierarchy, a guide to thriving in New York and Los Angeles, and a personal studio for tracking what you're building.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="font-serif italic text-xl text-ink-muted leading-relaxed max-w-2xl">
          One login. One profile. Every answer you give in one app enriches your picture in all the others.
        </motion.p>
      </div>

      {/* Four apps */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto space-y-5 mb-28">
        {apps.map((app, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-cream-alt rounded-3xl p-8 md:p-10 border-l-4"
            style={{ borderLeftColor: app.color }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <p className="font-serif italic text-ink-muted text-lg mb-1">{app.question}</p>
                <h2 className="font-display text-3xl text-ink mb-2">{app.name}</h2>
                <p className="font-mono text-xs mb-4" style={{ color: app.color }}>{app.domain}</p>
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

      {/* Architecture */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-cream-dark rounded-3xl p-10">
            <p className="font-mono text-xs text-amber tracking-[0.25em] mb-6">one profile</p>
            <h2 className="font-display italic text-3xl mb-6" style={{ color: '#FAF7F2' }}>
              Log in once.<br />Every app knows you.
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-4" style={{ color: '#C8BFB0' }}>
              The Ritual Profile aggregates every answer you've ever given — across all four apps, all nine quizzes, every answer you've ever given. The first quiz populates it. Every one after makes it richer.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#9A8B7A' }}>
              One AI Narrative button sends your complete profile to Gemini 2.5 Flash and generates a prose study of who you are. Saved — so it doesn't regenerate every time you open it.
            </p>
          </div>
          <div className="bg-cream-alt rounded-3xl p-10">
            <p className="font-mono text-xs text-amber tracking-[0.25em] mb-6">under the hood</p>
            <div className="space-y-4 font-mono text-sm text-ink-muted">
              <div className="flex justify-between border-b border-ink/10 pb-3">
                <span>Apps</span><span className="text-ink">4</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-3">
                <span>Supabase tables</span><span className="text-ink">16</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-3">
                <span>Total quiz questions</span><span className="text-ink">all your</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-3">
                <span>AI model</span><span className="text-ink">Gemini 2.5 Flash</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-3">
                <span>Auth</span><span className="text-ink">Google OAuth + email</span>
              </div>
              <div className="flex justify-between border-b border-ink/10 pb-3">
                <span>Maps</span><span className="text-ink">Leaflet + CartoDB</span>
              </div>
              <div className="flex justify-between pb-3">
                <span>Cities</span><span className="text-ink">New York · Los Angeles</span>
              </div>
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
            Every feature has a rule-based default. AI adds a narrative layer when you want it. The apps work without hitting the AI API, load instantly, and don't fail silently.
          </p>
          <p className="font-serif italic text-lg text-ink-muted">
            The question for each feature was: does AI make this better, or does it just make it more expensive to run?
          </p>
        </div>
      </div>

    </main>
  )
}
