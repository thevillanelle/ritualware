import { motion } from 'framer-motion'

export default function Platform() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="font-mono text-xs text-amber tracking-[0.25em] mb-4">the platform</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="font-display text-[clamp(40px,6vw,80px)] text-ink mb-16">Three Questions. One Home.</motion.h1>

      <div className="grid md:grid-cols-5 gap-12 mb-20">
        <div className="md:col-span-3">
          <p className="font-sans text-ink leading-relaxed mb-6">
            Ritualware started as a set of personal frameworks — a style philosophy built around Kibbe typing and color season analysis, a beauty and wellness hierarchy called the Glow Up Pyramid, and a practical guide to thriving in New York City. The frameworks existed before the software did. The question was how to make something that already had a point of view feel like a real product.
          </p>
          <p className="font-sans text-ink/60 leading-relaxed">
            The answer was three separate tools sharing one backend, one login, and one user profile — so that the data from each cross-references in a single client view.
          </p>
        </div>
        <div className="md:col-span-2">
          <div className="bg-cream-dark text-cream p-6 rounded-2xl font-mono text-sm leading-loose">
            <p className="text-rose">Ritualwear</p>
            <p className="text-sage">Glow Up {'  '}────→ Supabase</p>
            <p className="text-lavender">Ritualwhere?{'      '}PostgreSQL</p>
            <p className="text-amber mt-2">7 tables</p>
            <p className="text-amber">Google OAuth</p>
            <p className="text-amber">Row Level Security</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-6 border-t border-ink/10 pt-10">
        {['7 tables', '1 shared login', '3 deployments', '1 framework'].map(stat => (
          <div key={stat} className="bg-cream-alt rounded-xl px-6 py-3">
            <span className="font-serif italic text-ink text-lg">{stat}</span>
          </div>
        ))}
      </div>
    </main>
  )
}
