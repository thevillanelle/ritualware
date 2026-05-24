import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

export default function Home() {
  return (
    <main>
      <section className="relative flex items-center overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute right-0 top-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4919A, #A89BC4)' }} />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display leading-[1.05] text-ink mb-6"
            style={{ fontSize: 'clamp(48px,7vw,96px)' }}>
            You don't need<br />
            <span className="italic text-rose">another routine.</span><br />
            You need a ritual.
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.4 }}
            className="h-px w-16 mb-8 origin-left" style={{ background: 'var(--amber)' }}/>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="flex flex-wrap gap-3">
            {['Ritualwear', 'Glow Up', 'Ritualwhere?', 'Doubles', "m'atelier"].map(chip => (
              <span key={chip} className="font-mono text-sm text-ink bg-cream-alt border border-ink/15 px-4 py-2 rounded-full">
                {chip}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <Marquee />

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-5 mb-5">
          <Link to="/platform" className="md:col-span-3 block bg-cream-dark rounded-3xl p-10 group lift warm-shadow">
            <p className="font-mono text-xs text-amber tracking-[0.2em] mb-3">the platform</p>
            <h2 className="font-display text-4xl mb-3 group-hover:text-rose transition-colors" style={{ color: '#FAF7F2' }}>
              Ritualwear · Glow Up · Ritualwhere?
            </h2>
            <p className="font-serif italic text-lg mb-1" style={{ color: '#C8BFB0' }}>
              Three tools. One login. Everything you learn in one updates everything else.
            </p>
            <p className="font-mono text-xs text-amber mt-4">Explore the platform →</p>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <Link to="/doubles" className="block bg-cream-alt rounded-3xl p-8 lift warm-shadow border border-ink/8 group">
            <p className="font-mono text-xs text-rose tracking-[0.2em] mb-3">doubles</p>
            <h3 className="font-display text-3xl text-ink mb-3 group-hover:text-rose transition-colors">EQX Doubles Finder</h3>
            <p className="font-sans text-base text-ink-muted leading-relaxed mb-4">
              Find two classes that actually work together — matched by type, timed for real travel, across all 36 NYC Equinox locations.
            </p>
            <p className="font-mono text-xs text-rose">View Doubles →</p>
          </Link>
          <Link to="/matelier" className="block bg-cream-alt rounded-3xl p-8 lift warm-shadow border border-ink/8 group">
            <p className="font-mono text-xs text-amber tracking-[0.2em] mb-3">m'atelier</p>
            <h3 className="font-display italic text-3xl text-ink mb-3 group-hover:text-amber transition-colors">m'atelier</h3>
            <p className="font-sans text-base text-ink-muted leading-relaxed mb-4">
              Your personal studio. Track what you're working on, what you know, and where you want to go.
            </p>
            <p className="font-mono text-xs text-amber">View m'atelier →</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
