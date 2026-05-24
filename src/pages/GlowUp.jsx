import { motion } from 'framer-motion'

const categories = [
  { name: 'Skin', icon: '✨' }, { name: 'Sleep', icon: '🌙' },
  { name: 'Nutrition', icon: '🥗' }, { name: 'Fitness', icon: '💪' },
  { name: 'Hair', icon: '💇' }, { name: 'Makeup', icon: '💄' },
  { name: 'Body Grooming', icon: '🪒' }, { name: 'Teeth', icon: '🦷' },
  { name: 'Fragrance', icon: '🌸' }, { name: 'Professional Services', icon: '💅' },
  { name: 'Fashion', icon: '👗' }, { name: 'Mindset', icon: '🧠' },
]

export default function GlowUp() {
  return (
    <main style={{ background: '#F4F7F4', minHeight: '100vh' }}>

      <section className="relative flex items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
        style={{ background: 'linear-gradient(160deg, #F4F7F4 0%, #E2EDE0 60%, #C8D9C4 100%)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8FA688, #A8BCAB)' }} />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-sm tracking-[0.3em] mb-5" style={{ color: '#4A6B45' }}>glow up</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display leading-none mb-5" style={{ fontSize: 'clamp(56px,9vw,120px)', color: '#1A2D18' }}>
            How do<br /><span className="italic">I look?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-2xl max-w-lg mb-8" style={{ color: '#3A5538' }}>
            A professional-grade beauty and lifestyle audit — not a vibe check.
          </motion.p>
          <motion.a href="https://glowup.vercel.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="inline-block font-mono text-base px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#8FA688', color: '#F4F7F4' }}>
            Open Glow Up →
          </motion.a>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-4" style={{ color: '#4A6B45' }}>the audit</p>
            <h2 className="font-display text-4xl mb-6" style={{ color: '#1A2D18' }}>42 questions. 12 categories. One honest assessment.</h2>
            <p className="font-sans text-lg leading-relaxed mb-4" style={{ color: '#2C4428' }}>
              A beauty and lifestyle audit built around a real hierarchy. 42 questions across 12 categories — scored independently, weighted against the whole picture.
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: '#4A6B45' }}>
              The app should feel like it knows you. That doesn't happen at 10 questions.
            </p>
            <div className="rounded-2xl p-6 mt-6" style={{ background: '#E2EDE0' }}>
              <p className="font-mono text-sm tracking-[0.2em] mb-4" style={{ color: '#4A6B45' }}>what you get</p>
              <ul className="space-y-2">
                {['Section verdicts by category', 'Quick wins for this week', 'Week-one action plan', 'Month-one plan', 'Non-negotiables that don\'t move'].map(item => (
                  <li key={item} className="flex gap-3 font-sans text-base" style={{ color: '#2C4428' }}>
                    <span style={{ color: '#8FA688' }}>✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#4A6B45' }}>12 categories</p>
            <div className="grid grid-cols-2 gap-3">
              {categories.map(cat => (
                <div key={cat.name} className="rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{ background: '#E2EDE0' }}>
                  <span>{cat.icon}</span>
                  <span className="font-sans text-base" style={{ color: '#2C4428' }}>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#1A2D18' }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-serif italic text-2xl leading-tight pl-8 border-l-2 mb-12" style={{ color: '#F4F7F4', borderColor: '#8FA688' }}>
            The output isn't a report card. It's a plan.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A8BCAB' }}>Scored by section</h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#6A8C66' }}>Each of the 12 categories scores independently. You see exactly where you stand — not just a number.</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A8BCAB' }}>Actionable by design</h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#6A8C66' }}>Quick wins for this week. A month-one roadmap. Non-negotiables that don't move.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: '#F4F7F4' }}>
        <p className="font-serif italic text-2xl mb-8" style={{ color: '#3A5538' }}>
          42 questions. One honest assessment.
        </p>
        <a href="https://glowup.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#8FA688', color: '#F4F7F4' }}>
          Open Glow Up →
        </a>
      </section>

    </main>
  )
}
