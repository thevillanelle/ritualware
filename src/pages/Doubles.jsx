import { motion } from 'framer-motion'

export default function Doubles() {
  return (
    <main className="pt-36 pb-28">

      {/* Hero */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-28">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm text-amber tracking-[0.25em] mb-5">doubles</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display leading-none text-ink mb-6"
          style={{ fontSize: 'clamp(52px,8vw,100px)' }}>
          EQX Doubles<br /><span className="italic text-rose">Finder</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-2xl text-ink-muted max-w-xl">
          Two classes. Real travel time. Every combination that actually works — across all 36 NYC Equinox locations.
        </motion.p>
      </div>

      {/* What it does */}
      <div className="bg-cream-alt py-32 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm text-amber tracking-[0.25em] mb-5">the problem</p>
            <p className="font-sans text-lg text-ink leading-relaxed mb-5">
              Booking back-to-back classes across New York's Equinox network is genuinely complex. Which two classes pair well? Do the times actually work? Is the second location walkable or a 40-minute subway ride? Which clubs have a pool, a steam room, towel service?
            </p>
            <p className="font-sans text-lg text-ink-muted leading-relaxed">
              No tool existed to answer all of it together. This one does.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm text-amber tracking-[0.25em] mb-5">what you get</p>
            <ul className="space-y-4">
              {[
                'Compatible class pairings across all 36 NYC locations',
                'Real travel time between clubs — walking, subway, or transfer',
                'Club amenities at a glance — pool, steam room, towel service',
                'Nearest subway lines to each location',
                'Tomorrow\'s best pairings waiting when you open it',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans text-base text-ink-muted">
                  <span className="text-rose mt-0.5 shrink-0">✦</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* The signature aesthetic — black + lime green */}
      <div className="py-36 px-6" style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #050505 100%)' }}>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-serif italic text-2xl leading-relaxed" style={{ color: '#c8f23a' }}>
            Find your doubles.
          </p>
          <p className="font-sans text-lg mt-4" style={{ color: '#888' }}>
            Available on web, server, and iOS.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { num: '01', title: 'Web', color: '#c8f23a', desc: 'Open it in any browser. Search by class type, location, and time window. Results and transit info load instantly.' },
            { num: '02', title: 'Web — Server', color: '#c8f23a', desc: 'A faster, optimized version running on a dedicated server. Same results, smarter rendering.' },
            { num: '03', title: 'iOS', color: '#c8f23a', desc: 'Native iPhone app. Search, browse pairings, and get subway directions — all from your phone.' },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-2xl p-6"
              style={{ background: 'rgba(200,242,58,0.05)', border: '1px solid rgba(200,242,58,0.15)' }}>
              <span className="font-display text-5xl block mb-3" style={{ color: p.color, opacity: 0.25 }}>{p.num}</span>
              <h3 className="font-display text-2xl mb-2" style={{ color: '#FAF7F2' }}>{p.title}</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#888' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="https://thevillanelle.github.io/eqx-doubles/index.html" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm px-6 py-3 rounded-full transition-all"
            style={{ border: '1px solid rgba(200,242,58,0.4)', color: '#c8f23a' }}>
            Web App →
          </a>
          <a href="https://web-production-31654.up.railway.app" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm px-6 py-3 rounded-full transition-all"
            style={{ border: '1px solid rgba(200,242,58,0.2)', color: '#888' }}>
            Python Server →
          </a>
          <a href="https://github.com/thevillanelle/eqx-doubles-ios" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm px-6 py-3 rounded-full transition-all"
            style={{ border: '1px solid rgba(200,242,58,0.2)', color: '#888' }}>
            iOS App →
          </a>
        </div>
      </div>

    </main>
  )
}
