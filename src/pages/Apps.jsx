import { motion } from 'framer-motion'

const apps = [
  {
    question: 'What do I wear?',
    title: 'Ritualwear',
    accentHex: '#D4919A',
    body: 'Answer 32 questions about your Kibbe type, color season, fabric preferences, and personal style philosophy. Then tell it where you are and what you\'re doing. It builds a complete outfit — silhouette, clothes, shoes, bag, jewelry, lip, nails, and fragrance — for exactly you, right now.',
    note: "It isn't generating generic outfit advice. It's applying Elle's actual style rules to your specific profile. That's a different product.",
    href: 'https://vile-style-oracle.vercel.app',
  },
  {
    question: 'How do I look?',
    title: 'Glow Up',
    accentHex: '#8FA688',
    body: '42 honest questions across 12 categories: skin, sleep, nutrition, fitness, hair, makeup, body grooming, teeth, fragrance, professional services, fashion, and mindset. You get a real scorecard — what\'s working, what isn\'t, quick wins for this week, a plan for next month, and the non-negotiables that don\'t move.',
    note: '42 questions is intentional. The app should feel like it knows you. That doesn\'t happen at 10.',
    href: 'https://glowup.vercel.app',
  },
  {
    question: 'Where do I go?',
    title: 'Ritualwhere?',
    accentHex: '#A89BC4',
    body: 'A 14-question quiz that scores New York neighborhoods against your actual criteria — commute tolerance, proximity to your wellness spots, aesthetic match, and the specific neighborhoods Elle names in her guide. A third space finder matched to your goals. A map of 26 venues she actually recommends.',
    note: 'The quiz scores mathematically. Toggle on AI and it writes a personal narrative about your life in that neighborhood.',
    href: 'https://ritualwhere.vercel.app',
  },
]

export default function Apps() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="font-mono text-xs text-amber tracking-[0.25em] mb-4">the apps</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        className="font-display text-[clamp(40px,6vw,80px)] text-ink mb-16">Three Questions.</motion.h1>

      <div className="space-y-8">
        {apps.map((app, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="bg-cream-alt rounded-3xl p-8 md:p-10 lift warm-shadow border-l-4"
            style={{ borderLeftColor: app.accentHex }}>
            <p className="font-serif italic text-ink-muted text-lg mb-1">{app.question}</p>
            <h2 className="font-display text-3xl text-ink mb-5">{app.title}</h2>
            <p className="font-sans text-ink leading-relaxed mb-4 max-w-2xl">{app.body}</p>
            <p className="font-serif italic text-ink-muted mb-8 max-w-xl text-sm">{app.note}</p>
            <a href={app.href} target="_blank" rel="noopener noreferrer"
              className="inline-block font-mono text-sm px-6 py-3 rounded-full text-cream-DEFAULT transition-colors hover:opacity-90"
              style={{ backgroundColor: app.accentHex }}>
              Open {app.title} →
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
