import { motion } from 'framer-motion'

export default function Ritualwhere() {
  return (
    <main style={{ background: '#F5F3FA', minHeight: '100vh' }}>

      <section className="relative flex items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
        style={{ background: 'linear-gradient(160deg, #F5F3FA 0%, #EAE5F5 60%, #D5CCE8 100%)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #A89BC4, #C0B5D8)' }} />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-sm tracking-[0.3em] mb-5" style={{ color: '#6B5A8A' }}>ritualwhere?</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display leading-none mb-5" style={{ fontSize: 'clamp(56px,9vw,120px)', color: '#2A1F3D' }}>
            Where do<br /><span className="italic">I go?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-2xl max-w-lg mb-3" style={{ color: '#4A3862' }}>
            A city guide you can actually use.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="font-mono text-sm mb-8" style={{ color: '#8A78A8' }}>Available for New York · Los Angeles</motion.p>
          <motion.a href="https://ritualwhere.vercel.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="inline-block font-mono text-base px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#A89BC4', color: '#F5F3FA' }}>
            Open Ritualwhere? →
          </motion.a>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: '14 questions',
              title: 'Neighborhood Quiz',
              body: 'Answer 14 questions about how you actually live — your commute, your routines, your energy, your aesthetic. The quiz scores neighborhoods against your real criteria, not generic livability rankings.',
              note: 'Toggle on AI and it writes a personal narrative about your life in that neighborhood.',
            },
            {
              label: 'goal-based matching',
              title: 'Third Space Finder',
              body: 'Tell it what you need — a place to focus, a place to connect, somewhere to move, somewhere to rest. It matches you to venues that actually fit.',
              note: '26 curated venues. Every recommendation is real.',
            },
            {
              label: '26 venues',
              title: 'The Map',
              body: 'An interactive map of all 26 venues — labeled, categorized, and filterable by type. Every pin is a real recommendation you can click to explore.',
              note: null,
            },
          ].map((tool, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="rounded-3xl p-7" style={{ background: '#EAE5F5', border: '1px solid rgba(168,155,196,0.25)' }}>
              <p className="font-mono text-sm tracking-[0.15em] mb-2" style={{ color: '#8A78A8' }}>{tool.label}</p>
              <h3 className="font-display text-2xl mb-4" style={{ color: '#2A1F3D' }}>{tool.title}</h3>
              <p className="font-sans text-base leading-relaxed mb-4" style={{ color: '#4A3862' }}>{tool.body}</p>
              {tool.note && <p className="font-serif italic text-base" style={{ color: '#8A78A8' }}>{tool.note}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#2A1F3D' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl mb-6" style={{ color: '#F5F3FA' }}>
            Scored against how you actually live.
          </h2>
          <p className="font-sans text-xl leading-relaxed mb-12 max-w-2xl" style={{ color: '#C0B5D8' }}>
            Not average commute times. Not crowd-sourced ratings. The quiz weighs what matters to you — your routines, your priorities, your energy — and scores each neighborhood accordingly.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A89BC4' }}>Mathematical by default</h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#8A78A8' }}>The quiz scores fast and reliably — no API dependency, no wait time. Your neighborhood match is instant.</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A89BC4' }}>Narrative on demand</h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#8A78A8' }}>Toggle on AI and it writes a personal story about your life in that neighborhood. The math tells you where you'd fit. The narrative tells you what it feels like.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: '#F5F3FA' }}>
        <p className="font-serif italic text-2xl mb-8" style={{ color: '#4A3862' }}>
          14 questions. 26 venues. Your city, mapped to how you actually live.
        </p>
        <a href="https://ritualwhere.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#A89BC4', color: '#F5F3FA' }}>
          Open Ritualwhere? →
        </a>
      </section>

    </main>
  )
}
