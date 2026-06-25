import { motion } from 'framer-motion'

const BG = '#050810'
const BLUE = '#38bdf8'
const BLUE_DIM = 'rgba(56,189,248,0.6)'
const BLUE_FAINT = 'rgba(56,189,248,0.08)'
const MUTED = '#475569'

export default function Atlas() {
  return (
    <main style={{ background: BG, minHeight: '100vh' }}>

      {/* Hero */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: BLUE }}>
          global intelligence feed
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display leading-none mb-6"
          style={{ fontSize: 'clamp(52px,8vw,100px)', color: '#f0f6ff' }}>
          ATL<span className="italic" style={{ color: BLUE }}>A</span>S
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-2xl max-w-xl" style={{ color: MUTED }}>
          The world is always moving. ATLAS puts all of it on a globe, live, right now.
        </motion.p>
      </div>

      {/* What it does */}
      <div className="py-28 px-6" style={{ background: '#070d1a', borderTop: `1px solid ${BLUE_FAINT}`, borderBottom: `1px solid ${BLUE_FAINT}` }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: BLUE }}>what it is</p>
            <p className="font-sans text-lg leading-relaxed mb-5" style={{ color: '#94a3b8' }}>
              ATLAS is a live global intelligence feed rendered on a 3D globe. Breaking news, armed conflicts, natural disasters, financial markets, rocket launches, and the night sky — all pulled from live APIs and pinned to where they're actually happening.
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: MUTED }}>
              It's the overview effect as a dashboard. The world at a glance, every time you open it.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: BLUE }}>what you get</p>
            <ul className="space-y-4">
              {[
                '14 live feeds — news, conflicts, disasters, markets, launches, fashion, astronomy',
                'Planets and stars rendered in real-time orbital positions',
                'The Sun and terminator line showing day and night live',
                'Connect any two events to find what links them',
                'Travel back in time to any date and location',
                'Save events, build watchlists, get alerts',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans text-base" style={{ color: '#64748b' }}>
                  <span className="mt-0.5 shrink-0" style={{ color: BLUE }}>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-32 px-6 text-center" style={{ background: BG }}>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="font-serif italic text-2xl leading-relaxed mb-10" style={{ color: BLUE_DIM }}>
          What's happening in the world right now?
        </motion.p>
        <a href="https://atlas.ritualware.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-sm px-8 py-4 rounded-full transition-all hover:opacity-80"
          style={{ background: BLUE_FAINT, border: `1px solid rgba(56,189,248,0.3)`, color: BLUE }}>
          Open ATLAS →
        </a>
      </div>

    </main>
  )
}
