import { motion } from 'framer-motion'

const BG = '#0c0a06'
const AMBER = '#f59e0b'
const AMBER_FAINT = 'rgba(245,158,11,0.08)'
const MUTED = '#78716c'

export default function SalsLibrary() {
  return (
    <main style={{ background: BG, minHeight: '100vh' }}>

      {/* Hero */}
      <div className="px-6 md:px-16 max-w-5xl mx-auto" style={{ paddingTop: '10rem', paddingBottom: '6rem' }}>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: AMBER }}>
          book tracker
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display leading-none mb-6"
          style={{ fontSize: 'clamp(52px,8vw,100px)', color: '#faf7f0' }}>
          Sal's<br /><span className="italic" style={{ color: AMBER }}>Library</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-2xl max-w-xl" style={{ color: MUTED }}>
          A personal reading system built for someone who takes books seriously.
        </motion.p>
      </div>

      {/* What it does */}
      <div className="py-28 px-6" style={{ background: '#100e09', borderTop: `1px solid ${AMBER_FAINT}`, borderBottom: `1px solid ${AMBER_FAINT}` }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: AMBER }}>what it is</p>
            <p className="font-sans text-lg leading-relaxed mb-5" style={{ color: '#a8a29e' }}>
              Sal's Library is a full-featured personal book tracker — not a social reading app, not a bestseller list. A private system for logging what you've read, rating it honestly, and figuring out what to read next.
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: MUTED }}>
              Built for a specific reader with a specific taste. The next-read engine knows the difference between a book you finished and a book you loved.
            </p>
          </div>
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: AMBER }}>what you get</p>
            <ul className="space-y-4">
              {[
                'Full library with ratings, reviews, and read dates',
                'Want list — track everything you intend to read',
                'Series tracking — know where you are in any sequence',
                'Head-to-head matchups to settle rankings',
                'Smart next-read engine based on your actual taste',
                'Stats — pages read, authors, genres, reading pace',
              ].map((item, i) => (
                <li key={i} className="flex gap-3 font-sans text-base" style={{ color: '#78716c' }}>
                  <span className="mt-0.5 shrink-0" style={{ color: AMBER }}>✦</span>
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
          className="font-serif italic text-2xl leading-relaxed mb-10" style={{ color: 'rgba(245,158,11,0.6)' }}>
          What should I read next?
        </motion.p>
        <a href="https://library.ritualware.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-sm px-8 py-4 rounded-full transition-all hover:opacity-80"
          style={{ background: AMBER_FAINT, border: `1px solid rgba(245,158,11,0.3)`, color: AMBER }}>
          Open the Library →
        </a>
      </div>

    </main>
  )
}
