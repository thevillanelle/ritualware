import { motion } from 'framer-motion'

const exampleLook = [
  { label: 'Silhouette', val: 'A-line, midi length — structured at the shoulder, fluid below' },
  { label: 'Outfit', val: 'Silk slip dress in deep burgundy, worn under an ivory structured blazer' },
  { label: 'Shoes', val: 'Square-toe mule in cognac leather — low heel, clean line' },
  { label: 'Bag', val: 'Top-handle structured tote, dark chocolate' },
  { label: 'Jewelry', val: 'Gold hoops, one chain layer, nothing stacked' },
  { label: 'Lip', val: 'Brick red, semi-matte — no gloss' },
  { label: 'Nails', val: 'Soft terracotta, oval shape' },
  { label: 'Fragrance', val: 'Warm amber and sandalwood — evening-appropriate' },
]

export default function Ritualwear() {
  return (
    <main style={{ background: '#FDF6F7', minHeight: '100vh' }}>

      <section className="relative flex items-center overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28"
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

      {/* Style Bible */}
      <section className="py-24 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#B87880' }}>the style bible</p>
            <h2 className="font-display text-4xl mb-6" style={{ color: '#3D1A1F' }}>Deep questions. Your actual rules.</h2>
            <p className="font-sans text-lg leading-relaxed mb-5" style={{ color: '#5C2F35' }}>
              The Style Bible is an intake process, not a quiz. It captures your Kibbe body type, color season, fabric preferences, and personal style philosophy — and your answers shape what you're asked next.
            </p>
            <p className="font-sans text-lg leading-relaxed" style={{ color: '#7A5055' }}>
              The questions are drawn from a specific style philosophy. Not generic. Not borrowed from someone else's framework. Applied to your specific profile.
            </p>
          </div>

          {/* Example result — what the Oracle actually gives you */}
          <div>
            <p className="font-mono text-sm tracking-[0.2em] mb-4" style={{ color: '#B87880' }}>example oracle result</p>
            <div className="rounded-3xl p-7" style={{ background: '#F0D8DC' }}>
              <p className="font-mono text-xs tracking-widest mb-1" style={{ color: '#B87880' }}>TONIGHT · 62°F · DINNER</p>
              <p className="font-serif italic text-sm mb-5" style={{ color: '#9A6068' }}>Your Soft Dramatic profile, Autumn season, silk/crepe preference</p>
              <div className="space-y-3 mb-5">
                {exampleLook.map(item => (
                  <div key={item.label} className="border-b pb-3" style={{ borderColor: '#D4919A30' }}>
                    <p className="font-mono text-xs mb-1" style={{ color: '#B87880' }}>{item.label.toUpperCase()}</p>
                    <p className="font-sans text-sm" style={{ color: '#3D1A1F' }}>{item.val}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl p-4 text-center" style={{ background: 'rgba(212,145,154,0.15)' }}>
                <p className="font-mono text-xs text-rose tracking-widest">+ MOOD BOARD GENERATED ALONGSIDE</p>
                <p className="font-serif italic text-xs mt-1" style={{ color: '#9A6068' }}>Visual references for silhouette, texture, colour palette</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Oracle */}
      <section className="py-24 px-6" style={{ background: '#3D1A1F' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#D4919A' }}>the oracle</p>
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
