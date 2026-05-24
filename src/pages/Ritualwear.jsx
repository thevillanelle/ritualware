import { motion } from 'framer-motion'

export default function Ritualwear() {
  return (
    <main style={{ background: '#FDF6F7', minHeight: '100vh' }}>

      <section className="relative flex items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
        style={{ background: 'linear-gradient(160deg, #FDF6F7 0%, #F5E6E8 60%, #EDD0D4 100%)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4919A, #E8B4B8)' }} />

        <div className="relative z-10 px-6 md:px-16 max-w-5xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-sm tracking-[0.3em] mb-5" style={{ color: '#B87880' }}>ritualwear</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
            className="font-display leading-none mb-5" style={{ fontSize: 'clamp(56px,9vw,120px)', color: '#3D1A1F' }}>
            What do<br /><span className="italic">I wear?</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
            className="font-serif italic text-2xl max-w-lg mb-8" style={{ color: '#7A4048' }}>
            A styling oracle powered by your own rules.
          </motion.p>
          <motion.a href="https://vile-style-oracle.vercel.app" target="_blank" rel="noopener noreferrer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="inline-block font-mono text-base px-8 py-4 rounded-full transition-all hover:opacity-90"
            style={{ background: '#D4919A', color: '#FDF6F7' }}>
            Open Ritualwear →
          </motion.a>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-4" style={{ color: '#B87880' }}>the style bible</p>
            <h2 className="font-display text-4xl mb-6" style={{ color: '#3D1A1F' }}>32 questions. Your actual rules.</h2>
            <p className="font-sans text-lg leading-relaxed mb-4" style={{ color: '#5C2F35' }}>
              Answer 32 questions about your Kibbe type, color season, fabric preferences, and personal style philosophy. Your answers shape what you're asked next.
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: '#7A5055' }}>
              The questions are drawn from a specific style philosophy — not generic advice. Applied to your specific profile.
            </p>
          </div>
          <div className="rounded-3xl p-8" style={{ background: '#F0D8DC' }}>
            <p className="font-mono text-sm tracking-[0.2em] mb-6" style={{ color: '#B87880' }}>what you get</p>
            <div className="space-y-3">
              {['Silhouette', 'Outfit', 'Shoes', 'Bag', 'Jewelry', 'Lip', 'Nails', 'Fragrance'].map(item => (
                <div key={item} className="flex justify-between items-center text-base border-b pb-2"
                  style={{ borderColor: '#D4919A40' }}>
                  <span className="font-sans" style={{ color: '#3D1A1F' }}>{item}</span>
                  <span className="font-mono text-sm" style={{ color: '#B87880' }}>→</span>
                </div>
              ))}
              <p className="font-mono text-sm pt-2" style={{ color: '#B87880' }}>+ a mood board for every look</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#3D1A1F' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-4" style={{ color: '#D4919A' }}>the oracle</p>
          <h2 className="font-display text-4xl mb-10" style={{ color: '#FDF6F7' }}>
            Your style. Today's weather. One complete look.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { heading: 'Built on your rules', body: 'The Oracle reads your profile before it says anything. Every recommendation is filtered through your type, your season, your preferences. Not a guess.' },
              { heading: 'Weather-aware', body: "It knows what's actually happening outside before it decides what you should wear. The look accounts for today." },
              { heading: 'You see it, not just read it', body: 'A mood board comes alongside every recommendation so you\'re not left translating text into an image in your head.' },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <h3 className="font-display text-xl mb-3" style={{ color: '#E8B4B8' }}>{item.heading}</h3>
                <p className="font-sans text-base leading-relaxed" style={{ color: '#C8A8AC' }}>{item.body}</p>
              </div>
            ))}
          </div>
          <p className="font-serif italic text-2xl leading-relaxed pl-8 border-l-2" style={{ color: '#FDF6F7', borderColor: '#D4919A' }}>
            It isn't giving you generic outfit advice. It's applying a specific philosophy to your specific profile. That's a different product.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 text-center" style={{ background: '#FDF6F7' }}>
        <p className="font-serif italic text-2xl mb-8" style={{ color: '#7A5055' }}>
          Your rules. Your weather. One outfit.
        </p>
        <a href="https://vile-style-oracle.vercel.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#D4919A', color: '#FDF6F7' }}>
          Open Ritualwear →
        </a>
      </section>

    </main>
  )
}
