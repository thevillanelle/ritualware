import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="bg-cream-dark min-h-screen" style={{ color: '#FAF7F2' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-32">

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm text-amber tracking-[0.25em] mb-8">ritualware</motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display italic text-[clamp(40px,6vw,72px)] leading-tight mb-12" style={{ color: '#FAF7F2' }}>
          Five tools.<br />One question.
        </motion.h1>

        <div className="space-y-10 mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-sans text-xl leading-relaxed" style={{ color: '#C8BFB0' }}>
            Ritualware is built around a simple premise: how you show up in the world — what you wear, how you look, where you go, what you're working on — isn't random. It's a system. And systems can be designed intentionally.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-sans text-xl leading-relaxed" style={{ color: '#C8BFB0' }}>
            Each tool answers a different question. But they don't live in isolation. One login means one profile — and your profile travels. What you tell Ritualwear about your style informs the aesthetic lens across everything else. What Glow Up learns about your wellness habits connects to how you plan your week. Where Ritualwhere tells you to live shapes the context for all of it.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-sans text-xl leading-relaxed" style={{ color: '#C8BFB0' }}>
            The more you use, the more useful it gets. That's the design — not just five separate tools, but one platform that gets to know you.
          </motion.p>
        </div>

        <div className="border-t border-amber/20 pt-12 mb-16">
          <p className="font-mono text-sm text-amber tracking-[0.25em] mb-8">the throughline</p>
          <div className="space-y-6">
            {[
              { q: 'What do I wear?', name: 'Ritualwear', href: 'https://vile-style-oracle.vercel.app', color: '#D4919A' },
              { q: 'How do I look?', name: 'Glow Up', href: 'https://glowup.vercel.app', color: '#8FA688' },
              { q: 'Where do I go?', name: 'Ritualwhere?', href: 'https://ritualwhere.vercel.app', color: '#A89BC4' },
            ].map((app, i) => (
              <motion.a key={i} href={app.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-6 rounded-2xl group transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${app.color}30` }}>
                <div>
                  <p className="font-serif italic text-lg mb-1" style={{ color: `${app.color}` }}>{app.q}</p>
                  <p className="font-display text-2xl" style={{ color: '#FAF7F2' }}>{app.name}</p>
                </div>
                <span className="font-mono text-sm group-hover:translate-x-2 transition-transform" style={{ color: app.color }}>→</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-amber/20 pt-12">
          <p className="font-mono text-sm text-amber tracking-[0.25em] mb-6">the vibe</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Intentional', body: 'Nothing here is accidental. Every question, every category, every recommendation is there for a reason.' },
              { label: 'Sensory', body: 'Beauty, style, place — these are physical experiences. The tools are built to honor that, not reduce it to a checklist.' },
              { label: 'Yours', body: 'The tools learn your preferences and apply them. They work for you — not against a generic standard.' },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl" style={{ background: 'rgba(255,255,255,0.05)' }}>
                <h3 className="font-display text-xl mb-3" style={{ color: '#C8A86B' }}>{item.label}</h3>
                <p className="font-sans text-base leading-relaxed" style={{ color: '#9A8B7A' }}>{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-16 border-l-2 border-rose pl-8">
          <p className="font-display italic text-[clamp(24px,3.5vw,42px)] leading-tight" style={{ color: '#FAF7F2' }}>
            A ritual is a routine with meaning.<br />
            That's what these tools are for.
          </p>
        </motion.blockquote>

      </div>
    </main>
  )
}
