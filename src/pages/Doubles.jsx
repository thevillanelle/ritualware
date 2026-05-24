import { motion } from 'framer-motion'

export default function Doubles() {
  return (
    <main className="pt-32 pb-24">

      {/* Hero */}
      <div className="px-6 md:px-16 max-w-6xl mx-auto mb-24">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-xs text-amber tracking-[0.25em] mb-4">eqx doubles finder</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display text-[clamp(48px,7vw,100px)] leading-none text-ink mb-6">
          EQX Doubles<br /><span className="italic text-rose">Finder</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-xl text-ink-muted max-w-xl">
          Two classes. One city. Every combination that actually works — surfaced instantly.
        </motion.p>
      </div>

      {/* What it is */}
      <div className="bg-cream-alt py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-mono text-xs text-amber tracking-[0.25em] mb-4">the problem</p>
              <p className="font-sans text-ink leading-relaxed mb-4">
                Equinox has dozens of locations across New York. Booking back-to-back classes across the network is genuinely complex — class type pairing, travel time between clubs, amenities, instructor subs, schedule changes. No tool existed to answer all of it together.
              </p>
              <p className="font-sans text-ink-muted leading-relaxed">
                The mental overhead was real and recurring. So the tool got built.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-amber tracking-[0.25em] mb-4">what it does</p>
              <ul className="space-y-3">
                {[
                  'Pairs compatible class types across the full NYC Equinox network',
                  'Validates travel time between club locations',
                  'Surfaces amenity data — pool, steam, towel service',
                  'Shows nearest subway lines to each club',
                  'Ingests live schedules from PDFs every 6 hours automatically',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 font-sans text-sm text-ink-muted">
                    <span className="text-rose mt-0.5 shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The through-line */}
      <div className="bg-cream-dark py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ transform: 'rotate(-0.8deg)' }}>
            <p className="font-display italic text-[clamp(22px,3.5vw,42px)] leading-tight mb-6" style={{ color: '#FAF7F2' }}>
              "The core logic — <span style={{ color: '#C4956A' }}>find_doubles()</span> —
              was written once in Phase 1.
              It ran behind a Python server in Phase 2.
              It runs inside a native iOS app in Phase 3.
              Three complete rewrites. Zero changes to the algorithm."
            </p>
            <p className="font-mono text-xs text-amber tracking-[0.2em]">The architecture gets iterated. The core logic doesn't.</p>
          </motion.blockquote>
        </div>
      </div>

      {/* Three platforms */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-amber tracking-[0.25em] mb-10">three platforms</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              num: '01', title: 'Web App', accent: '#D4919A',
              stack: 'HTML · JavaScript · PLpgSQL · Supabase',
              desc: 'Browser-based SPA. Supabase backend. GitHub Actions pulls fresh schedules from public PDFs every six hours.',
            },
            {
              num: '02', title: 'Python Server', accent: '#8FA688',
              stack: 'Python · Flask · Jinja2 · Railway',
              desc: 'Flask server in the middle. Credentials off the client. Server-side rendering. Deployable to Railway in one command.',
            },
            {
              num: '03', title: 'iOS App', accent: '#A89BC4',
              stack: 'Swift · SwiftUI · Xcode · async/await',
              desc: 'Native iPhone app. Typed Swift structs, reactive state with @Published, async/await service layer. Runs in the iOS Simulator.',
            },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-cream-alt rounded-2xl p-6 border-t-2"
              style={{ borderTopColor: p.accent }}>
              <span className="font-display text-5xl block mb-3" style={{ color: p.accent, opacity: 0.3 }}>{p.num}</span>
              <h3 className="font-display text-2xl text-ink mb-2">{p.title}</h3>
              <p className="font-sans text-sm text-ink-muted leading-relaxed mb-4">{p.desc}</p>
              <p className="font-mono text-xs text-ink-muted/70">{p.stack}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="https://github.com/thevillanelle/eqx-doubles" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm text-rose border border-rose px-6 py-3 rounded-full hover:bg-rose hover:text-cream transition-colors">
            View Web App →
          </a>
          <a href="https://github.com/thevillanelle/eqx-doubles-ios" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm text-ink-muted border border-ink/20 px-6 py-3 rounded-full hover:border-ink-muted transition-colors">
            View iOS Repo →
          </a>
        </div>
      </div>

    </main>
  )
}
