import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const APPS = [
  { name: 'Ritualwear',   url: 'https://wear.ritualware.app',   health: 'https://wear.ritualware.app/health.json',   color: '#D4919A', desc: 'Style Oracle' },
  { name: 'Glow Up',      url: 'https://glowup.ritualware.app', health: 'https://glowup.ritualware.app/health.json', color: '#8FA688', desc: 'Beauty Audit' },
  { name: 'Ritualwhere?', url: 'https://where.ritualware.app',  health: 'https://where.ritualware.app/health.json',  color: '#A89BC4', desc: 'City Guide' },
  { name: "m'atelier",    url: 'https://studio.ritualware.app', health: 'https://studio.ritualware.app/health.json', color: '#C8A86B', desc: 'Studio' },
  { name: 'Ritualware',   url: 'https://ritualware.app',        health: 'https://ritualware.app/health.json',        color: '#C4717A', desc: 'Marketing site' },
]

function StatusDot({ status }) {
  if (status === 'checking') return <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
  if (status === 'up')       return <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500" />
  return                            <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500" />
}

export default function Status() {
  const [results, setResults]       = useState(APPS.map(app => ({ ...app, status: 'checking', ms: null })))
  const [lastChecked, setLastChecked] = useState(null)
  const [checking, setChecking]     = useState(false)

  const checkAll = useCallback(async () => {
    setChecking(true)
    setResults(prev => prev.map(r => ({ ...r, status: 'checking', ms: null })))

    const updated = await Promise.all(
      APPS.map(async (app) => {
        const start = performance.now()
        try {
          const res = await fetch(app.health, { cache: 'no-store' })
          const ms = Math.round(performance.now() - start)
          if (!res.ok) return { ...app, status: 'down', ms, error: `HTTP ${res.status}` }
          const data = await res.json()
          if (data.status !== 'ok') return { ...app, status: 'down', ms, error: 'Bad response' }
          return { ...app, status: 'up', ms }
        } catch (err) {
          return { ...app, status: 'down', ms: null, error: err.message }
        }
      })
    )

    setResults(updated)
    setLastChecked(new Date())
    setChecking(false)
  }, [])

  useEffect(() => {
    checkAll()
    const interval = setInterval(checkAll, 60_000)
    return () => clearInterval(interval)
  }, [checkAll])

  const allUp   = results.every(r => r.status === 'up')
  const anyDown = results.some(r => r.status === 'down')
  const upCount = results.filter(r => r.status === 'up').length

  return (
    <main className="pt-32 pb-24 px-6 md:px-16 max-w-3xl mx-auto">

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
        <p className="font-mono text-sm tracking-[0.25em] mb-4" style={{ color: 'var(--amber)' }}>system status</p>
        <h1 className="font-display text-ink leading-tight mb-4" style={{ fontSize: 'clamp(40px,5vw,64px)' }}>
          {anyDown ? 'Degraded.' : allUp ? 'All systems go.' : 'Checking…'}
        </h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-mono"
          style={{
            background:   anyDown ? 'rgba(239,68,68,0.08)'   : allUp ? 'rgba(34,197,94,0.08)'   : 'rgba(251,191,36,0.08)',
            borderColor:  anyDown ? 'rgba(239,68,68,0.3)'    : allUp ? 'rgba(34,197,94,0.3)'    : 'rgba(251,191,36,0.3)',
            color:        anyDown ? '#ef4444'                 : allUp ? '#22c55e'                 : '#f59e0b',
          }}>
          <StatusDot status={anyDown ? 'down' : allUp ? 'up' : 'checking'} />
          {anyDown ? `${upCount}/${APPS.length} operational` : allUp ? `${APPS.length}/${APPS.length} operational` : 'Checking…'}
        </div>
      </motion.div>

      <div className="space-y-3 mb-12">
        {results.map((app, i) => (
          <motion.div key={app.name}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className="flex items-center justify-between rounded-2xl px-6 py-5"
            style={{ background: 'var(--bg-alt)', border: '1px solid rgba(0,0,0,0.06)' }}>

            <div className="flex items-center gap-4">
              <div className="w-1 h-10 rounded-full flex-shrink-0" style={{ background: app.color }} />
              <div>
                <p className="font-display text-ink text-lg leading-none mb-1">{app.name}</p>
                <p className="font-mono text-xs" style={{ color: 'var(--ink-muted)' }}>{app.desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {app.ms !== null && (
                <span className="font-mono text-xs hidden sm:block"
                  style={{ color: app.ms < 500 ? '#22c55e' : app.ms < 1500 ? '#f59e0b' : '#ef4444' }}>
                  {app.ms}ms
                </span>
              )}
              {app.error && (
                <span className="font-mono text-xs text-red-400 hidden sm:block">{app.error}</span>
              )}
              <div className="flex items-center gap-2">
                <StatusDot status={app.status} />
                <span className="font-mono text-xs capitalize"
                  style={{ color: app.status === 'up' ? '#22c55e' : app.status === 'down' ? '#ef4444' : 'var(--ink-muted)' }}>
                  {app.status === 'checking' ? '…' : app.status}
                </span>
              </div>
              <a href={app.url} target="_blank" rel="noopener noreferrer"
                className="font-mono text-xs hover:opacity-70 transition-opacity hidden sm:block"
                style={{ color: app.color }}>
                Open ↗
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <p className="font-mono text-xs" style={{ color: 'var(--ink-muted)' }}>
          {lastChecked
            ? `Last checked ${lastChecked.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit' })}`
            : 'Checking…'}
          {' · '}Auto-refreshes every 60s
        </p>
        <button onClick={checkAll} disabled={checking}
          className="font-mono text-xs px-4 py-2 rounded-full border transition-all hover:opacity-80 disabled:opacity-40"
          style={{ borderColor: 'var(--amber)', color: 'var(--amber)' }}>
          {checking ? 'Checking…' : 'Check now'}
        </button>
      </div>
    </main>
  )
}
