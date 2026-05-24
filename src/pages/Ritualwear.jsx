import { motion } from 'framer-motion'

// Phone frame component showing actual app UI
function PhoneFrame({ children, accentColor = '#D4919A' }) {
  return (
    <div style={{
      width: '260px', minHeight: '520px',
      background: '#1A0A10',
      borderRadius: '36px',
      padding: '12px',
      boxShadow: `0 40px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.04)`,
      position: 'relative',
      flexShrink: 0,
    }}>
      {/* Notch */}
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

// Oracle result mock UI
function OracleMockUI() {
  const items = [
    { label: 'Silhouette', val: 'A-line, midi' },
    { label: 'Outfit', val: 'Silk slip + blazer' },
    { label: 'Shoes', val: 'Square-toe mule' },
    { label: 'Bag', val: 'Structured tote' },
    { label: 'Lip', val: 'Brick red' },
    { label: 'Fragrance', val: 'Warm amber' },
  ]
  return (
    <div style={{ padding: '16px 14px', fontFamily: '"DM Sans", sans-serif' }}>
      <div style={{ background: '#3D1A1F', borderRadius: '16px', padding: '12px', marginBottom: '12px' }}>
        <p style={{ color: '#D4919A', fontSize: '9px', letterSpacing: '0.2em', marginBottom: '2px' }}>THE ORACLE · TONIGHT · 62°F</p>
        <p style={{ color: '#FDF6F7', fontSize: '11px', fontStyle: 'italic' }}>Your Soft Dramatic profile, Autumn season</p>
      </div>
      <div style={{ space: '0' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid rgba(212,145,154,0.15)' }}>
            <span style={{ color: '#B87880', fontSize: '9px', letterSpacing: '0.1em' }}>{item.label.toUpperCase()}</span>
            <span style={{ color: '#3D1A1F', fontSize: '10px', fontWeight: '500' }}>{item.val}</span>
          </div>
        ))}
      </div>
      <div style={{ background: 'rgba(212,145,154,0.1)', borderRadius: '12px', padding: '10px', marginTop: '12px', textAlign: 'center' }}>
        <p style={{ color: '#B87880', fontSize: '9px', letterSpacing: '0.15em' }}>+ MOOD BOARD GENERATED</p>
        <div style={{ display: 'flex', gap: '4px', justifyContent: 'center', marginTop: '6px' }}>
          {['#8B4513','#D4919A','#F5E6E8','#3D1A1F'].map((c,i) => (
            <div key={i} style={{ width: '20px', height: '20px', borderRadius: '6px', background: c }}/>
          ))}
        </div>
      </div>
    </div>
  )
}

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

      {/* Hero with phone mockup */}
      <section className="relative flex items-center overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36"
        style={{ background: 'linear-gradient(160deg, #FDF6F7 0%, #F5E6E8 60%, #EDD0D4 100%)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-25 blur-3xl pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4919A, #E8B4B8)' }} />
        <div className="relative z-10 px-6 md:px-16 max-w-6xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-16">
            <div className="flex-1">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="font-mono text-sm tracking-[0.3em] mb-5" style={{ color: '#B87880' }}>ritualwear</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}
                className="font-display leading-none mb-5" style={{ fontSize: 'clamp(48px,7vw,100px)', color: '#3D1A1F' }}>
                What do<br /><span className="italic">I wear?</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
                className="font-serif italic text-xl max-w-md mb-8" style={{ color: '#7A4048' }}>
                A styling oracle powered by your own rules.
              </motion.p>
              <motion.a href="https://vile-style-oracle.vercel.app" target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
                className="inline-block font-mono text-base px-8 py-4 rounded-full transition-all hover:opacity-90"
                style={{ background: '#D4919A', color: '#FDF6F7' }}>
                Open Ritualwear →
              </motion.a>
            </div>
            {/* Live app mockup */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden md:flex justify-center" style={{ transform: 'rotate(2deg)' }}>
              <PhoneFrame>
                <OracleMockUI />
              </PhoneFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Style Bible */}
      <section className="py-36 px-6 md:px-16 max-w-5xl mx-auto">
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
                <p className="font-mono text-xs tracking-widest" style={{ color: '#B87880' }}>+ MOOD BOARD GENERATED ALONGSIDE</p>
                <div className="flex justify-center gap-2 mt-3">
                  {['#8B4513','#D4919A','#F5E6E8','#3D1A1F','#C8A86B'].map((c) => (
                    <div key={c} style={{ width: '28px', height: '28px', borderRadius: '8px', background: c }}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Oracle */}
      <section className="py-36 px-6" style={{ background: '#3D1A1F' }}>
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-sm tracking-[0.25em] mb-5" style={{ color: '#D4919A' }}>the oracle</p>
          <h2 className="font-display text-4xl mb-14" style={{ color: '#FDF6F7' }}>
            Your style. Today's weather. One complete look.
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
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

      <section className="py-32 px-6 text-center" style={{ background: '#FDF6F7' }}>
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
