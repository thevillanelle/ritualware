import { motion } from 'framer-motion'

const features = [
  { title: 'Style Bible', desc: 'deeply granular questions with branching logic and lesson modals. Captures Kibbe type, color season, fabric preferences, era references, designer DNA, lip rule, nail shape, fragrance family, and freeform style laws.' },
  { title: 'The Oracle', desc: 'AI outfit recommendations structured into structured sections: silhouette, outfit, shoes, bag, jewelry, lip, nails, fragrance, weather swap. Live weather via Open-Meteo. Pexels mood board alongside every result.' },
  { title: 'My Looks', desc: 'Saved Oracle results with favorite/unfavorite, expandable sections, and mood board images. Your personal lookbook, built from your own recommendations.' },
  { title: 'Inspo Upload', desc: "Gemini Vision reads uploaded images and extracts color palette, silhouette, vibe words, and specific pieces. Offers to add extracted data directly to your Style Bible." },
  { title: 'Style Finder', desc: "questions that excavate latent aesthetic identity when you don't know where to start. Outputs a named style archetype, your truth, your blind spots, immediate moves, and style words." },
]

const exampleLook = [
  { label: 'Silhouette', val: 'A-line, midi length — structured at the shoulder, fluid below' },
  { label: 'Outfit', val: 'Silk slip dress in deep burgundy, worn under an ivory structured blazer' },
  { label: 'Shoes', val: 'Square-toe mule in cognac leather — low heel, clean line' },
  { label: 'Bag', val: 'Top-handle structured tote, dark chocolate' },
  { label: 'Jewelry', val: 'Gold hoops, one chain layer, nothing stacked' },
  { label: 'Lip', val: 'Brick red, semi-matte — no gloss' },
  { label: 'Nails', val: 'Soft terracotta, oval shape' },
  { label: 'Fragrance', val: 'Warm amber and sandalwood — evening-appropriate' },
  { label: 'Weather swap', val: 'Add camel wrap coat, swap mule for block heel boot' },
]

function PhoneFrame({ children }) {
  return (
    <div style={{
      width: '260px', minHeight: '520px', background: '#1A0A10',
      borderRadius: '36px', padding: '12px',
      boxShadow: '0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
      flexShrink: 0,
    }}>
      <div style={{ width: '80px', height: '24px', background: '#0A0005', borderRadius: '12px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
        <div style={{ width: '8px', height: '8px', background: '#2A1A20', borderRadius: '50%' }}/>
        <div style={{ width: '40px', height: '6px', background: '#2A1A20', borderRadius: '3px' }}/>
      </div>
      <div style={{ background: '#FDF6F7', borderRadius: '24px', overflow: 'hidden', minHeight: '460px' }}>
        {children}
      </div>
    </div>
  )
}

function OracleMock() {
  return (
    <div style={{ padding: '16px 14px', fontFamily: '"DM Sans", sans-serif' }}>
      <div style={{ background: '#3D1A1F', borderRadius: '16px', padding: '12px', marginBottom: '12px' }}>
        <p style={{ color: '#D4919A', fontSize: '9px', letterSpacing: '0.2em', marginBottom: '2px' }}>THE ORACLE · TONIGHT · 62°F</p>
        <p style={{ color: '#FDF6F7', fontSize: '11px', fontStyle: 'italic' }}>Soft Dramatic · Autumn · silk/crepe</p>
      </div>
      <div>
        {exampleLook.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(212,145,154,0.15)' }}>
            <span style={{ color: '#B87880', fontSize: '8px', letterSpacing: '0.1em' }}>{item.label.toUpperCase()}</span>
            <span style={{ color: '#3D1A1F', fontSize: '9px', fontWeight: '500', maxWidth: '130px', textAlign: 'right' }}>{item.val}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Ritualwear() {
  return (
    <main style={{ background: '#FDF6F7', minHeight: '100vh' }}>

      <section className="relative flex items-center overflow-hidden pt-24 pb-20 md:pt-36 md:pb-28"
        style={{ background: 'linear-gradient(160deg, #FDF6F7 0%, #F5E6E8 60%, #EDD0D4 100%)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4919A, #E8B4B8)' }} />
        <div className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
            <div className="flex-1">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="font-mono text-sm tracking-[0.3em] mb-5" style={{ color: '#B87880' }}>ritualwear · wear.ritualware.app</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
                className="font-display leading-none mb-5" style={{ fontSize: 'clamp(56px,9vw,120px)', color: '#3D1A1F' }}>
                What do<br /><span className="italic">I wear?</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="font-serif italic text-xl max-w-md mb-8" style={{ color: '#7A4048' }}>
                A personal styling oracle powered by your own rules.
              </motion.p>
              <motion.a href="https://wear.ritualware.app" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                className="inline-block font-mono text-base px-8 py-4 rounded-full transition-all hover:opacity-90"
                style={{ background: '#D4919A', color: '#FDF6F7' }}>
                Open Ritualwear →
              </motion.a>
            </div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden md:flex justify-center" style={{ transform: 'rotate(2deg)' }}>
              <PhoneFrame><OracleMock /></PhoneFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 md:px-16 max-w-5xl mx-auto">
        <p className="font-mono text-sm tracking-[0.25em] mb-14" style={{ color: '#B87880' }}>everything inside</p>
        <div className="space-y-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="grid md:grid-cols-4 gap-6 border-b pb-6" style={{ borderColor: 'rgba(212,145,154,0.2)' }}>
              <div>
                <h3 className="font-display text-xl" style={{ color: '#3D1A1F' }}>{f.title}</h3>
              </div>
              <div className="md:col-span-3">
                <p className="font-sans text-lg leading-relaxed" style={{ color: '#5C2F35' }}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Oracle section */}
      <section className="py-32 px-6" style={{ background: '#3D1A1F' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#D4919A' }}>the oracle</p>
          <h2 className="font-display text-4xl mb-10" style={{ color: '#FDF6F7' }}>
            Your style. Today's weather. One complete look.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { heading: 'Built on your rules', body: 'Reads your Style Bible before it says anything. Every recommendation is filtered through your Kibbe type, color season, and fabric preferences.' },
              { heading: 'Weather-aware', body: "Live weather from Open-Meteo. It knows what's actually happening outside. The look accounts for today — not a hypothetical day." },
              { heading: 'structured sections, not suggestions', body: 'Silhouette. Outfit. Shoes. Bag. Jewelry. Lip. Nails. Fragrance. Weather swap. One complete look. A Pexels mood board alongside it.' },
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

      <section className="py-28 px-6 text-center" style={{ background: '#FDF6F7' }}>
        <p className="font-serif italic text-2xl mb-8" style={{ color: '#7A5055' }}>
          Your rules. Your weather. One outfit.
        </p>
        <a href="https://wear.ritualware.app" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-base px-10 py-4 rounded-full transition-all hover:opacity-90"
          style={{ background: '#D4919A', color: '#FDF6F7' }}>
          Open Ritualwear →
        </a>
      </section>
    </main>
  )
}
