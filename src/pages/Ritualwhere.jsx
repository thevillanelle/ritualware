import { motion } from 'framer-motion'

const tools = [
  {
    label: 'neighborhood quiz',
    title: 'Neighborhood Quiz',
    body: 'Questions about your commute tolerance, non-negotiable services, aesthetic preference, and how you actually live. Rule-based scoring produces ranked matches with reasons — not just a score.',
    note: 'Toggle on AI and it writes a personal narrative about your life in that neighborhood.',
  },
  {
    label: 'third space finder',
    title: 'Third Space Finder',
    body: 'curated venues across NYC and LA filtered by your goals — focus work, social energy, movement, rest. Matches you to places that actually fit.',
    note: 'Every venue is real. Every recommendation is curated.',
  },
  {
    label: 'the map',
    title: 'The Map',
    body: 'Leaflet.js dark map of all venues — colored by category (networking, nightlife, fitness, wellness, beauty, creative, dining, coffee). Filterable. City toggle switches between NYC and LA instantly. Pin your own spots.',
    note: 'Every venue has an "Open in Maps" link.',
  },
  {
    label: 'burnout audit',
    title: 'Burnout Audit',
    body: 'questions diagnosing social, mental, or physical burnout. Rule-based protocol identifies your dominant burnout type.',
    note: 'AI personal insight toggle adds a narrative layer when you want it.',
  },
  {
    label: 'quarterly reinvention',
    title: 'Quarterly Reinvention',
    body: 'questions across aesthetic, social habits, and skill acquisition. Rule-based moves per section — specific, not generic.',
    note: 'AI 90-day plan toggle when you\'re ready to go deeper.',
  },
  {
    label: "elle's guide",
    title: 'The Guide',
    body: "Elle Porcher's full Guide to Thriving in NYC, encoded chapter by chapter as an interactive document. Each chapter links directly to its corresponding tool.",
    note: null,
  },
]

const exampleNeighborhoods = [
  { name: 'West Village', score: 94, tags: ['Walkable', 'Boutique density', 'Wellness access'], why: 'Your commute tolerance is high, your aesthetic skews editorial, and your morning routine requires proximity to things worth walking to.' },
  { name: 'Nolita', score: 88, tags: ['Café culture', 'Editorial', 'Small-block density'], why: 'Strong aesthetic match. Slightly less wellness infrastructure.' },
  { name: 'Upper East Side', score: 71, tags: ['Quiet', 'Service access', 'Established'], why: 'Service proximity is excellent. Lower social density than your profile suggests you\'d want.' },
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
            className="font-mono text-sm tracking-[0.3em] mb-5" style={{ color: '#6B5A8A' }}>ritualwhere? · where.ritualware.app</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display leading-none mb-5" style={{ fontSize: 'clamp(56px,9vw,120px)', color: '#2A1F3D' }}>
            Where do<br /><span className="italic">I go?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-2xl max-w-lg mb-3" style={{ color: '#4A3862' }}>
            A city guide built for how you actually live.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="font-mono text-sm mb-8" style={{ color: '#8A78A8' }}>New York · Los Angeles</motion.p>
          <motion.a href="https://where.ritualware.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="inline-block font-mono text-base px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#A89BC4', color: '#F5F3FA' }}>
            Open Ritualwhere? →
          </motion.a>
        </div>
      </section>

      {/* Six tools */}
      <section className="py-32 px-6 md:px-16 max-w-5xl mx-auto">
        <p className="font-mono text-sm tracking-[0.25em] mb-14" style={{ color: '#6B5A8A' }}>what's inside</p>
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {tools.map((tool, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="rounded-3xl p-8" style={{ background: '#EAE5F5', border: '1px solid rgba(168,155,196,0.25)' }}>
              <p className="font-mono text-sm tracking-[0.15em] mb-3" style={{ color: '#8A78A8' }}>{tool.label}</p>
              <h3 className="font-display text-2xl mb-4" style={{ color: '#2A1F3D' }}>{tool.title}</h3>
              <p className="font-sans text-base leading-relaxed mb-4" style={{ color: '#4A3862' }}>{tool.body}</p>
              {tool.note && <p className="font-serif italic text-base" style={{ color: '#8A78A8' }}>{tool.note}</p>}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Example quiz result */}
      <section className="py-32 px-6" style={{ background: '#2A1F3D' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-4" style={{ color: '#A89BC4' }}>example quiz result</p>
          <h2 className="font-display text-4xl mb-4" style={{ color: '#F5F3FA' }}>Your top neighborhoods, ranked.</h2>
          <p className="font-sans text-xl leading-relaxed mb-14 max-w-2xl" style={{ color: '#C0B5D8' }}>
            A score AND a reason — not just "you'd like it here" but why it fits your specific answers.
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
              "West Village would fit the way you live. Your mornings start with somewhere to walk to — coffee that isn't rushed, a street worth being on. You'd have that here."
            </p>
          </div>
        </div>
      </section>

      {/* LA note */}
      <section className="py-32 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#6B5A8A' }}>los angeles</p>
            <h2 className="font-display text-4xl text-ink mb-6">Tuned to how LA actually works.</h2>
            <p className="font-sans text-lg text-ink-muted leading-relaxed mb-4">
              A separate quiz built for the specific logic of LA — the 405 divide, parking as a lifestyle constraint, Eastside vs Westside, the Valley as its own world, WeHo's identity, Venice as rich boho not a beach neighborhood.
            </p>
            <p className="font-sans text-base text-ink-muted leading-relaxed">
              The city toggle appears on every page header. All six tools respond instantly.
            </p>
          </div>
          <div className="rounded-3xl p-8" style={{ background: '#EAE5F5' }}>
            <p className="font-mono text-sm tracking-[0.2em] mb-6" style={{ color: '#6B5A8A' }}>NYC vs LA</p>
            <div className="space-y-3 font-sans text-sm" style={{ color: '#4A3862' }}>
              {[
                ['Neighborhoods scored', 'questions', 'questions'],
                ['Map venues', '80+ NYC', '80+ LA'],
                ['Specific logic', 'Subway proximity', '405 divide / parking'],
                ['City toggle', '—', 'Switch instantly'],
              ].map(([label, nyc, la], i) => (
                <div key={i} className="grid grid-cols-3 gap-3 border-b pb-3" style={{ borderColor: 'rgba(168,155,196,0.3)' }}>
                  <span style={{ color: '#8A78A8' }}>{label}</span>
                  <span style={{ color: '#2A1F3D' }}>{nyc}</span>
                  <span style={{ color: '#2A1F3D' }}>{la}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 px-6 text-center" style={{ background: '#F5F3FA' }}>
        <p className="font-serif italic text-2xl mb-8" style={{ color: '#4A3862' }}>
          Your city, mapped to how you actually live.
        </p>
        <a href="https://where.ritualware.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#A89BC4', color: '#F5F3FA' }}>
          Open Ritualwhere? →
        </a>
      </section>
    </main>
  )
}
