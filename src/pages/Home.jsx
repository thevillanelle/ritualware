import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        {/* Decorative blobs */}
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4919A, #A89BC4)' }} />
        <div className="absolute right-24 bottom-1/4 w-64 h-64 rounded-full opacity-15 blur-2xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C4956A, #8FA688)' }} />

        <div className="relative z-10 px-6 md:px-16 max-w-6xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-mono text-xs text-amber tracking-[0.25em] mb-8">ritualware ✦</motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="font-display text-[clamp(52px,8vw,120px)] leading-[1.0] text-ink mb-8 max-w-3xl">
            You don&apos;t need<br />
            <span className="italic text-rose">another routine.</span><br />
            You need a ritual.
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.5 }}
            className="h-px bg-amber w-24 mb-8 origin-left" />

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="font-serif italic text-xl text-ink/60 max-w-lg mb-4">
            Three tools. One framework. Built on the personal philosophy of Elle Porcher.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
            className="font-sans text-ink/60 max-w-lg mb-10">
            A lifestyle platform that makes your personal systems interactive, personalized, and intelligent — where intelligence earns its place.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-3">
            {['✦ Ritualwear', '✦ Glow Up', '✦ Ritualwhere?'].map(chip => (
              <span key={chip} className="font-mono text-xs text-ink bg-cream-alt border border-ink/15 px-4 py-2 rounded-full">{chip}</span>
            ))}
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* Quick links */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { to: '/platform', label: 'The Platform', desc: 'One database. Three tools.' },
            { to: '/doubles', label: 'Doubles', desc: 'Three rewrites, one function.' },
            { to: '/matelier', label: "m'atelier", desc: 'Personal scale intelligence.' },
            { to: '/apps', label: 'The Apps', desc: 'Ritualwear · Glow Up · Ritualwhere?' },
          ].map((item, i) => (
            <motion.div key={item.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Link to={item.to}
                className="block bg-cream-alt rounded-2xl p-6 lift warm-shadow border border-ink/[0.08] group">
                <h3 className="font-display text-lg text-ink mb-2 group-hover:text-rose transition-colors">{item.label}</h3>
                <p className="font-sans text-xs text-ink/60">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
