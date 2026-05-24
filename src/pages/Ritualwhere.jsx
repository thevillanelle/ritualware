import { motion } from 'framer-motion'

const neighborhoods = [
  { name: 'West Village', notes: 'Cobblestone charm, boutique density, Equinox proximity' },
  { name: 'Upper East Side', notes: 'Museum mile, old money quiet, Skin Laundry access' },
  { name: 'Nolita', notes: 'Editorial aesthetic, walk-everywhere density, café culture' },
  { name: 'Tribeca', notes: 'Converted lofts, low foot traffic, serious coffee' },
  { name: 'Williamsburg', notes: 'Creative density, longer commute tolerance required' },
  { name: 'Midtown East', notes: 'Efficient commute, proximity to professional services' },
]

export default function Ritualwhere() {
  return (
    <main style={{ background: '#F5F3FA', minHeight: '100vh' }}>

      {/* Hero — lavender world */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-16 pb-20"
        style={{ background: 'linear-gradient(160deg, #F5F3FA 0%, #EAE5F5 60%, #D5CCE8 100%)' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #A89BC4, #C0B5D8)' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[250px] h-[250px] rounded-full opacity-20 blur-2xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #C4956A, #A89BC4)' }} />

        <div className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-xs tracking-[0.3em] mb-6" style={{ color: '#6B5A8A' }}>ritualwhere?</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-[clamp(64px,10vw,140px)] leading-none mb-6" style={{ color: '#2A1F3D' }}>
            Where do<br /><span className="italic">I go?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="font-serif italic text-2xl max-w-lg mb-8" style={{ color: '#4A3862' }}>
            NYC life strategy built directly from Elle's Guide to Thriving in New York City.
          </motion.p>
          <motion.a href="https://ritualwhere.vercel.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="inline-block font-mono text-sm px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#A89BC4', color: '#F5F3FA' }}>
            Open Ritualwhere? →
          </motion.a>
        </div>
      </section>

      {/* Three tools */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <p className="font-mono text-xs tracking-[0.25em] mb-12" style={{ color: '#6B5A8A' }}>three tools inside</p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Neighborhood Quiz',
              questions: '14 questions',
              desc: 'Scores neighborhoods against your actual criteria — commute tolerance, proximity to Equinox, SEV, and Skin Laundry, aesthetic match, and Elle\'s explicit neighborhood recommendations. Mathematical scoring by default.',
              note: 'Toggle on AI and it writes a personal narrative about your life in that neighborhood.',
            },
            {
              title: 'Third Space Finder',
              questions: 'goal-based matching',
              desc: 'Matches venues to personal goals — focus work, social connection, creative energy, movement, rest. Not a Yelp pull. Venues drawn directly from Elle\'s guide, categorized by what they\'re actually for.',
              note: '26 curated venues. Her direct recommendations.',
            },
            {
              title: 'The Map',
              questions: '26 venues · Leaflet.js',
              desc: 'An interactive map of all 26 venues from the guide — labeled, categorized, and filterable by type. Each venue is tagged to its third space function and linked to its entry in the guide.',
              note: 'Built on Leaflet.js with custom markers. Every pin is a real recommendation.',
            },
          ].map((tool, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.12 }}
              className="rounded-3xl p-7" style={{ background: '#EAE5F5', border: '1px solid rgba(168,155,196,0.25)' }}>
              <p className="font-mono text-xs tracking-[0.15em] mb-2" style={{ color: '#8A78A8' }}>{tool.questions}</p>
              <h3 className="font-display text-2xl mb-4" style={{ color: '#2A1F3D' }}>{tool.title}</h3>
              <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: '#4A3862' }}>{tool.desc}</p>
              <p className="font-serif italic text-sm" style={{ color: '#8A78A8' }}>{tool.note}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The guide */}
      <section className="py-20 px-6" style={{ background: '#2A1F3D' }}>
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-[0.25em] mb-6" style={{ color: '#A89BC4' }}>from the guide</p>
          <h2 className="font-display text-4xl mb-6" style={{ color: '#F5F3FA' }}>
            The neighborhood scoring model uses Elle's specific criteria.
          </h2>
          <p className="font-sans leading-relaxed mb-12 max-w-2xl" style={{ color: '#C0B5D8' }}>
            Not generic livability scores. Not aggregated review data. Commute tolerance, proximity to specific wellness infrastructure (Equinox, SEV, Skin Laundry), aesthetic match, and the neighborhoods she explicitly names — scored against your answers to 14 questions.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {neighborhoods.map((n, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-5" style={{ background: 'rgba(168,155,196,0.12)' }}>
                <h4 className="font-display text-lg mb-2" style={{ color: '#D5CCE8' }}>{n.name}</h4>
                <p className="font-sans text-xs leading-relaxed" style={{ color: '#8A78A8' }}>{n.notes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI philosophy */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] mb-4" style={{ color: '#6B5A8A' }}>on intelligence</p>
            <h2 className="font-display text-3xl mb-4" style={{ color: '#2A1F3D' }}>Mathematical by default. Narrative on demand.</h2>
            <p className="font-sans leading-relaxed" style={{ color: '#4A3862' }}>
              The neighborhood quiz scores mathematically — fast, reliable, no API dependency. Toggle on AI and it writes a personal narrative about your life in that neighborhood. Not every feature needs intelligence. The question for each feature was: does AI make this better, or does it just make it more expensive to run?
            </p>
          </div>
          <div className="rounded-3xl p-8" style={{ background: '#EAE5F5' }}>
            <p className="font-mono text-xs tracking-[0.2em] mb-6" style={{ color: '#6B5A8A' }}>SCORING MODEL</p>
            <div className="space-y-3">
              {[
                { factor: 'Commute tolerance', weight: 'High' },
                { factor: 'Equinox proximity', weight: 'High' },
                { factor: 'SEV + Skin Laundry', weight: 'Medium' },
                { factor: 'Aesthetic match', weight: 'Medium' },
                { factor: 'Named in guide', weight: 'Qualifier' },
                { factor: 'AI narrative', weight: 'Optional' },
              ].map(row => (
                <div key={row.factor} className="flex justify-between text-sm border-b pb-2"
                  style={{ borderColor: 'rgba(168,155,196,0.3)' }}>
                  <span className="font-sans" style={{ color: '#2A1F3D' }}>{row.factor}</span>
                  <span className="font-mono text-xs" style={{ color: '#8A78A8' }}>{row.weight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#F5F3FA' }}>
        <p className="font-serif italic text-xl mb-8" style={{ color: '#4A3862' }}>
          14 questions. 26 venues. One map of how to actually live in New York.
        </p>
        <a href="https://ritualwhere.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-sm px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#A89BC4', color: '#F5F3FA' }}>
          Open Ritualwhere? →
        </a>
      </section>

    </main>
  )
}
