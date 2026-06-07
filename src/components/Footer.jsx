export default function Footer() {
  return (
    <footer className="bg-cream-alt border-t border-ink/10 py-12 px-6 text-center">
      <p className="font-display italic text-xl text-ink mb-1">Ritualware</p>
      <p className="font-sans text-xs text-ink-muted">© 2025 VILE LLC</p>
      <div style={{ textAlign: 'center', paddingBottom: '1.5rem' }}>
    <a href="/status" style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ink-muted)', opacity: 0.5 }}
      className="hover:opacity-80 transition-opacity">
      system status
    </a>
  </div>
</footer>
  )
}
