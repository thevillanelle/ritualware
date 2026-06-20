import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SUITE as allApps } from '../data/apps'

export default function About() {
  return (
    <main className="bg-cream-dark min-h-screen" style={{ color: '#FAF7F2' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-16 py-32">

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm text-amber tracking-[0.25em] mb-8">ritualware</motion.p>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display italic leading-tight mb-12" style={{ fontSize: 'clamp(40px,6vw,72px)', color: '#FAF7F2' }}>
          Seven tools.<br />One suite.
        </motion.h1>

        <div className="space-y-8 mb-24">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-sans text-xl leading-relaxed" style={{ color: '#C8BFB0' }}>
            Ritualware is built around a simple premise: how you show up in the world, what you wear, how you look, where you go, what you're building, isn't random. It's a system. And systems can be designed intentionally.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-sans text-xl leading-relaxed" style={{ color: '#C8BFB0' }}>
            Each tool answers a different question. One login means one profile, and that profile travels. Every answer you give in Ritualwear informs your aesthetic lens across everything else. Every Glow Up section adds to the picture. Every goal in m'atelier connects back. The more you use, the richer it gets.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="font-sans text-xl leading-relaxed" style={{ color: '#C8BFB0' }}>
            The Ritual Profile pulls every answer you have ever given into one place. One button generates a prose portrait of who you are right now. It saves. It updates when you do.
          </motion.p>
        </div>

        <div className="border-t border-amber/20 pt-16 mb-24">
          <p className="font-mono text-sm text-amber tracking-[0.25em] mb-10">the full suite</p>
          <div className="space-y-5">
            {allApps.map((app, i) => (
              <motion.a key={i} href={app.href} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex items-center justify-between p-6 rounded-2xl group transition-all"
                style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${app.color}30` }}>
                <div>
                  <p className="font-serif italic text-base mb-1" style={{ color: app.color }}>{app.question}</p>
                  <p className="font-display text-2xl" style={{ color: '#FAF7F2' }}>{app.name}</p>
                </div>
                <span className="font-mono text-sm group-hover:translate-x-2 transition-transform" style={{ color: app.color }}>→</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-amber/20 pt-16 mb-24">
          <p className="font-mono text-sm text-amber tracking-[0.25em] mb-10">the vibe</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'Intentional', body: 'Nothing here is accidental. Every question, every category, every recommendation is there for a reason.' },
              { label: 'Sensory', body: 'Beauty, style, place, creation. These are physical experiences. The tools honor that rather than reducing them to a checklist.' },
              { label: 'Yours', body: 'The tools learn your preferences and apply them. They work for you, not against a generic standard.' },
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
          className="mt-24 border-l-2 border-rose pl-8">
          <p className="font-display italic leading-tight" style={{ fontSize: 'clamp(24px,3.5vw,42px)', color: '#FAF7F2' }}>
            A ritual is a routine with meaning.<br />
            That is what these tools are for.
          </p>
        </motion.blockquote>

      </div>
    </main>
  )
}
