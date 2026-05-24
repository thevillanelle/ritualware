import { motion } from 'framer-motion'

export default function Doubles() {
  return (
    <main className="pt-32 pb-24">

      <div className="px-6 md:px-16 max-w-5xl mx-auto mb-20">
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

      <div className="bg-cream-alt py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm text-amber tracking-[0.25em] mb-4">the problem</p>
            <p className="font-sans text-lg text-ink leading-relaxed mb-4">
              Booking back-to-back classes across New York's Equinox network is genuinely complex. Which two classes pair well? Do the times actually work? Is the second location walkable or a 40-minute subway ride? Which clubs have a pool, a steam room, towel service?
            </p>
            <p className="font-sans text-lg text-ink-muted leading-relaxed">
              No tool existed to answer all of it together. This one does.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm text-amber tracking-[0.25em] mb-4">what it surfaces</p>
            <ul className="space-y-3">
              {[
                'Compatible class pairings across all 36 NYC locations',
                'Real travel time between clubs — walking, subway, or transfer',
                'Club amenities — pool, steam room, towel service',
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

      <div className="bg-cream-dark py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-2xl leading-relaxed" style={{ color: '#FAF7F2' }}>
            One algorithm. Three platforms. The same result — wherever you use it.
          </p>
        </div>
      </div>

      <div className="py-16 px-6 max-w-5xl mx-auto">
        <p className="font-mono text-sm text-amber tracking-[0.25em] mb-10">available on</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: '01', title: 'Web', accent: '#D4919A', desc: 'Open in any browser. Search by class type, location, and time window.' },
            { num: '02', title: 'Web — Optimized', accent: '#8FA688', desc: 'A faster, cleaner version of the web app. Same results.' },
            { num: '03', title: 'iOS', accent: '#A89BC4', desc: 'Native iPhone app. Search, browse pairings, and get subway directions from your phone.' },
          ].map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-cream-alt rounded-2xl p-6 border-t-2"
              style={{ borderTopColor: p.accent }}>
              <span className="font-display text-5xl block mb-3" style={{ color: p.accent, opacity: 0.3 }}>{p.num}</span>
              <h3 className="font-display text-2xl text-ink mb-2">{p.title}</h3>
              <p className="font-sans text-base text-ink-muted leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <a href="https://github.com/thevillanelle/eqx-doubles" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm text-rose border border-rose px-6 py-3 rounded-full hover:bg-rose hover:text-cream-DEFAULT transition-colors">
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
