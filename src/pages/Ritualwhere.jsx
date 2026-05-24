import { motion } from 'framer-motion'

const exampleNeighborhoods = [
  { name: 'West Village', score: 94, tags: ['Walkable', 'Boutique density', 'Wellness access'], why: 'Your commute tolerance is high, your aesthetic skews editorial, and your morning routine requires proximity to things worth walking to.' },
  { name: 'Nolita', score: 88, tags: ['Café culture', 'Editorial', 'Small-block density'], why: 'Strong aesthetic match. Slightly less wellness infrastructure, but the street energy fits your lifestyle profile.' },
  { name: 'Upper East Side', score: 71, tags: ['Quiet', 'Service access', 'Established'], why: 'Service proximity is excellent. Lower social density than your preferences suggest you\'d want.' },
]

const thirdSpaces = [
  { goal: 'Deep work', type: 'café', example: 'Ground-floor café with long tables, no music, daytime hours only' },
  { goal: 'Social energy', type: 'third space', example: 'A bar that opens at 5, has actual seating, and isn\'t loud until 9' },
  { goal: 'Movement', type: 'studio / gym', example: 'Equinox, yoga studio, or reformer — matched to your access priorities' },
  { goal: 'Creative reset', type: 'cultural space', example: 'Gallery, bookstore, or museum with a café — somewhere you can stay' },
]

