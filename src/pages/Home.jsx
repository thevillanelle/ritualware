import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

const chips = [
  { label: 'Ritualwear', to: '/ritualwear' },
  { label: 'Glow Up', to: '/glowup' },
  { label: 'Ritualwhere?', to: '/ritualwhere' },
  { label: 'Doubles', to: '/doubles' },
  { label: "m'atelier", to: '/matelier' },
]

export default function Home() {
  return (
    <main>
      {/* Hero — tall, breathing, unhurried */}
      <section className="relative flex items-center overflow-hidden"
        style={{ minHeight: '90vh', paddingTop: '10rem', paddingBottom: '8rem' }}>
        <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4919A, #A89BC4)' }} />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display leading-[1.05] text-ink"
            style={{ fontSize: 'clamp(52px,7vw,104px)', marginBottom: '3rem' }}>
            You don't need<br />
            <span className="italic text-rose">another routine.</span><br />
            You need a ritual.
          </motion.h1>

          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.4 }}
            className="h-px w-16 origin-left" style={{ background: 'var(--amber)', marginBottom: '3.5rem' }}/>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
            className="flex flex-wrap gap-4">
            {chips.map(chip => (
              <Link key={chip.to} to={chip.to}
                className="font-mono text-sm text-ink bg-cream-alt border border-ink/15 px-6 py-3 rounded-full hover:border-rose hover:text-rose transition-colors">
                {chip.label}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* Cards section — generous gap above and below */}
      <section style={{ padding: '7rem 1.5rem 8rem' }}>
        <div className="max-w-6xl mx-auto">
          {/* Platform card */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Link to="/platform" className="block bg-cream-dark rounded-3xl lift warm-shadow group"
              style={{ padding: '3.5rem' }}>
              <p className="font-mono text-xs text-amber tracking-[0.2em]" style={{ marginBottom: '1.25rem' }}>the platform</p>
              <h2 className="font-display group-hover:text-rose transition-colors"
                style={{ fontSize: 'clamp(28px,4vw,48px)', color: '#FAF7F2', marginBottom: '1rem' }}>
                Ritualwear · Glow Up · Ritualwhere?
              </h2>
              <p className="font-serif italic text-lg" style={{ color: '#C8BFB0', marginBottom: '0.5rem' }}>
                Three tools. One login. Everything you learn in one updates everything else.
              </p>
              <p className="font-mono text-xs text-amber" style={{ marginTop: '1.5rem' }}>Explore the platform →</p>
            </Link>
          </div>

          {/* Doubles + m'atelier */}
          <div className="grid md:grid-cols-2" style={{ gap: '1.5rem' }}>
            <Link to="/doubles" className="block bg-cream-alt rounded-3xl lift warm-shadow border border-ink/8 group"
              style={{ padding: '2.5rem' }}>
              <p className="font-mono text-xs text-rose tracking-[0.2em]" style={{ marginBottom: '1rem' }}>doubles</p>
              <h3 className="font-display text-3xl text-ink group-hover:text-rose transition-colors" style={{ marginBottom: '1rem' }}>EQX Doubles Finder</h3>
              <p className="font-sans text-base text-ink-muted leading-relaxed" style={{ marginBottom: '1.5rem' }}>
                Find two classes that actually work together — matched by type, timed for real travel, across all 36 NYC Equinox locations.
              </p>
              <p className="font-mono text-xs text-rose">View Doubles →</p>
            </Link>
            <Link to="/matelier" className="block bg-cream-alt rounded-3xl lift warm-shadow border border-ink/8 group"
              style={{ padding: '2.5rem' }}>
              <p className="font-mono text-xs text-amber tracking-[0.2em]" style={{ marginBottom: '1rem' }}>m'atelier</p>
              <h3 className="font-display italic text-3xl text-ink group-hover:text-amber transition-colors" style={{ marginBottom: '1rem' }}>m'atelier</h3>
              <p className="font-sans text-base text-ink-muted leading-relaxed" style={{ marginBottom: '1.5rem' }}>
                Your personal studio. Track what you're working on, what you know, and where you want to go.
              </p>
              <p className="font-mono text-xs text-amber">View m'atelier →</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
