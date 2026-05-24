import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div className="absolute right-0 top-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4919A, #A89BC4)' }} />
        <div className="absolute right-24 bottom-1/4 w-64 h-64 rounded-full opacity-15 blur-2xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C4956A, #8FA688)' }} />

        <div className="relative z-10 px-6 md:px-16 max-w-6xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="font-mono text-xs text-amber tracking-[0.25em] mb-8">ritualware ✦</motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.7 }}
            className="font-display text-[clamp(52px,8vw,120px)] leading-[1.0] text-ink mb-8 max-w-3xl">
            You don't need<br />
            <span className="italic text-rose">another routine.</span><br />
            You need a ritual.
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.5 }}
            className="h-px bg-amber w-24 mb-8 origin-left" />

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="font-serif italic text-xl text-ink-muted max-w-lg mb-4">
            A suite of applications built around real personal frameworks — deployed, running, and in use.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
            className="font-sans text-ink-muted max-w-lg mb-10">
            Three lifestyle tools sharing one backend. A workout pairing app rebuilt across three platforms. A personal intelligence system that scales enterprise architecture to household size.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-3">
            {['✦ Ritualwear', '✦ Glow Up', '✦ Ritualwhere?', '✦ Doubles', "✦ m'atelier"].map(chip => (
              <span key={chip} className="font-mono text-xs text-ink bg-cream-alt border border-ink/15 px-4 py-2 rounded-full">{chip}</span>
            ))}
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* Applications grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <p className="font-mono text-xs text-amber tracking-[0.25em] mb-10">the applications</p>
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* The Platform — full width top */}
          <Link to="/platform" className="md:col-span-3 block bg-cream-dark rounded-3xl p-10 group lift warm-shadow">
            <p className="font-mono text-xs text-amber tracking-[0.2em] mb-3">the platform</p>
            <h2 className="font-display text-4xl mb-3 group-hover:text-rose transition-colors" style={{ color: '#FAF7F2' }}>
              Ritualwear · Glow Up · Ritualwhere?
            </h2>
            <p className="font-serif italic text-lg mb-1" style={{ color: '#C8BFB0' }}>
              Three lifestyle tools. One shared database. Built on Elle Porcher's personal frameworks.
            </p>
            <p className="font-mono text-xs text-amber mt-4">Explore the platform →</p>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <Link to="/doubles"
            className="block bg-cream-alt rounded-3xl p-8 lift warm-shadow border border-ink/8 group">
            <p className="font-mono text-xs text-rose tracking-[0.2em] mb-3">doubles</p>
            <h3 className="font-display text-3xl text-ink mb-3 group-hover:text-rose transition-colors">EQX Doubles Finder</h3>
            <p className="font-sans text-sm text-ink-muted leading-relaxed mb-4">
              The same core algorithm running across three complete platform rewrites — browser SPA, Python server, and native iOS. find_doubles() written once. Running everywhere.
            </p>
            <p className="font-mono text-xs text-rose">View Doubles →</p>
          </Link>
          <Link to="/matelier"
            className="block bg-cream-alt rounded-3xl p-8 lift warm-shadow border border-ink/8 group">
            <p className="font-mono text-xs text-amber tracking-[0.2em] mb-3">m'atelier</p>
            <h3 className="font-display italic text-3xl text-ink mb-3 group-hover:text-amber transition-colors">m'atelier</h3>
            <p className="font-sans text-sm text-ink-muted leading-relaxed mb-4">
              Enterprise team intelligence scaled to personal size. The proof of concept that validated the architecture for a 100-person production system.
            </p>
            <p className="font-mono text-xs text-amber">View m'atelier →</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
