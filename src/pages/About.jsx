import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="bg-cream-dark py-32 px-6 min-h-screen text-cream">
      <div className="max-w-3xl mx-auto">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-xs text-amber tracking-[0.25em] mb-8">about ritualware</motion.p>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-sans leading-relaxed mb-6 text-cream/70">
          Ritualware is a platform built on the premise that personal frameworks deserve technical homes.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-sans leading-relaxed mb-6 text-cream/70">
          Elle Porcher has spent years developing a complete personal system: a style philosophy grounded in Kibbe typing and color season theory, a beauty and wellness hierarchy called the Glow Up Pyramid, and a practical guide to thriving in New York City. The frameworks were complete before the first line of code was written.
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="font-sans leading-relaxed mb-16 text-cream/70">
          The code gave them a home. The tools made them interactive. The AI made them personal where it earned the right to.
        </motion.p>

        <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="border-l-2 border-rose pl-8">
          <p className="font-display italic text-[clamp(24px,3.5vw,42px)] leading-tight text-cream">
            &ldquo;A ritual is a routine with meaning.<br />
            That&apos;s what these tools are for.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </main>
  )
}
