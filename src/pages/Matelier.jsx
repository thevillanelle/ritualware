import { motion } from 'framer-motion'

export default function Matelier() {
  return (
    <main className="pt-32 pb-24">

      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-20">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm text-amber tracking-[0.25em] mb-5">m'atelier</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display italic leading-none text-ink mb-6"
          style={{ fontSize: 'clamp(52px,8vw,100px)' }}>
          m'atelier
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-2xl text-ink-muted max-w-xl">
          Your personal studio. Your projects, your skills, your knowledge — all in one place.
        </motion.p>
      </div>

      <div className="bg-cream-alt py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="font-mono text-sm text-amber tracking-[0.25em] mb-4">what it is</p>
            <p className="font-sans text-xl text-ink leading-relaxed mb-4">
              A project and life management tool built around how you actually work — not how a corporation does.
            </p>
            <p className="font-sans text-lg text-ink-muted leading-relaxed">
              Track your active projects. Inventory your skills and areas of knowledge. See connections between what you know and what you're building.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm text-amber tracking-[0.25em] mb-4">what's inside</p>
            <ul className="space-y-3">
              {[
                'Project tracking with tasks and collaborator links',
                'Skills and knowledge inventory — weighted by how foundational each one is',
                'A knowledge graph that maps how everything connects',
                'Your data syncs across devices and updates in real time',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans text-base text-ink-muted">
                  <span className="text-amber mt-0.5 shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="py-20 px-6 max-w-4xl mx-auto">
        <p className="font-mono text-sm text-amber tracking-[0.25em] mb-4">the knowledge graph</p>
        <h2 className="font-display text-4xl text-ink mb-6">A map of what you know.</h2>
        <p className="font-sans text-xl text-ink-muted leading-relaxed mb-10 max-w-2xl">
          Your knowledge areas — design, finance, strategy, creative work, technical skills, whatever matters to you — live as connected nodes on a visual map. Zoom in to see more detail. Zoom out to see the full picture.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-cream-alt rounded-3xl p-8">
            <p className="font-mono text-sm text-amber mb-3">as you add things</p>
            <p className="font-sans text-lg text-ink-muted leading-relaxed">The graph grows with you. Connections appear based on how your areas of knowledge relate to each other. The more you put in, the clearer the picture.</p>
          </div>
          <div className="bg-cream-alt rounded-3xl p-8">
            <p className="font-mono text-sm text-amber mb-3">what it shows you</p>
            <p className="font-sans text-lg text-ink-muted leading-relaxed">Where your strengths cluster. Where there are gaps. What you're building toward and what you've already built.</p>
          </div>
        </div>
      </div>

      <div className="py-16 px-6 text-center bg-cream-alt">
        <p className="font-serif italic text-2xl text-ink-muted mb-8">
          Your studio. Your work. Your map.
        </p>
        <a href="https://thevillanelle.github.io/studio" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base text-rose border border-rose px-8 py-4 rounded-full hover:bg-rose hover:text-cream-DEFAULT transition-colors">
          Open m'atelier →
        </a>
      </div>

    </main>
  )
}
