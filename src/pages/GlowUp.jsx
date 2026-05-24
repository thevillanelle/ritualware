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

      <section className="relative min-h-screen flex items-end overflow-hidden pt-16 pb-20"
        style={{ background: 'linear-gradient(160deg, #F4F7F4 0%, #E2EDE0 60%, #C8D9C4 100%)' }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8FA688, #A8BCAB)' }} />

        <div className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-xs tracking-[0.3em] mb-6" style={{ color: '#4A6B45' }}>glow up</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-[clamp(64px,10vw,140px)] leading-none mb-6" style={{ color: '#1A2D18' }}>
            How do<br /><span className="italic">I look?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="font-serif italic text-2xl max-w-lg mb-8" style={{ color: '#3A5538' }}>
            A professional-grade beauty and lifestyle audit built on a real hierarchy — not a vibe check.
          </motion.p>
          <motion.a href="https://glowup.vercel.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="inline-block font-mono text-sm px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#8FA688', color: '#F4F7F4' }}>
            Open Glow Up →
          </motion.a>
        </div>
      </section>

      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] mb-4" style={{ color: '#4A6B45' }}>the glow up pyramid</p>
            <h2 className="font-display text-4xl mb-6" style={{ color: '#1A2D18' }}>Elle's actual beauty hierarchy.</h2>
            <p className="font-sans leading-relaxed mb-4" style={{ color: '#2C4428' }}>
              The Glow Up Pyramid is Elle Porcher's real personal framework for beauty and wellness — built over years of intentional living. Not a generic checklist. A prioritized hierarchy that treats beauty as a system, not a collection of habits.
            </p>
            <p className="font-sans leading-relaxed mb-6" style={{ color: '#4A6B45' }}>
              42 questions is intentional. The app should feel like it knows you. That doesn't happen at 10 questions. Each category is scored independently, then weighted against the hierarchy.
            </p>
            <div className="rounded-2xl p-6" style={{ background: '#E2EDE0' }}>
              <p className="font-mono text-xs tracking-[0.2em] mb-3" style={{ color: '#4A6B45' }}>AI SCORECARD OUTPUT</p>
              <ul className="space-y-2">
                {['Section verdicts by category', 'Quick wins — actionable this week', 'Week-one action plan', 'Month-one plan', 'Non-negotiables'].map(item => (
                  <li key={item} className="flex gap-3 font-sans text-sm" style={{ color: '#2C4428' }}>
                    <span style={{ color: '#8FA688' }}>✦</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="font-mono text-xs tracking-[0.25em] mb-4" style={{ color: '#4A6B45' }}>12 categories · 42 questions</p>
            <div className="grid grid-cols-2 gap-3">
              {categories.map(cat => (
                <div key={cat.name} className="rounded-xl px-4 py-3 flex items-center gap-3"
                  style={{ background: '#E2EDE0' }}>
                  <span>{cat.icon}</span>
                  <span className="font-sans text-sm" style={{ color: '#2C4428' }}>{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#1A2D18' }}>
        <div className="max-w-3xl mx-auto">
          <blockquote className="border-l-2 pl-8 mb-12" style={{ borderColor: '#8FA688' }}>
            <p className="font-display italic text-[clamp(22px,3vw,36px)] leading-tight" style={{ color: '#F4F7F4' }}>
              "The app should feel like it knows you. That doesn't happen at 10 questions."
            </p>
          </blockquote>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A8BCAB' }}>Scored by section</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#6A8C66' }}>Each of the 12 categories scores independently. The AI reads the full picture before generating verdicts — not just a total score.</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A8BCAB' }}>Actionable by design</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#6A8C66' }}>The output isn't a report card. It's a plan. Quick wins for this week. A month-one roadmap. Non-negotiables that don't move.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: '#F4F7F4' }}>
        <p className="font-serif italic text-xl mb-8" style={{ color: '#3A5538' }}>
          42 questions. 12 categories. One honest assessment.
        </p>
        <a href="https://glowup.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-sm px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#8FA688', color: '#F4F7F4' }}>
          Open Glow Up →
        </a>
      </section>

    </main>
  )
}
