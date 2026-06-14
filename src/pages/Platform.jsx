import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SUITE as apps } from '../data/apps'

export default function Platform() {
  return (
    <main className="pt-32 pb-24">

      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm text-amber tracking-[0.25em] mb-4">the platform</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display text-[clamp(44px,6vw,80px)] text-ink mb-8 leading-tight">
          Five tools.<br />One suite.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-sans text-xl text-ink-muted leading-relaxed max-w-2xl mb-4">
          Five tools built around the questions most people answer by outsourcing. What to wear. How to look. Where to live and spend time. What to build. Where to train. Ritualware answers them from the inside out.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="font-serif italic text-xl text-ink-muted leading-relaxed max-w-2xl">
          One login. One profile. Every answer you give in one app makes the others sharper.
        </motion.p>
      </div>

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
                  className="font-mono text-sm px-6 py-3 rounded-full text-center transition-all hover:opacity-90"
                  style={{ backgroundColor: app.color, color: '#FAF7F2' }}>
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

      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <div className="bg-cream-dark rounded-3xl p-10 md:p-16">
          <p className="font-mono text-xs text-amber tracking-[0.25em] mb-6">one profile</p>
          <h2 className="font-display italic text-3xl mb-6" style={{ color: '#FAF7F2' }}>
            Log in once.<br />Every app knows you.
          </h2>
          <p className="font-sans text-xl leading-relaxed mb-4" style={{ color: '#C8BFB0' }}>
            The Ritual Profile is a single picture of you that all five apps contribute to. Your style rules. Your beauty audit. Your city preferences. Your projects and goals. The first quiz starts it. Every one after makes it richer.
          </p>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#9A8B7A' }}>
            One button generates a prose portrait of who you are right now, based on everything you have ever answered. It saves. It updates when you do.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 max-w-5xl mx-auto">
        <div className="bg-cream-alt rounded-3xl p-10 md:p-16 text-center">
          <p className="font-mono text-xs text-amber tracking-[0.25em] mb-6">the philosophy</p>
          <h2 className="font-display italic text-[clamp(28px,4vw,48px)] text-ink leading-tight mb-8">
            AI when it helps. Not by default.
          </h2>
          <p className="font-sans text-xl text-ink-muted leading-relaxed max-w-2xl mx-auto mb-6">
            Every feature works without AI. The quiz scores you. The map shows your venues. The audit gives you a plan. AI adds a narrative layer when you want one. It never gatekeeps the result.
          </p>
          <p className="font-serif italic text-lg text-ink-muted">
            The question for every feature was: does this actually need AI, or does it just sound better if it does?
          </p>
        </div>
      </div>

    </main>
  )
}
