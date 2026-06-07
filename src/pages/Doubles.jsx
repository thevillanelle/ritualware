import { motion } from 'framer-motion'
import { useEffect } from 'react'

const BG = '#050505'
const GREEN = '#c8f23a'
const GREEN_DIM = 'rgba(200,242,58,0.6)'
const GREEN_FAINT = 'rgba(200,242,58,0.15)'
const MUTED = '#666'

export default function Doubles() {
  // Force black bg + green accents on nav and footer while on this page
  useEffect(() => {
    document.body.classList.add('doubles-page')
    return () => document.body.classList.remove('doubles-page')
  }, [])

  return (
    <main style={{ background: BG, minHeight: '100vh' }}>

      {/* Hero */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: GREEN }}>doubles</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display leading-none mb-6"
          style={{ fontSize: 'clamp(52px,8vw,100px)', color: '#FAF7F2' }}>
          EQX Doubles<br /><span className="italic" style={{ color: GREEN }}>Finder</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-2xl max-w-xl" style={{ color: MUTED }}>
          Two classes. Real travel time. Every combination that actually works across all 36 NYC Equinox locations.
        </motion.p>
      </div>

      {/* What it does */}
      <div className="py-28 px-6" style={{ background: '#0a0a0a', borderTop: `1px solid ${GREEN_FAINT}`, borderBottom: `1px solid ${GREEN_FAINT}` }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: GREEN }}>the problem</p>
            <p className="font-sans text-lg leading-relaxed mb-5" style={{ color: '#C8C0B8' }}>
              Booking back-to-back classes across New York's Equinox network is genuinely complex. Which two classes pair well? Do the times actually work? Is the second location walkable or a 40-minute subway ride? Which clubs have a pool, a steam room, towel service?
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: MUTED }}>
              No tool existed to answer all of it together. This one does.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: GREEN }}>what you get</p>
            <ul className="space-y-4">
              {[
                'Compatible class pairings across all 36 NYC locations',
                'Real travel time between clubs, walking, subway, or transfer',
                'Club amenities at a glance, pool, steam room, towel service',
                'Nearest subway lines to each location with MTA color badges',
                "Tomorrow's best pairings waiting when you open it",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans text-base" style={{ color: '#B0A898' }}>
                  <span className="mt-0.5 shrink-0" style={{ color: GREEN }}>✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Three platforms */}
      <div className="py-32 px-6" style={{ background: BG }}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-serif italic text-2xl leading-relaxed" style={{ color: GREEN }}>
            Find your doubles.
          </p>
          <p className="font-sans text-lg mt-4" style={{ color: MUTED }}>
            Available on web, server, and iOS.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { num: '01', title: 'Web', desc: 'Open it in any browser. Search by class type, location, and time window. Results and transit info load instantly.' },
            { num: '02', title: 'Web, Server', desc: 'A faster, optimized version running on a dedicated server. Same results, smarter rendering.' },
            { num: '03', title: 'iOS', desc: 'Native iPhone app. Search, browse pairings, and get subway directions, all from your phone.' },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: GREEN_FAINT, border: `1px solid rgba(200,242,58,0.2)` }}>
              <span className="font-display text-5xl block mb-3" style={{ color: GREEN, opacity: 0.25 }}>{p.num}</span>
              <h3 className="font-display text-2xl mb-2" style={{ color: '#FAF7F2' }}>{p.title}</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: MUTED }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="https://thevillanelle.github.io/eqx-doubles/index.html" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm px-6 py-3 rounded-full transition-all hover:opacity-80"
            style={{ border: `1px solid rgba(200,242,58,0.5)`, color: GREEN }}>
            Web App →
          </a>
          <a href="https://web-production-31654.up.railway.app" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm px-6 py-3 rounded-full transition-all hover:opacity-80"
            style={{ border: `1px solid rgba(200,242,58,0.2)`, color: MUTED }}>
            Python Server →
          </a>
          <a href="https://github.com/thevillanelle/eqx-doubles-ios" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm px-6 py-3 rounded-full transition-all hover:opacity-80"
            style={{ border: `1px solid rgba(200,242,58,0.2)`, color: MUTED }}>
            iOS App →
          </a>
        </div>
      </div>

    </main>
  )
}
