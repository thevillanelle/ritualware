import { motion } from 'framer-motion'

export default function Matelier() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
      <div className="md:flex gap-16 items-start">
        {/* Vertical label */}
        <div className="hidden md:flex flex-col items-center pt-4">
          <p className="font-mono text-xs text-ink/40 tracking-[0.3em] uppercase"
            style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}>studio</p>
        </div>

        <div className="flex-1">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="font-mono text-xs text-amber tracking-[0.25em] mb-4 md:hidden">studio</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="font-display italic text-[clamp(40px,6vw,80px)] text-ink mb-4">m&apos;atelier</motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="font-serif italic text-xl text-ink/60 mb-12">Enterprise team intelligence. Personal scale.</motion.p>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <p className="font-sans text-ink leading-relaxed mb-4">
                What does a 100-person team management system look like when the team is your household? m&apos;atelier is the proof of concept that answered that question — and in doing so, validated the entire backend architecture that later ran in production.
              </p>
              <p className="font-sans text-ink/60 leading-relaxed">
                Supabase: PostgreSQL + REST API + Row Level Security, zero infrastructure to manage. The schema designed from scratch. The fetch calls in the frontend mapped almost 1:1 to what the FastAPI layer would later do in production.
              </p>
            </div>
            <div>
              <div className="bg-cream-alt rounded-2xl p-6 font-mono text-sm warm-shadow">
                <p className="text-rose font-semibold mb-2">team_members</p>
                <p className="text-ink/60 pl-4 text-xs leading-relaxed">work_skills[]<br/>non_work[]<br/>hobbies[]<br/>private_note</p>
                <p className="text-sage font-semibold mt-4 mb-2">projects</p>
                <p className="text-ink/60 pl-4 text-xs leading-relaxed">task_1/2/3<br/>volunteer_need<br/>contact_id FK</p>
                <p className="text-lavender font-semibold mt-4 mb-2">knowledge_nodes</p>
                <p className="text-ink/60 pl-4 text-xs leading-relaxed">category, weight (1-5)</p>
              </div>
            </div>
          </div>

          <a href="https://thevillanelle.github.io/studio" target="_blank" rel="noopener noreferrer"
            className="inline-block font-mono text-sm text-rose border border-rose px-6 py-3 rounded-full hover:bg-rose hover:text-cream transition-colors">
            View Studio →
          </a>
        </div>
      </div>
    </main>
  )
}
