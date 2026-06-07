import { motion } from 'framer-motion'

const sections = [
  { name: 'Skin', icon: '✨' }, { name: 'Sleep', icon: '🌙' },
  { name: 'Nutrition', icon: '🥗' }, { name: 'Fitness', icon: '💪' },
  { name: 'Hair', icon: '💇' }, { name: 'Face & Makeup', icon: '💄' },
  { name: 'Body Grooming', icon: '🪒' }, { name: 'Teeth', icon: '🦷' },
  { name: 'Fragrance', icon: '🌸' }, { name: 'Professional Services', icon: '💅' },
  { name: 'Fashion', icon: '👗' }, { name: 'Mindset', icon: '🧠' },
]

const paths = [
  { name: 'Glow Up Audit', desc: 'questions across every category of your beauty life. The full picture of where you are.' },
  { name: 'The Rebrand', desc: '15 questions that map what\'s changing and who you\'re becoming.' },
  { name: 'The Makeover', desc: '15 questions using the Glow Up Pyramid as the framework for a complete transformation plan.' },
]

const exampleResult = [
  { cat: 'Skin', score: '6/10', verdict: 'Solid foundation. Your routine peaks at cleansing and stops before actives.', quickWin: 'Add a vitamin C serum in the morning. Results in 3 weeks.' },
  { cat: 'Sleep', score: '5/10', verdict: 'You\'re getting hours but the quality isn\'t matching.', quickWin: 'Cut screens 30 minutes earlier. This one actually works.' },
  { cat: 'Fitness', score: '8/10', verdict: 'You move. What you\'re missing is intentional recovery.', quickWin: 'One full rest day per week, non-negotiable.' },
  { cat: 'Fragrance', score: '9/10', verdict: 'You have this. You layer, you rotate, you understand longevity.', quickWin: 'Nothing to do here. Keep going.' },
]

export default function GlowUp() {
  return (
    <main style={{ background: '#F4F7F4', minHeight: '100vh' }}>

      <section className="relative flex items-center overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28"
        style={{ background: 'linear-gradient(160deg, #F4F7F4 0%, #E2EDE0 60%, #C8D9C4 100%)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #8FA688, #A8BCAB)' }} />
        <div className="relative z-10 px-6 md:px-16 max-w-5xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-sm tracking-[0.3em] mb-5" style={{ color: '#4A6B45' }}>glow up · glowup.ritualware.app</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display leading-none mb-5" style={{ fontSize: 'clamp(56px,9vw,120px)', color: '#1A2D18' }}>
            How do<br /><span className="italic">I look?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-2xl max-w-lg mb-8" style={{ color: '#3A5538' }}>
            A complete picture of where you are, and exactly what to do about it.
          </motion.p>
          <motion.a href="https://glowup.ritualware.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="inline-block font-mono text-base px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#8FA688', color: '#F4F7F4' }}>
            Open Glow Up →
          </motion.a>
        </div>
      </section>

      {/* Three paths */}
      <section className="py-32 px-6 md:px-16 max-w-5xl mx-auto">
        <p className="font-mono text-sm tracking-[0.25em] mb-14" style={{ color: '#4A6B45' }}>three ways in</p>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {paths.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-3xl p-8" style={{ background: '#E2EDE0' }}>
              <h3 className="font-display text-2xl mb-4" style={{ color: '#1A2D18' }}>{p.name}</h3>
              <p className="font-sans text-lg leading-relaxed" style={{ color: '#2C4428' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Scorecard example */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#4A6B45' }}>the glow up audit</p>
            <h2 className="font-display text-4xl mb-6" style={{ color: '#1A2D18' }}>A real audit. Your whole picture.</h2>
            <p className="font-sans text-lg leading-relaxed mb-5" style={{ color: '#2C4428' }}>
              questions across every category of your beauty life, scored independently, weighted against the whole. You get section verdicts, quick wins, a week-one plan, a month-one plan, and the non-negotiables that don't move.
            </p>
            <p className="font-sans text-base leading-relaxed" style={{ color: '#4A6B45' }}>
              The app should feel like it knows you. That doesn't happen if it goes shallow.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm tracking-[0.2em] mb-4" style={{ color: '#4A6B45' }}>example scorecard</p>
            <div className="rounded-3xl overflow-hidden" style={{ background: '#1A2D18' }}>
              <div className="p-5 border-b" style={{ borderColor: 'rgba(143,166,136,0.2)' }}>
                <p className="font-mono text-xs text-sage tracking-widest">YOUR SCORECARD, SAMPLE</p>
              </div>
              {exampleResult.map((r, i) => (
                <div key={i} className="p-5 border-b" style={{ borderColor: 'rgba(143,166,136,0.1)' }}>
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
              <div className="p-5" style={{ background: 'rgba(143,166,136,0.08)' }}>
                <p className="font-mono text-xs text-center" style={{ color: '#8FA688' }}>+ WEEK-ONE PLAN · MONTH-ONE PLAN · NON-NEGOTIABLES</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 sections */}
      <section className="py-32 px-6 md:px-16 max-w-5xl mx-auto border-t" style={{ borderColor: 'rgba(143,166,136,0.3)' }}>
        <p className="font-mono text-sm tracking-[0.25em] mb-14" style={{ color: '#4A6B45' }}>12 sections covered</p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {sections.map(s => (
            <div key={s.name} className="rounded-2xl p-5 flex flex-col items-center text-center gap-2"
              style={{ background: '#E2EDE0' }}>
              <span className="text-2xl">{s.icon}</span>
              <span className="font-sans text-sm" style={{ color: '#2C4428' }}>{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 px-6" style={{ background: '#1A2D18' }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-serif italic text-2xl leading-tight pl-8 border-l-2" style={{ color: '#F4F7F4', borderColor: '#8FA688' }}>
            The result isn't a number. It's a plan. Something you can actually use tomorrow morning.
          </p>
        </div>
      </section>

      <section className="py-28 px-6 text-center" style={{ background: '#F4F7F4' }}>
        <p className="font-serif italic text-2xl mb-8" style={{ color: '#3A5538' }}>
          One honest assessment.
        </p>
        <a href="https://glowup.ritualware.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#8FA688', color: '#F4F7F4' }}>
          Open Glow Up →
        </a>
      </section>
    </main>
  )
}
