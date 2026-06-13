import { motion } from 'framer-motion'
import { SUITE } from '../data/apps'

export default function Apps() {
  return (
    <main className="pt-36 pb-28 px-6 max-w-6xl mx-auto">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="font-mono text-xs text-amber tracking-[0.25em] mb-4">the apps</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="font-display text-[clamp(40px,6vw,80px)] text-ink mb-16">Five Questions.</motion.h1>

      <div className="space-y-8">
        {SUITE.map((app, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="rounded-3xl p-8 md:p-10 border-l-4"
            style={{ borderLeftColor: app.color, background: app.dark ? '#050505' : 'var(--bg-alt)' }}>
            <p className="font-serif italic text-ink-muted text-lg mb-1">{app.question}</p>
            <h2 className="font-display text-3xl mb-2" style={{ color: app.dark ? '#FAF7F2' : 'var(--ink)' }}>{app.name}</h2>
            <p className="font-mono text-xs mb-5" style={{ color: app.color }}>{app.domain}</p>
            <p className="font-sans text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: app.dark ? '#9A8B7A' : 'var(--ink)' }}>{app.desc}</p>
            <a href={app.href} target="_blank" rel="noopener noreferrer"
              className="inline-block font-mono text-sm px-6 py-3 rounded-full transition-colors hover:opacity-90"
              style={{ backgroundColor: app.color, color: '#FAF7F2' }}>
              Open {app.name} →
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
