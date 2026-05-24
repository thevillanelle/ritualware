import { motion } from 'framer-motion'

export default function Matelier() {
  return (
    <main className="pt-32 pb-24">

      {/* Hero */}
      <div className="px-6 md:px-16 max-w-6xl mx-auto mb-24">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="font-mono text-xs text-amber tracking-[0.25em] mb-4">software experiment no. 02</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="font-display italic text-[clamp(48px,7vw,100px)] leading-none text-ink mb-6">
          m'atelier
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          className="font-serif italic text-xl text-ink-muted max-w-xl">
          Enterprise team intelligence. Scaled down to the size of a life.
        </motion.p>
      </div>

      {/* The concept */}
      <div className="bg-cream-alt py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="font-mono text-xs text-amber tracking-[0.25em] mb-4">the question</p>
              <p className="font-display italic text-2xl text-ink mb-6 leading-tight">
                What does a 100-person team management system look like when the team is just you?
              </p>
              <p className="font-sans text-ink-muted leading-relaxed">
                m'atelier applies the same architecture as the enterprise Skills Hub — project tracking, skills inventory, knowledge visualization — but scaled to personal projects, household logistics, and creative work.
              </p>
            </div>
            <div>
              <p className="font-mono text-xs text-amber tracking-[0.25em] mb-4">what's inside</p>
              <ul className="space-y-3">
                {[
                  'Project tracking with task breakdown and collaborator links',
                  'Skills and knowledge inventory with a weighted 1–5 scale',
                  'D3 force graph — Web Dev, Design, Finance, AI, Strategy and more — connected by semantic overlap',
                  'Labels that appear progressively as you zoom in',
                  'Real persistence via Supabase — reads, writes, Row Level Security',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 font-sans text-sm text-ink-muted">
                    <span className="text-amber mt-0.5 shrink-0">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The knowledge graph feature */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="font-mono text-xs text-amber tracking-[0.25em] mb-4">the mind map</p>
            <h2 className="font-display text-3xl text-ink mb-4">A knowledge graph that grows with you</h2>
            <p className="font-sans text-ink-muted leading-relaxed mb-4">
              Knowledge nodes span Web Dev, Data Viz, Infrastructure, AI Tools, Design, Strategy, Security, Finance, and Blockchain. Nodes are linked by hardcoded semantic relationships layered with auto-generated connections derived from keyword overlap.
            </p>
            <p className="font-sans text-ink-muted leading-relaxed">
              Category tags appear at zoom &gt; 0.5. Full labels at &gt; 1.1. Description snippets at &gt; 3. Three separate SVG text layers, managed independently.
            </p>
          </motion.div>

          {/* Visual schema */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-cream-dark rounded-3xl p-8 font-mono text-sm" style={{ color: '#FAF7F2' }}>
            <p className="text-amber text-xs tracking-[0.2em] mb-4">SCHEMA</p>
            <div className="space-y-4 text-xs leading-relaxed">
              <div>
                <p className="text-rose font-semibold mb-1">team_members</p>
                <p className="text-cream/50 pl-3">work_skills[] · non_work[] · hobbies[] · private_note</p>
              </div>
              <div>
                <p className="text-sage font-semibold mb-1">projects</p>
                <p className="text-cream/50 pl-3">task_1/2/3 · volunteer_need · contact_id FK</p>
              </div>
              <div>
                <p className="text-lavender font-semibold mb-1">knowledge_nodes</p>
                <p className="text-cream/50 pl-3">category · weight (1–5 foundational scale)</p>
              </div>
              <div>
                <p className="text-amber font-semibold mb-1">member_knowledge</p>
                <p className="text-cream/50 pl-3">junction table — person × node</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why it matters */}
      <div className="bg-cream-alt py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif italic text-xl text-ink-muted mb-6">
            m'atelier was the proof of concept that validated the backend approach for the production system serving 100 people. The fetch calls in the frontend mapped almost 1:1 to what the FastAPI layer would later do in production.
          </p>
          <p className="font-mono text-xs text-amber tracking-[0.2em]">Small scale. Real architecture.</p>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 max-w-6xl mx-auto">
        <a href="https://thevillanelle.github.io/studio" target="_blank" rel="noopener noreferrer"
          className="inline-block font-mono text-sm text-rose border border-rose px-6 py-3 rounded-full hover:bg-rose hover:text-cream transition-colors">
          Open m'atelier →
        </a>
      </div>

    </main>
  )
}
