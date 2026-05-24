import { motion } from 'framer-motion'

const phases = [
  {
    num: '01',
    title: 'The SPA',
    arch: 'Browser → Supabase (direct)',
    desc: 'Class schedule ingestion from public PDFs every 6 hours via GitHub Actions. find_doubles() in PLpgSQL — matching types, validating time windows, filtering by location. No server. No credentials security. But the algorithm was right.',
    stack: 'HTML · JavaScript · PLpgSQL · Supabase · GitHub Actions',
  },
  {
    num: '02',
    title: 'The Python Rewrite',
    arch: 'Browser → Flask → Supabase',
    desc: 'Credentials moved off the client. Server-side rendering via Jinja2. The find_doubles() function unchanged. The architecture around it, replaced.',
    stack: 'Python · Flask · Jinja2 · Supabase · Railway',
  },
  {
    num: '03',
    title: 'The iOS App',
    arch: 'Swift + SwiftUI + Xcode',
    desc: 'Same Supabase backend. Same find_doubles() function via REST API. Everything about how the code executes: completely different. Models/ · Services/ · Views/ · ViewModel.',
    stack: 'Swift · SwiftUI · Xcode · Supabase · MVVM · Async/Await',
  },
]

export default function Doubles() {
  return (
    <main className="pt-32 pb-24">
      <div className="px-6 max-w-6xl mx-auto mb-16">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-xs text-amber tracking-[0.25em] mb-4">case study</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display text-[clamp(40px,6vw,80px)] text-ink mb-4">EQX Doubles Finder</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-xl text-ink/60">A personal problem. Built to production across three iterations.</motion.p>
      </div>

      {/* Dark phase section */}
      <div className="bg-cream-dark py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {phases.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="border border-amber/20 rounded-2xl p-6">
                <span className="font-display text-5xl text-amber/30 block mb-2">{p.num}</span>
                <h3 className="font-display text-xl mb-2 text-cream">{p.title}</h3>
                <p className="font-mono text-xs text-amber mb-3">{p.arch}</p>
                <p className="font-sans text-sm leading-relaxed mb-4 text-cream/70">{p.desc}</p>
                <p className="font-mono text-xs text-cream/40">{p.stack}</p>
              </motion.div>
            ))}
          </div>

          <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto" style={{ transform: 'rotate(-0.5deg)' }}>
            <p className="font-display italic text-[clamp(22px,3vw,36px)] leading-relaxed text-cream">
              &ldquo;find_doubles() was written once. In Phase 1.<br />
              It ran in Phase 2. It ran in Phase 3.<br />
              Three rewrites of the application layer.<br />
              Zero rewrites of the core logic.&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </div>
    </main>
  )
}