export default function Ritualwhere() {
  return (
    <main style={{ background: '#F5F3FA', minHeight: '100vh' }}>

      <section className="relative flex items-center overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28"
        style={{ background: 'linear-gradient(160deg, #F5F3FA 0%, #EAE5F5 60%, #D5CCE8 100%)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #A89BC4, #C0B5D8)' }} />
        <div className="relative z-10 px-6 md:px-16 max-w-5xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-sm tracking-[0.3em] mb-5" style={{ color: '#6B5A8A' }}>ritualwhere?</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display leading-none mb-5" style={{ fontSize: 'clamp(56px,9vw,120px)', color: '#2A1F3D' }}>
            Where do<br /><span className="italic">I go?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-2xl max-w-lg mb-3" style={{ color: '#4A3862' }}>
            A city guide built for how you actually live.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="font-mono text-sm mb-8" style={{ color: '#8A78A8' }}>Available for New York · Los Angeles</motion.p>
          <motion.a href="https://ritualwhere.vercel.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="inline-block font-mono text-base px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#A89BC4', color: '#F5F3FA' }}>
            Open Ritualwhere? →
          </motion.a>
        </div>
      </section>

      {/* Three tools */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { label: 'neighborhood quiz', title: 'Neighborhood Quiz', body: 'Answer questions about how you actually live — your commute, your routines, your energy, your aesthetic. The quiz scores neighborhoods against your real criteria, not generic livability rankings.', note: 'Toggle on AI and it writes a personal narrative about your life in that neighborhood.' },
            { label: 'third space finder', title: 'Third Space Finder', body: 'Tell it what you need — a place to focus, a place to connect, somewhere to move, somewhere to rest. It matches you to venues that actually fit.', note: 'Curated recommendations. Every venue is real.' },
            { label: 'the map', title: 'The Map', body: 'An interactive map of curated venues — labeled, categorized, and filterable by type. Every pin is a real recommendation you can click to explore.', note: null },
          ].map((tool, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="rounded-3xl p-8" style={{ background: '#EAE5F5', border: '1px solid rgba(168,155,196,0.25)' }}>
              <p className="font-mono text-sm tracking-[0.15em] mb-3" style={{ color: '#8A78A8' }}>{tool.label}</p>
              <h3 className="font-display text-2xl mb-4" style={{ color: '#2A1F3D' }}>{tool.title}</h3>
              <p className="font-sans text-base leading-relaxed mb-4" style={{ color: '#4A3862' }}>{tool.body}</p>
              {tool.note && <p className="font-serif italic text-base" style={{ color: '#8A78A8' }}>{tool.note}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Example neighborhood results */}
      <section className="py-24 px-6" style={{ background: '#2A1F3D' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-4" style={{ color: '#A89BC4' }}>example quiz result</p>
          <h2 className="font-display text-4xl mb-4" style={{ color: '#F5F3FA' }}>Your top neighborhoods, ranked.</h2>
          <p className="font-sans text-xl leading-relaxed mb-12 max-w-2xl" style={{ color: '#C0B5D8' }}>
            The quiz gives you a ranked list with a score and a reason — not just "you'd like it here" but why it fits your specific answers.
          </p>
          <div className="space-y-5 mb-12">
            {exampleNeighborhoods.map((n, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6" style={{ background: 'rgba(168,155,196,0.1)', border: '1px solid rgba(168,155,196,0.2)' }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <p className="font-display text-2xl mb-1" style={{ color: '#F5F3FA' }}>{n.name}</p>
                    <div className="flex flex-wrap gap-2">
                      {n.tags.map(t => (
                        <span key={t} className="font-mono text-xs px-2 py-1 rounded-full"
                          style={{ background: 'rgba(168,155,196,0.2)', color: '#C0B5D8' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-display text-4xl" style={{ color: '#A89BC4' }}>{n.score}</p>
                    <p className="font-mono text-xs" style={{ color: '#6B5A8A' }}>MATCH</p>
                  </div>
                </div>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#9A8AB8' }}>{n.why}</p>
              </motion.div>
            ))}
          </div>

          <div className="rounded-2xl p-6" style={{ background: 'rgba(168,155,196,0.08)', border: '1px solid rgba(168,155,196,0.15)' }}>
            <p className="font-mono text-xs tracking-widest mb-3" style={{ color: '#A89BC4' }}>WITH AI NARRATIVE ON</p>
            <p className="font-serif italic text-lg leading-relaxed" style={{ color: '#E0D8F0' }}>
              "West Village would fit the way you live. Your mornings start with somewhere to walk to — coffee that isn't rushed, a street worth being on. You'd have that here. The density is right: close enough that you'd use it, quiet enough that you'd stay."
            </p>
          </div>
        </div>
      </section>

      {/* Third Space Finder expanded */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#6B5A8A' }}>third space finder</p>
        <h2 className="font-display text-4xl text-ink mb-6">A place for every kind of need.</h2>
        <p className="font-sans text-xl text-ink-muted leading-relaxed mb-12 max-w-2xl">
          Your "third space" is the place between home and work — where you recharge, connect, focus, or move. The finder matches you to real venues based on what you actually need from a place.
        </p>
        <div className="grid md:grid-cols-2 gap-5">
          {thirdSpaces.map((ts, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-2xl p-6" style={{ background: '#EAE5F5', border: '1px solid rgba(168,155,196,0.2)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(168,155,196,0.25)', color: '#6B5A8A' }}>
                  {ts.goal}
                </span>
                <span className="font-mono text-xs" style={{ color: '#A89BC4' }}>{ts.type}</span>
              </div>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#4A3862' }}>{ts.example}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The quiz detail */}
      <section className="py-24 px-6" style={{ background: '#2A1F3D' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl mb-6" style={{ color: '#F5F3FA' }}>
            Scored against how you actually live.
          </h2>
          <p className="font-sans text-xl leading-relaxed mb-12 max-w-2xl" style={{ color: '#C0B5D8' }}>
            Not average commute times or crowd-sourced star ratings. The quiz weighs your specific priorities: your wellness routines, your aesthetic preferences, your energy for commuting, your need for certain kinds of proximity.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl p-8" style={{ background: 'rgba(168,155,196,0.12)' }}>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A89BC4' }}>Instant result</h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#8A78A8' }}>Your neighborhood match is immediate — scored, ranked, explained. No waiting.</p>
            </div>
            <div className="rounded-2xl p-8" style={{ background: 'rgba(168,155,196,0.12)' }}>
              <h3 className="font-display text-xl mb-3" style={{ color: '#A89BC4' }}>AI narrative on demand</h3>
              <p className="font-sans text-base leading-relaxed" style={{ color: '#8A78A8' }}>Toggle it on and it writes a personal story about your life in that neighborhood. What your mornings feel like. Where you'd work. How the city fits.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: '#F5F3FA' }}>
        <p className="font-serif italic text-2xl mb-8" style={{ color: '#4A3862' }}>
          Your city, mapped to how you actually live.
        </p>
        <a href="https://ritualwhere.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#A89BC4', color: '#F5F3FA' }}>
          Open Ritualwhere? →
        </a>
      </section>
    </main>
  )
}
