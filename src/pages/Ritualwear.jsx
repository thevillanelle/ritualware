import { motion } from 'framer-motion'

export default function Ritualwear() {
  return (
    <main style={{ background: '#FDF6F7', minHeight: '100vh' }}>

      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden pt-16 pb-20"
        style={{ background: 'linear-gradient(160deg, #FDF6F7 0%, #F5E6E8 60%, #EDD0D4 100%)' }}>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4919A, #E8B4B8)' }} />

        <div className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-xs tracking-[0.3em] mb-6" style={{ color: '#B87880' }}>ritualwear</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-[clamp(64px,10vw,140px)] leading-none mb-6" style={{ color: '#3D1A1F' }}>
            What do<br /><span className="italic">I wear?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            className="font-serif italic text-2xl max-w-lg mb-8" style={{ color: '#7A4048' }}>
            A personal styling oracle powered by your own rules — not someone else's.
          </motion.p>
          <motion.a href="https://vile-style-oracle.vercel.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
            className="inline-block font-mono text-sm px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#D4919A', color: '#FDF6F7' }}>
            Open Ritualwear →
          </motion.a>
        </div>
      </section>

      {/* Style Bible */}
      <section className="py-24 px-6 md:px-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] mb-4" style={{ color: '#B87880' }}>the style bible</p>
            <h2 className="font-display text-4xl mb-6" style={{ color: '#3D1A1F' }}>32 questions. Your actual rules.</h2>
            <p className="font-sans leading-relaxed mb-4" style={{ color: '#5C2F35' }}>
              The Style Bible is an intake process, not a quiz. It captures your Kibbe body type, color season, fabric preferences, and personal style philosophy across 32 questions — and your answers shape what you're asked next.
            </p>
            <p className="font-sans leading-relaxed" style={{ color: '#7A5055' }}>
              These are Elle Porcher's actual personal style rules. Not generic. Not borrowed from someone else's framework. Applied to your specific profile.
            </p>
          </div>
          <div className="rounded-3xl p-8" style={{ background: '#F0D8DC' }}>
            <p className="font-mono text-xs tracking-[0.2em] mb-6" style={{ color: '#B87880' }}>what you get</p>
            <div className="space-y-3">
              {['Silhouette', 'Outfit', 'Shoes', 'Bag', 'Jewelry', 'Lip', 'Nails', 'Fragrance'].map(item => (
                <div key={item} className="flex justify-between items-center text-sm border-b pb-2"
                  style={{ borderColor: '#D4919A40' }}>
                  <span className="font-sans" style={{ color: '#3D1A1F' }}>{item}</span>
                  <span className="font-mono text-xs" style={{ color: '#B87880' }}>→</span>
                </div>
              ))}
              <p className="font-mono text-xs pt-2" style={{ color: '#B87880' }}>+ a mood board for every look</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Oracle */}
      <section className="py-20 px-6" style={{ background: '#3D1A1F' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-xs tracking-[0.25em] mb-4" style={{ color: '#D4919A' }}>the oracle</p>
          <h2 className="font-display text-4xl mb-10" style={{ color: '#FDF6F7' }}>
            Your style. Today's weather. One complete look.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { heading: 'Built on your rules', body: 'The Oracle reads your Style Bible before it says anything. Every recommendation is filtered through your Kibbe type, your color season, your fabric preferences. Not a guess. Your profile.' },
              { heading: 'Weather-aware', body: 'It knows what\'s actually happening outside before it decides what you should wear. The look accounts for today — not a hypothetical day.' },
              { heading: 'You see it, not just read it', body: 'Every recommendation comes with a mood board. The visual reference pulls alongside the look so you\'re not left translating text into an image in your head.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <h3 className="font-display text-lg mb-3" style={{ color: '#E8B4B8' }}>{item.heading}</h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: '#C8A8AC' }}>{item.body}</p>
              </div>
            ))}
          </div>
          <blockquote className="border-l-2 pl-8" style={{ borderColor: '#D4919A' }}>
            <p className="font-serif italic text-2xl leading-relaxed" style={{ color: '#FDF6F7' }}>
              "It isn't giving you generic outfit advice. It's applying a specific philosophy to your specific profile. That's a different product."
            </p>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#FDF6F7' }}>
        <p className="font-serif italic text-xl mb-8" style={{ color: '#7A5055' }}>
          Your style rules. Your color season. Your weather. One outfit.
        </p>
        <a href="https://vile-style-oracle.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-sm px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#D4919A', color: '#FDF6F7' }}>
          Open Ritualwear →
        </a>
      </section>

    </main>
  )
}
