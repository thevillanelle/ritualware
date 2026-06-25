import { motion } from 'framer-motion'

const FIRE_TYPES = [
  { name: 'Lean FIRE', color: '#7AB4C8', desc: 'Maximum freedom, minimum overhead. Retire early because you decided "enough" early.' },
  { name: 'Regular FIRE', color: '#6AAD8A', desc: 'The classic. Retire comfortably on a modest budget.' },
  { name: 'Fat FIRE', color: '#C8A86B', desc: 'Financial independence without changing your lifestyle.' },
  { name: 'Barista FIRE', color: '#C4717A', desc: 'Semi-retired. A part-time job covers expenses while investments grow untouched.' },
  { name: 'Coast FIRE', color: '#A89BC4', desc: "You've saved enough early that compound interest does the rest. Stop, and coast." },
]

export default function Ritualwealth() {
  return (
    <main className="pt-32 pb-24">

      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#6AAD8A' }}>
          ritualwealth · wealth.ritualware.app
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display italic leading-none text-ink mb-6"
          style={{ fontSize: 'clamp(52px,8vw,100px)' }}>
          Ritualwealth
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-2xl text-ink-muted max-w-xl">
          When do I retire?
        </motion.p>
      </div>

      <div className="bg-cream-alt py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#6AAD8A' }}>your fire plan</p>
          <h2 className="font-display text-4xl text-ink mb-8">A FIRE plan built for how women actually build wealth.</h2>
          <p className="font-sans text-xl text-ink leading-relaxed mb-6">
            Financial Independence, Retire Early. Five quizzes. Ten minutes. A complete picture of your FIRE number, your type, your career path, your housing plan, your creative income streams, and your risk tolerance.
          </p>
          <p className="font-sans text-lg text-ink-muted leading-relaxed">
            Not a spreadsheet. Not a generic calculator. A plan that knows you, because you told it who you are.
          </p>
        </div>
      </div>

      <div className="py-32 px-6 md:px-16 max-w-5xl mx-auto">
        <p className="font-mono text-sm tracking-[0.25em] mb-14" style={{ color: '#6AAD8A' }}>five quizzes</p>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'FIRE Type', body: 'Lean, Regular, Fat, Barista, or Coast. Find your number and understand what kind of freedom you are actually building toward.' },
            { title: 'Career Path', body: 'Which track gets you to FIRE fastest. Corporate ladder, freelance, entrepreneurship, or hybrid. Your career is your biggest wealth lever.' },
            { title: 'Home Plan', body: 'Own, rent, or enclave. Your housing decision changes your FIRE number by hundreds of thousands. This quiz maps yours.' },
            { title: 'Creative Income', body: 'The stream that funds the life. Identify which creative avenue fits your skills and how to build it into a real income source.' },
            { title: 'Risk Tolerance', body: 'How you invest once you have something to invest. Asset allocation, volatility comfort, time horizon. Know before you pick a portfolio.' },
          ].map((q, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-cream-alt rounded-3xl p-8 border-l-4"
              style={{ borderLeftColor: '#6AAD8A' }}>
              <h3 className="font-display text-2xl text-ink mb-4">{q.title}</h3>
              <p className="font-sans text-base text-ink-muted leading-relaxed">{q.body}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-cream-alt py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-10" style={{ color: '#6AAD8A' }}>five types of fire</p>
          <h2 className="font-display text-4xl text-ink mb-12">Not all FIRE looks the same.</h2>
          <div className="space-y-4">
            {FIRE_TYPES.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="rounded-2xl p-6 border-l-4"
                style={{ background: 'var(--bg)', borderLeftColor: t.color }}>
                <h3 className="font-display text-xl text-ink mb-2" style={{ color: t.color }}>{t.name}</h3>
                <p className="font-sans text-base text-ink-muted">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="py-28 px-6 md:px-16 max-w-5xl mx-auto text-center">
        <p className="font-mono text-sm tracking-[0.25em] mb-6" style={{ color: '#6AAD8A' }}>start now</p>
        <h2 className="font-display italic text-[clamp(28px,4vw,52px)] text-ink leading-tight mb-8">
          Five quizzes.<br />Your number. Your plan.
        </h2>
        <a href="https://wealth.ritualware.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-sm px-8 py-4 rounded-full transition-colors hover:opacity-90"
          style={{ backgroundColor: '#6AAD8A', color: '#FAF7F2' }}>
          Open Ritualwealth →
        </a>
      </div>

    </main>
  )
}
