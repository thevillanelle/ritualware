import { motion } from 'framer-motion'

export default function Matelier() {
  return (
    <main className="pt-32 pb-24">

      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm text-amber tracking-[0.25em] mb-5">m'atelier · studio.ritualware.app</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display italic leading-none text-ink mb-6"
          style={{ fontSize: 'clamp(52px,8vw,100px)' }}>
          m'atelier
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-2xl text-ink-muted max-w-xl">
          What am I building?
        </motion.p>
      </div>

      {/* What it is */}
      <div className="bg-cream-alt py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm text-amber tracking-[0.25em] mb-5">your studio</p>
          <h2 className="font-display text-4xl text-ink mb-8">Your projects. Your people. Your skills. Your goals.</h2>
          <p className="font-sans text-xl text-ink leading-relaxed mb-6">
            m'atelier is the fourth app in the Ritualware suite — built for the part of your life that's about creation, not consumption. Track what you're making, who you're making it with, what you're learning, and where you're going.
          </p>
          <p className="font-sans text-lg text-ink-muted leading-relaxed">
            Everything in m'atelier connects to your Ritual Profile. Your skills and goals appear alongside your style, beauty, and city data — because who you are isn't siloed by category.
          </p>
        </div>
      </div>

      {/* Four modules */}
      <div className="py-32 px-6 md:px-16 max-w-5xl mx-auto">
        <p className="font-mono text-sm text-amber tracking-[0.25em] mb-14">what's inside</p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: 'Projects',
              body: 'Create and track everything you\'re working on. Status badges (active, planning, wrap, complete, cancelled). Expandable task lists. Link field, end date, notes. Your active projects at a glance.',
            },
            {
              title: 'My Circle',
              body: 'The people in your life, tracked the way you actually think about them. Free-text role field — not a dropdown, type anything. Skills tags, notes, color-coded initials avatar.',
            },
            {
              title: 'Skills',
              body: 'Tracked by category and level: Learning, Familiar, Proficient, Expert. Update your level inline as you grow. See your skill landscape clearly.',
            },
            {
              title: 'Goals',
              body: 'Goals with category, timeframe, description, and a completion toggle. Stat summary so you can see how you\'re actually moving.',
            },
          ].map((mod, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-cream-alt rounded-3xl p-8">
              <h3 className="font-display text-2xl text-ink mb-4">{mod.title}</h3>
              <p className="font-sans text-lg text-ink-muted leading-relaxed">{mod.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ritual Profile connection */}
      <div className="py-28 px-6" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm text-amber tracking-[0.25em] mb-5">connected to everything</p>
          <h2 className="font-display text-4xl mb-8" style={{ color: '#FAF7F2' }}>
            Your studio lives inside your Ritual Profile.
          </h2>
          <p className="font-sans text-xl leading-relaxed mb-6" style={{ color: '#C8BFB0' }}>
            Everything you add to m'atelier — your projects, your circle, your skills, your goals — shows up in your Ritual Profile alongside your style answers, your beauty audit, and your city data. One place where all of it connects.
          </p>
          <p className="font-sans text-lg leading-relaxed" style={{ color: '#9A8B7A' }}>
            The Ritual Profile is the fourth app's payoff. Every answer you've ever given, every goal you've set, every skill you've tracked — readable in one place, exportable as markdown, or sent to AI for a prose synthesis of who you are right now.
          </p>
        </div>
      </div>

      <div className="py-24 px-6 text-center bg-cream-alt">
        <p className="font-serif italic text-2xl text-ink-muted mb-8">
          Your studio. Your work. Your map.
        </p>
        <a href="https://studio.ritualware.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base text-rose border border-rose px-8 py-4 rounded-full hover:bg-rose hover:text-cream-DEFAULT transition-colors">
          Open m'atelier →
        </a>
      </div>

    </main>
  )
}
