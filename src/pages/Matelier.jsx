import { motion } from 'framer-motion'

export default function Matelier() {
  return (
    <main className="pt-36 pb-28">

      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm text-amber tracking-[0.25em] mb-5">m'atelier</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display italic leading-none text-ink mb-6"
          style={{ fontSize: 'clamp(52px,8vw,100px)' }}>
          m'atelier
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-2xl text-ink-muted max-w-xl">
          Your projects, your skills, your knowledge — mapped out, connected, and growing.
        </motion.p>
      </div>

      {/* Lead with the star feature */}
      <div className="py-36 px-6 md:px-16" style={{ background: 'var(--bg-dark)' }}>
        <div className="max-w-4xl mx-auto">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-mono text-sm text-amber tracking-[0.25em] mb-5">the knowledge map</motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-display text-4xl mb-8" style={{ color: '#FAF7F2' }}>
            You can see what you know.
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-xl leading-relaxed mb-6" style={{ color: '#C8BFB0' }}>
                Your knowledge areas live as connected nodes on a visual map. Design links to Strategy. Strategy links to Finance. Finance links to whatever else you know. Zoom in to read detail. Zoom out to see the shape of your expertise.
              </p>
              <p className="font-sans text-lg leading-relaxed" style={{ color: '#9A8B7A' }}>
                As you add more, the connections appear — not based on keywords you enter, but based on how those areas actually relate to each other. The map builds itself from what you know.
              </p>
            </div>
            <div className="rounded-3xl p-8" style={{ background: 'rgba(200,168,107,0.08)', border: '1px solid rgba(200,168,107,0.2)' }}>
              <p className="font-mono text-sm text-amber mb-5 tracking-widest">what it covers</p>
              <div className="flex flex-wrap gap-2">
                {['Web Dev', 'Data Viz', 'Design', 'Strategy', 'Finance', 'AI Tools', 'Infrastructure', 'Blockchain', 'Security', '+ everything you add'].map(tag => (
                  <span key={tag} className="font-mono text-xs px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(200,168,107,0.12)', color: '#C8A86B', border: '1px solid rgba(200,168,107,0.2)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What else is in it */}
      <div className="py-36 px-6 md:px-16 max-w-4xl mx-auto">
        <p className="font-mono text-sm text-amber tracking-[0.25em] mb-16">what's inside</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-cream-alt rounded-3xl p-8">
            <h3 className="font-display text-2xl text-ink mb-4">Project Tracking</h3>
            <p className="font-sans text-lg text-ink-muted leading-relaxed">
              Every project you're working on — tasks broken down, collaborators linked, status visible at a glance. Your work, organized how you think.
            </p>
          </div>
          <div className="bg-cream-alt rounded-3xl p-8">
            <h3 className="font-display text-2xl text-ink mb-4">Skills Inventory</h3>
            <p className="font-sans text-lg text-ink-muted leading-relaxed">
              Rate each skill by how foundational it is to you — from things you're just picking up to things you can teach. See where your strengths cluster.
            </p>
          </div>
          <div className="bg-cream-alt rounded-3xl p-8">
            <h3 className="font-display text-2xl text-ink mb-4">Real Persistence</h3>
            <p className="font-sans text-lg text-ink-muted leading-relaxed">
              Your data syncs across devices and updates in real time. Add something on your phone, see it on your laptop.
            </p>
          </div>
          <div className="bg-cream-alt rounded-3xl p-8">
            <h3 className="font-display text-2xl text-ink mb-4">The Longer You Use It</h3>
            <p className="font-sans text-lg text-ink-muted leading-relaxed">
              The map gets richer. The connections get clearer. It becomes a record of how your knowledge has grown, not just a snapshot of where it is.
            </p>
          </div>
        </div>
      </div>

      <div className="py-28 px-6 text-center bg-cream-alt">
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
