export default function Footer() {
  return (
    <footer className="bg-cream-alt border-t border-ink/10 py-12 px-6 text-center">
      <p className="font-display italic text-xl text-ink mb-2">Ritualware</p>
      <p className="font-sans text-sm text-ink/60 mb-1">Built on the frameworks of Elle Porcher</p>
      <p className="font-mono text-xs text-ink/40 mb-4">© 2025 Ritualware</p>
      <div className="flex justify-center gap-6">
        <a href="https://vile-style-oracle.vercel.app" className="font-mono text-xs text-ink/60 hover:text-rose transition-colors">Ritualwear</a>
        <a href="https://glowup.vercel.app" className="font-mono text-xs text-ink/60 hover:text-sage transition-colors">Glow Up</a>
        <a href="https://ritualwhere.vercel.app" className="font-mono text-xs text-ink/60 hover:text-lavender transition-colors">Ritualwhere?</a>
      </div>
      <p className="font-serif italic text-amber text-sm mt-6">✦</p>
    </footer>
  )
}
