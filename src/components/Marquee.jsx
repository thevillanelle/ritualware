export default function Marquee() {
  const text = "know yourself · dress with intention · live in the right city · build the right life · own your aesthetic · audit everything · know yourself · dress with intention · "
  return (
    <div className="overflow-hidden py-3 bg-cream-alt border-y border-ink/10">
      <div className="flex marquee-track whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="font-mono text-xs text-amber tracking-[0.2em] mr-0">{text}</span>
        ))}
      </div>
    </div>
  )
}
