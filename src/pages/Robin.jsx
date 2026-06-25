import { motion } from 'framer-motion'

const MODULES = [
  { name: 'Ritualwear', sub: 'oracle', color: '#C4717A', desc: 'Your Kibbe type, colour season, style words, and saved Oracle looks.' },
  { name: 'Glow Up', sub: 'pyramid', color: '#C4A96E', desc: 'Your glow tier, style archetype, and beauty audit results.' },
  { name: 'Ritualwhere?', sub: 'map', color: '#6AAD8A', desc: 'Your matched neighborhood, city preference, and burnout profile.' },
  { name: 'Ritualwealth', sub: 'fire', color: '#A89BC4', desc: 'Your FIRE type, target number, target age, and savings progress.' },
  { name: "m'atelier", sub: 'studio', color: '#8B7E72', desc: 'Your active projects, open goals, and creative focus.' },
]

const color = '#7EB8C4'

export default function Robin() {
  return (
    <main className="pt-32 pb-24">

      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color }}>
          ritual profile · robin.ritualware.app
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display italic leading-none text-ink mb-6"
          style={{ fontSize: 'clamp(52px,8vw,100px)' }}>
          Robin
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-2xl text-ink-muted max-w-xl">
          Who am I becoming?
        </motion.p>
      </div>

      <div className="bg-cream-alt py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color }}>your ritual life, at a glance</p>
          <h2 className="font-display text-4xl text-ink mb-8">One dashboard. Every tool. Your data.</h2>
          <p className="font-sans text-xl text-ink leading-relaxed mb-6">
            Robin pulls your results from every Ritualware app into a single, personal dashboard. Your style profile, your glow tier, your neighborhood match, your FIRE plan, your studio projects — all in one place.
          </p>
          <p className="font-sans text-lg text-ink-muted leading-relaxed">
            Configure it once with Do the Dash — a five-question quiz that sets your lens. Then reorder, hide, and customize your modules to match how you actually want to see your life.
          </p>
        </div>
      </div>

      <div className="py-32 px-6 md:px-16 max-w-5xl mx-auto">
        <p className="font-mono text-sm tracking-[0.25em] mb-14" style={{ color }}>what's inside</p>
        <div className="grid md:grid-cols-2 gap-8">
          {MODULES.map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-cream-alt rounded-3xl p-8 border-l-4"
              style={{ borderLeftColor: m.color }}>
              <p className="font-mono text-xs tracking-[0.2em] mb-2" style={{ color: m.color }}>{m.sub}</p>
              <h3 className="font-display text-2xl text-ink mb-4">{m.name}</h3>
              <p className="font-sans text-base text-ink-muted leading-relaxed">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-cream-alt py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-10" style={{ color }}>do the dash</p>
          <h2 className="font-display text-4xl text-ink mb-8">Five questions. One dashboard, configured for you.</h2>
          <p className="font-sans text-xl text-ink leading-relaxed mb-6">
            Before your dashboard loads, Robin asks five questions: your primary life lens, what freedom means to you, where you want to be, what you're optimizing for, and how you relate to your past self.
          </p>
          <p className="font-sans text-lg text-ink-muted leading-relaxed">
            Your answers determine which modules surface first and how Robin frames your data. You can retake it anytime.
          </p>
        </div>
      </div>

      <div className="py-28 px-6 md:px-16 max-w-5xl mx-auto text-center">
        <p className="font-mono text-sm tracking-[0.25em] mb-6" style={{ color }}>open your dashboard</p>
        <h2 className="font-display italic text-[clamp(28px,4vw,52px)] text-ink leading-tight mb-8">
          Your ritual life,<br />at a glance.
        </h2>
        <a href="https://robin.ritualware.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-sm px-8 py-4 rounded-full transition-colors hover:opacity-90"
          style={{ backgroundColor: color, color: '#FAF7F2' }}>
          Open Robin →
        </a>
      </div>

    </main>
  )
}
