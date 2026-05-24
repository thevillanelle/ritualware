export default function Marquee() {
  const text = "style · ritual · glow · place · intention · beauty · identity · ritual · "
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
