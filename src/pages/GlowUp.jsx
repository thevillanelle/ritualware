import { motion } from 'framer-motion'

const categories = [
  { name: 'Skin', icon: '✨' }, { name: 'Sleep', icon: '🌙' },
  { name: 'Nutrition', icon: '🥗' }, { name: 'Fitness', icon: '💪' },
  { name: 'Hair', icon: '💇' }, { name: 'Makeup', icon: '💄' },
  { name: 'Body Grooming', icon: '🪒' }, { name: 'Teeth', icon: '🦷' },
  { name: 'Fragrance', icon: '🌸' }, { name: 'Professional Services', icon: '💅' },
  { name: 'Fashion', icon: '👗' }, { name: 'Mindset', icon: '🧠' },
]

const exampleResult = [
  { cat: 'Skin', score: '6/10', verdict: 'Solid foundation, but your routine peaks at cleansing and stops before actives.', quickWin: 'Add a vitamin C serum in the morning. Results in 3 weeks.' },
  { cat: 'Sleep', score: '5/10', verdict: 'You\'re getting hours but the quality isn\'t matching.', quickWin: 'Cut screens 30 minutes earlier. This one actually works.' },
  { cat: 'Fitness', score: '8/10', verdict: 'You move. What you\'re missing is intentional recovery.', quickWin: 'One full rest day per week, non-negotiable.' },
  { cat: 'Fragrance', score: '9/10', verdict: 'You have this. You layer, you rotate, you understand longevity.', quickWin: 'Nothing to do here. Keep going.' },
]

export default function GlowUp() {
  return (
    <main style={{ background: '#F4F7F4', minHeight: '100vh' }}>

      <section className="relative flex items-center overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36"
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
            A complete picture of where you are — and exactly what to do about it.
          </motion.p>
          <motion.a href="https://glow-jdebrhgz1-thevillanelles-projects.vercel.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="inline-block font-mono text-base px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#8FA688', color: '#F4F7F4' }}>
            Open Glow Up →
          </motion.a>
        </div>
      </section>

      {/* What it is */}
      <section className="py-36 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#4A6B45' }}>what glow up does</p>
            <h2 className="font-display text-4xl mb-6" style={{ color: '#1A2D18' }}>It tells you exactly where you are. And what to do next.</h2>
            <p className="font-sans text-lg leading-relaxed mb-5" style={{ color: '#2C4428' }}>
              You answer questions across every area of your beauty and wellness life — skin, sleep, nutrition, fitness, hair, makeup, body, teeth, fragrance, services, fashion, and mindset. Every category scores separately.
            </p>
            <p className="font-sans text-lg leading-relaxed mb-5" style={{ color: '#4A6B45' }}>
              Then you get a real result: a verdict on each area, quick wins you can act on this week, a month-one plan, and the non-negotiables that can't be skipped. Specific. Honest. Actionable.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#6A8060' }}>
              It's built around a real beauty hierarchy — the philosophy that your routine has a foundation and that you build from the bottom up. The questions are thorough because half-measures produce half-results.
            </p>
          </div>

          {/* Example scorecard */}
          <div>
            <p className="font-mono text-sm tracking-[0.2em] mb-4" style={{ color: '#4A6B45' }}>example results</p>
            <div className="rounded-3xl overflow-hidden" style={{ background: '#1A2D18' }}>
              <div className="p-5 border-b" style={{ borderColor: 'rgba(143,166,136,0.2)' }}>
                <p className="font-mono text-xs text-sage tracking-widest">YOUR SCORECARD — 4 OF 12 SHOWN</p>
              </div>
              <div className="divide-y" style={{ borderColor: 'rgba(143,166,136,0.1)' }}>
                {exampleResult.map((r, i) => (
                  <div key={i} className="p-5">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-display text-lg" style={{ color: '#FAF7F2' }}>{r.cat}</p>
                      <span className="font-mono text-sm" style={{ color: '#8FA688' }}>{r.score}</span>
                    </div>
                    <p className="font-sans text-sm leading-relaxed mb-2" style={{ color: '#A8BCAB' }}>{r.verdict}</p>
                    <div className="rounded-xl px-3 py-2" style={{ background: 'rgba(143,166,136,0.1)' }}>
                      <p className="font-mono text-xs mb-1" style={{ color: '#8FA688' }}>QUICK WIN</p>
                      <p className="font-sans text-xs" style={{ color: '#C8D9C4' }}>{r.quickWin}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-5" style={{ background: 'rgba(143,166,136,0.08)' }}>
                <p className="font-mono text-xs text-center" style={{ color: '#8FA688' }}>+ MONTH-ONE PLAN · NON-NEGOTIABLES · WEEK-ONE ACTIONS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 categories */}
      <section className="py-36 px-6 md:px-16 max-w-5xl mx-auto border-t border-sage/20">
        <p className="font-mono text-sm tracking-[0.25em] mb-14" style={{ color: '#4A6B45' }}>12 areas covered</p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <div key={cat.name} className="rounded-2xl p-5 flex flex-col items-center text-center gap-2"
              style={{ background: '#E2EDE0' }}>
              <span className="text-2xl">{cat.icon}</span>
              <span className="font-sans text-sm" style={{ color: '#2C4428' }}>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-36 px-6" style={{ background: '#1A2D18' }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-serif italic text-2xl leading-tight pl-8 border-l-2" style={{ color: '#F4F7F4', borderColor: '#8FA688' }}>
            The result isn't a number. It's a plan. Something you can actually use tomorrow morning.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A8BCAB' }}>Scored by area</h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#6A8C66' }}>Each of the 12 areas scores independently. You see exactly where you stand — so you know what's working and what needs attention.</p>
            </div>
            <div>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A8BCAB' }}>Honest and specific</h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#6A8C66' }}>Not "drink more water." The recommendations are specific enough to act on. Quick wins for this week. Non-negotiables that don't move.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 text-center" style={{ background: '#F4F7F4' }}>
        <p className="font-serif italic text-2xl mb-8" style={{ color: '#3A5538' }}>
          One honest look at where you are.
        </p>
        <a href="https://glow-jdebrhgz1-thevillanelles-projects.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#8FA688', color: '#F4F7F4' }}>
          Open Glow Up →
        </a>
      </section>
    </main>
  )
}
