import { motion } from 'framer-motion'

const apps = [
  {
    question: 'What do I wear?',
    title: 'Ritualwear',
    accent: 'rose',
    accentHex: '#D4919A',
    glow: 'rose-glow',
    body: 'The Style Bible captures your Kibbe type, color season, fabric preferences, and style philosophy across 32 questions with branching logic. The Oracle — powered by Gemini 2.5 Flash and live weather from Open-Meteo — generates full outfit recommendations structured into silhouette, outfit, shoes, bag, jewelry, lip, nails, and fragrance. A Pexels mood board pulls alongside each result.',
    note: "The Oracle isn't giving generic advice. It's applying a specific philosophy to a specific person's profile. That's a different product.",
    stack: ['React 18', 'Vite', 'Gemini 2.5 Flash', 'Open-Meteo', 'Pexels', 'Supabase'],
    href: 'https://vile-style-oracle.vercel.app',
  },
  {
    question: 'How do I look?',
    title: 'Glow Up',
    accent: 'sage',
    accentHex: '#8FA688',
    glow: 'sage-glow',
    body: 'A professional-grade beauty and lifestyle audit modeled on the Glow Up Pyramid. 42 questions across 12 categories: skin, sleep, nutrition, fitness, hair, makeup, body grooming, teeth, fragrance, professional services, fashion, and mindset. AI generates a scorecard with section verdicts, quick wins, a week-one action plan, a month-one plan, and non-negotiables.',
    note: "42 questions is intentional. The philosophy: the app should feel like it knows you. That doesn't happen at 10.",
    stack: ['React 18', 'Vite', 'Gemini 2.5 Flash', 'Supabase', 'Tailwind CSS'],
    href: 'https://glowup.vercel.app',
  },
  {
    question: 'Where do I go?',
    title: 'Ritualwhere?',
    accent: 'lavender',
    accentHex: '#A89BC4',
    glow: 'lavender-glow',
    body: "NYC life strategy built directly from Elle's Guide to Thriving in New York City. A 14-question neighborhood quiz, a third space finder that matches venues to personal goals, and an interactive Leaflet.js map of 26 venues — labeled, categorized, and filterable. The 26 mapped venues are her direct recommendations — not a Yelp pull.",
    note: 'Mathematical scoring by default. Toggle on AI and it writes a personal narrative about your life in that neighborhood. Not every feature needs intelligence.',
    stack: ['React 18', 'Vite', 'Leaflet.js', 'Supabase', 'Gemini 2.5 Flash'],
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
            className={`bg-cream-alt rounded-3xl p-8 md:p-10 lift border-l-4 warm-shadow ${app.glow}`}
            style={{ borderLeftColor: app.accentHex }}>
            <p className="font-serif italic text-ink/60 text-lg mb-1">{app.question}</p>
            <h2 className="font-display text-3xl text-ink mb-4">{app.title}</h2>
            <p className="font-sans text-ink leading-relaxed mb-4 max-w-2xl">{app.body}</p>
            <p className="font-serif italic text-ink/60 mb-6 max-w-xl text-sm">{app.note}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {app.stack.map(t => (
                <span key={t} className="font-mono text-xs px-3 py-1 rounded-full border border-ink/15 text-ink/60">{t}</span>
              ))}
            </div>
            <a href={app.href} target="_blank" rel="noopener noreferrer"
              className="inline-block font-mono text-sm px-6 py-3 rounded-full text-cream transition-colors"
              style={{ backgroundColor: app.accentHex }}>
              Launch {app.title} →
            </a>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
