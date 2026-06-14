import { useEffect, useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { supabase } from '../lib/supabase'

const WEAR_URL  = 'https://wear.ritualware.app'
const GLOWUP_URL = 'https://glowup.ritualware.app'
const WHERE_URL = 'https://where.ritualware.app'
const ATELIER_URL = 'https://atelier.ritualware.app'

// ─── Helpers ───────────────────────────────────────────────────────────────

function Section({ title, label, children, empty, emptyAction }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.5 }}
      style={{ marginBottom: '4rem' }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '1.5rem' }}>
        {label && (
          <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber)', opacity: 0.8 }}>
            {label}
          </span>
        )}
        <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(22px, 3vw, 30px)', color: 'var(--ink)', fontWeight: 400 }}>
          {title}
        </h2>
      </div>
      <div style={{ borderLeft: '1px solid var(--amber)', paddingLeft: '1.5rem', opacity: 0.25, marginBottom: '1.25rem', height: 0 }} />
      {empty ? (
        <div style={{ background: 'var(--bg-alt)', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink-muted)', marginBottom: '1rem' }}>
            Not yet written.
          </p>
          {emptyAction && (
            <a href={emptyAction.href} target="_blank" rel="noreferrer"
              style={{ display: 'inline-block', fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', textDecoration: 'none', borderBottom: '1px solid var(--amber)', paddingBottom: '2px' }}>
              {emptyAction.label} →
            </a>
          )}
        </div>
      ) : children}
    </motion.section>
  )
}

function Chip({ children, accent }) {
  return (
    <span style={{
      display: 'inline-block',
      fontFamily: '"DM Sans", sans-serif',
      fontSize: '0.75rem',
      padding: '0.35rem 0.85rem',
      borderRadius: '999px',
      background: accent ? 'var(--amber)' : 'var(--bg-alt)',
      color: accent ? '#fff' : 'var(--ink)',
      marginRight: '0.4rem',
      marginBottom: '0.4rem',
    }}>
      {children}
    </span>
  )
}

function Field({ label, value }) {
  if (!value) return null
  return (
    <div style={{ marginBottom: '0.75rem' }}>
      <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', marginBottom: '0.25rem' }}>{label}</span>
      <span style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.05rem', color: 'var(--ink)' }}>{value}</span>
    </div>
  )
}

function Grid({ children }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
      {children}
    </div>
  )
}

function Card({ children, style }) {
  return (
    <div style={{ background: 'var(--bg-alt)', borderRadius: '1rem', padding: '1.5rem', ...style }}>
      {children}
    </div>
  )
}

// ─── Score bar used in Glow Up Scorecard ──────────────────────────────────

function ScoreBar({ label, score }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
        <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: 'var(--ink)' }}>{label}</span>
        <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: 'var(--amber)' }}>{score}/10</span>
      </div>
      <div style={{ height: '3px', background: 'var(--bg-dark)', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${score * 10}%`, background: 'var(--amber)', borderRadius: '2px', transition: 'width 0.8s ease' }} />
      </div>
    </div>
  )
}

// ─── Label formatters ──────────────────────────────────────────────────────

const fmt = (s) => s ? s.replace(/_/g, ' ') : null

// ─── Main component ────────────────────────────────────────────────────────

export default function RitualProfile() {
  const { user, loading: authLoading, signInWithGoogle } = useAuth()
  const [data, setData]                   = useState(null)
  const [loading, setLoading]             = useState(true)
  const [generating, setGenerating]       = useState(false)
  const [narrativeError, setNarrativeError] = useState(null)

  const loadProfile = useCallback(async () => {
    if (!user) return
    setLoading(true)

    const uid = user.id

    const [
      profileRes, rulesRes, inspoRes, looksRes,
      neighborhoodRes, dateRes, datingRes,
      atelierRes, goalsRes,
      glowRes, styleFinderRes,
      narrativeRes,
    ] = await Promise.all([
      supabase.from('style_profiles').select('*').eq('user_id', uid).single(),
      supabase.from('style_rules').select('*').eq('user_id', uid).order('created_at', { ascending: false }),
      supabase.from('inspo_images').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(6),
      supabase.from('saved_looks').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(6),
      supabase.from('neighborhood_results').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(1),
      supabase.from('date_night_results').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(1),
      supabase.from('dating_profiles').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(1),
      supabase.from('atelier_projects').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(3),
      supabase.from('atelier_goals').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(1),
      supabase.from('glow_up_results').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(1),
      supabase.from('style_finder_results').select('*').eq('user_id', uid).order('created_at', { ascending: false }).limit(1),
      supabase.from('ritual_narratives').select('*').eq('user_id', uid).single(),
    ])

    setData({
      profile:      profileRes.data,
      rules:        rulesRes.data ?? [],
      inspo:        inspoRes.data ?? [],
      looks:        looksRes.data ?? [],
      neighborhood: neighborhoodRes.data?.[0] ?? null,
      dateNight:    dateRes.data?.[0] ?? null,
      dating:       datingRes.data?.[0] ?? null,
      atelier:      atelierRes.data ?? [],
      goals:        goalsRes.data?.[0] ?? null,
      glow:         glowRes.data?.[0] ?? null,
      styleFinder:  styleFinderRes.data?.[0] ?? null,
      narrative:    narrativeRes.data ?? null,
    })

    setLoading(false)
  }, [user])

  useEffect(() => { loadProfile() }, [loadProfile])

  const generateNarrative = async () => {
    if (!data) return
    setGenerating(true)
    setNarrativeError(null)

    try {
      const payload = {
        profile:      data.profile,
        rules:        data.rules,
        glow:         data.glow?.result,
        styleFinder:  data.styleFinder?.result,
        neighborhood: data.neighborhood,
        dating:       data.dating,
        goals:        data.goals,
        atelier:      data.atelier,
      }

      const res = await fetch(`${import.meta.env.VITE_AI_EDGE_URL ?? ''}/functions/v1/generate-narrative`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}` },
        body: JSON.stringify({ userId: user.id, payload }),
      })

      if (!res.ok) throw new Error(`Generation failed (${res.status})`)
      const { narrative } = await res.json()

      await supabase.from('ritual_narratives').upsert({ user_id: user.id, narrative })
      setData(prev => ({ ...prev, narrative: { narrative } }))
    } catch (e) {
      setNarrativeError(e.message)
    } finally {
      setGenerating(false)
    }
  }

  // ── Auth gate ────────────────────────────────────────────────────────────

  if (authLoading) return null

  if (!user) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center', maxWidth: '420px' }}>
          <p style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(28px,5vw,44px)', color: 'var(--ink)', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Your Ritual Profile<br /><span style={{ fontStyle: 'italic', color: 'var(--rose)' }}>lives here.</span>
          </p>
          <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--ink-muted)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            Sign in to see your case study — everything the suite knows about you, assembled in one place.
          </p>
          <button onClick={signInWithGoogle}
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', background: 'var(--ink)', color: 'var(--bg)', padding: '0.85rem 2.5rem', borderRadius: '999px', border: 'none', cursor: 'pointer' }}>
            Sign in with Google
          </button>
        </div>
      </main>
    )
  }

  if (loading) {
    return (
      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--ink-muted)' }}>
          Assembling your case study…
        </p>
      </main>
    )
  }

  const p = data?.profile ?? {}
  const glow = data?.glow?.result ?? null
  const sf = data?.styleFinder?.result ?? null

  const hasProfile = !!data?.profile

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: 'clamp(4rem, 8vw, 8rem) 1.5rem 6rem' }}>

      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} style={{ marginBottom: '4rem' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '1rem' }}>
          ritual profile
        </p>
        <h1 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(40px,6vw,72px)', fontWeight: 400, lineHeight: 1.05, color: 'var(--ink)', marginBottom: '1.5rem' }}>
          {user.user_metadata?.full_name ?? 'Your'}<br />
          <span style={{ fontStyle: 'italic', color: 'var(--rose)' }}>case study.</span>
        </h1>
        <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--ink-muted)', lineHeight: 1.7, maxWidth: '520px' }}>
          Everything the suite knows about you, assembled into a single document.
        </p>
      </motion.div>

      {/* 1 ── The Body */}
      <Section title="The Body" label="01" empty={!hasProfile || !p.kibbe_type} emptyAction={{ href: `${WEAR_URL}/quiz`, label: 'Take the Style Bible quiz' }}>
        {hasProfile && p.kibbe_type && (
          <Grid>
            <Card>
              <Field label="Kibbe type" value={fmt(p.kibbe_type)} />
              {p.body_notes?.emphasize?.length > 0 && (
                <Field label="Emphasize" value={p.body_notes.emphasize.map(fmt).join(', ')} />
              )}
              {p.body_notes?.minimize?.length > 0 && (
                <Field label="Minimize" value={p.body_notes.minimize.map(fmt).join(', ')} />
              )}
            </Card>
          </Grid>
        )}
      </Section>

      {/* 2 ── Color Story */}
      <Section title="Color Story" label="02" empty={!hasProfile || !p.color_season} emptyAction={{ href: `${WEAR_URL}/quiz`, label: 'Take the Style Bible quiz' }}>
        {hasProfile && p.color_season && (
          <>
            <Grid>
              <Card>
                <Field label="Season" value={fmt(p.color_season)} />
                <Field label="Undertone" value={fmt(p.undertone)} />
                <Field label="Metal" value={fmt(p.metal_preference)} />
              </Card>
              {(p.palette_loves?.length > 0 || p.palette_avoids?.length > 0) && (
                <Card>
                  {p.palette_loves?.length > 0 && (
                    <div style={{ marginBottom: '0.75rem' }}>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', marginBottom: '0.5rem' }}>Palette loves</span>
                      <div>{p.palette_loves.map(c => <Chip key={c}>{fmt(c)}</Chip>)}</div>
                    </div>
                  )}
                  {p.palette_avoids?.length > 0 && (
                    <div>
                      <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', display: 'block', marginBottom: '0.5rem' }}>Avoids</span>
                      <div>{p.palette_avoids.map(c => <Chip key={c}>{fmt(c)}</Chip>)}</div>
                    </div>
                  )}
                </Card>
              )}
            </Grid>
          </>
        )}
      </Section>

      {/* 3 ── Style Philosophy */}
      <Section title="Style Philosophy" label="03" empty={!hasProfile || !p.style_words?.length} emptyAction={{ href: `${WEAR_URL}/quiz`, label: 'Take the Style Bible quiz' }}>
        {hasProfile && (
          <>
            {p.style_words?.length > 0 && (
              <div style={{ marginBottom: '1.25rem' }}>
                {p.style_words.map(w => <Chip key={w} accent>{fmt(w)}</Chip>)}
              </div>
            )}
            <Grid>
              {p.era_references?.length > 0 && (
                <Card>
                  <Field label="Era references" value={p.era_references.map(fmt).join(', ')} />
                </Card>
              )}
              {p.trend_stance && (
                <Card>
                  <Field label="Trends" value={fmt(p.trend_stance)} />
                  {p.statement_vs_cohesive && <Field label="Dressing style" value={fmt(p.statement_vs_cohesive)} />}
                  {p.matching_philosophy && <Field label="Matching" value={fmt(p.matching_philosophy)} />}
                </Card>
              )}
            </Grid>
            {p.fabric_loves?.length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.5rem' }}>Fabric loves</p>
                {p.fabric_loves.map(f => <Chip key={f}>{fmt(f)}</Chip>)}
                {p.fabric_avoids?.map(f => <Chip key={f} style={{ opacity: 0.4 }}>{fmt(f)} ✕</Chip>)}
              </div>
            )}
          </>
        )}
      </Section>

      {/* 4 ── The Details */}
      <Section title="The Details" label="04" empty={!hasProfile || (!p.lip_preference && !p.nail_shape && !p.jewelry_default && !p.fragrance_family?.length)} emptyAction={{ href: `${WEAR_URL}/quiz`, label: 'Take the Style Bible quiz' }}>
        {hasProfile && (p.lip_preference || p.nail_shape || p.jewelry_default || p.fragrance_family?.length > 0) && (
          <Grid>
            <Card>
              <Field label="Lip rule" value={p.lip_custom || fmt(p.lip_logic) || fmt(p.lip_preference)} />
              <Field label="Nail shape" value={fmt(p.nail_shape)} />
              <Field label="Jewelry" value={fmt(p.jewelry_default)} />
            </Card>
            {p.fragrance_family?.length > 0 && (
              <Card>
                <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.5rem' }}>Fragrance family</p>
                {p.fragrance_family.map(f => <Chip key={f}>{fmt(f)}</Chip>)}
              </Card>
            )}
          </Grid>
        )}
      </Section>

      {/* 5 ── Her Laws */}
      <Section title="Her Laws" label="05" empty={!data?.rules?.length && !p.never_wears && !p.style_uniform && !p.style_mistake} emptyAction={{ href: `${WEAR_URL}/quiz`, label: 'Add your rules in the Style Bible' }}>
        {(data?.rules?.length > 0 || p.never_wears || p.style_uniform || p.style_mistake) && (
          <div>
            {p.never_wears && <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>Never: {p.never_wears}</p>}
            {p.style_uniform && <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink)', marginBottom: '0.75rem' }}>Uniform: {p.style_uniform}</p>}
            {p.style_mistake && <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--ink-muted)', marginBottom: '1.25rem' }}>Never again: {p.style_mistake}</p>}
            {data?.rules?.map(r => (
              <p key={r.rule_id} style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.9rem', color: 'var(--ink)', marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--amber)' }}>
                {r.rule_text}
              </p>
            ))}
          </div>
        )}
      </Section>

      {/* 6 ── Style Identity (Style Finder archetype) */}
      <Section title="Style Identity" label="06" empty={!sf} emptyAction={{ href: `${GLOWUP_URL}/style-finder`, label: 'Take the Style Finder' }}>
        {sf && (
          <Card>
            <p style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.5rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>{sf.persona_name}</p>
            <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '1rem', color: 'var(--rose)', marginBottom: '1rem' }}>{sf.headline}</p>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.7, marginBottom: '1rem' }}>{sf.archetype_description}</p>
            {sf.style_words?.length > 0 && <div>{sf.style_words.map(w => <Chip key={w} accent>{w}</Chip>)}</div>}
          </Card>
        )}
      </Section>

      {/* 7 ── Skin and Wellness */}
      <Section title="Skin &amp; Wellness" label="07" empty={!glow?.section_verdicts?.skin} emptyAction={{ href: `${GLOWUP_URL}`, label: 'Take the Glow Up audit' }}>
        {glow?.section_verdicts?.skin && (
          <Card>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.7 }}>{glow.section_verdicts.skin}</p>
          </Card>
        )}
      </Section>

      {/* 8 ── Hair and Beauty */}
      <Section title="Hair &amp; Beauty" label="08" empty={!glow?.section_verdicts?.hair} emptyAction={{ href: `${GLOWUP_URL}`, label: 'Take the Glow Up audit' }}>
        {glow?.section_verdicts?.hair && (
          <Card>
            <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.7 }}>{glow.section_verdicts.hair}</p>
          </Card>
        )}
      </Section>

      {/* 9 ── Professional Investment */}
      <Section title="Professional Investment" label="09" empty={!data?.atelier?.length && !data?.goals} emptyAction={{ href: `${ATELIER_URL}`, label: 'Open m\'atelier' }}>
        {(data?.atelier?.length > 0 || data?.goals) && (
          <div>
            {data?.goals?.goal_text && (
              <p style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: 'italic', fontSize: '1.15rem', color: 'var(--ink)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
                "{data.goals.goal_text}"
              </p>
            )}
            {data?.atelier?.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {data.atelier.map(p => (
                  <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.75rem 1rem', background: 'var(--bg-alt)', borderRadius: '0.75rem' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', minWidth: '60px' }}>{p.status}</span>
                    <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', color: 'var(--ink)' }}>{p.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </Section>

      {/* 10 ── Mindset and Goals */}
      <Section title="Mindset &amp; Goals" label="10" empty={!glow?.section_verdicts?.mindset} emptyAction={{ href: `${GLOWUP_URL}`, label: 'Take the Glow Up audit' }}>
        {glow?.section_verdicts?.mindset && (
          <div>
            <Card style={{ marginBottom: '1rem' }}>
              <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.7 }}>{glow.section_verdicts.mindset}</p>
            </Card>
            {glow.quick_wins?.length > 0 && (
              <div>
                <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: '0.75rem' }}>Quick wins</p>
                {glow.quick_wins.map((w, i) => (
                  <p key={i} style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', color: 'var(--ink)', marginBottom: '0.5rem', paddingLeft: '1rem', borderLeft: '2px solid var(--sage)' }}>{w}</p>
                ))}
              </div>
            )}
          </div>
        )}
      </Section>

      {/* 11 ── The Glow Up Scorecard */}
      <Section title="The Glow Up Scorecard" label="11" empty={!glow} emptyAction={{ href: `${GLOWUP_URL}`, label: 'Take the Glow Up audit' }}>
        {glow && (
          <div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
              {glow.overall_tier && <Chip accent>{glow.overall_tier}</Chip>}
              {glow.strongest_area && <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: 'var(--ink-muted)' }}>Strongest: {glow.strongest_area}</span>}
            </div>
            {glow.section_verdicts && Object.entries(glow.section_verdicts).map(([key, val]) => {
              const score = typeof val === 'object' ? val?.score : null
              return score != null ? <ScoreBar key={key} label={fmt(key)} score={score} /> : null
            })}
          </div>
        )}
      </Section>

      {/* 12 ── City Life */}
      <Section title="City Life" label="12" empty={!data?.neighborhood && !data?.dateNight} emptyAction={{ href: `${WHERE_URL}/neighborhood`, label: 'Find your neighborhood' }}>
        {(data?.neighborhood || data?.dateNight) && (
          <Grid>
            {data?.neighborhood && (
              <Card>
                <Field label="Neighborhood" value={data.neighborhood.top_match} />
                {data.neighborhood.vibe_words?.length > 0 && (
                  <div>{data.neighborhood.vibe_words.map(v => <Chip key={v}>{v}</Chip>)}</div>
                )}
              </Card>
            )}
            {data?.dateNight && (
              <Card>
                <Field label="Date night vibe" value={data.dateNight.vibe ?? data.dateNight.result?.vibe} />
                {data.dateNight.result?.venue_types?.map(v => <Chip key={v}>{v}</Chip>)}
              </Card>
            )}
          </Grid>
        )}
      </Section>

      {/* 13 ── The Rebrand */}
      <Section title="The Rebrand" label="13" empty={!data?.dating} emptyAction={{ href: `${WHERE_URL}/dating`, label: 'Open Dating Strategy' }}>
        {data?.dating && (
          <Grid>
            <Card>
              <Field label="Type" value={fmt(data.dating.dominant_type)} />
              <Field label="Strategy" value={fmt(data.dating.main_strategy)} />
              {data.dating.pattern && <Field label="Pattern" value={data.dating.pattern} />}
            </Card>
          </Grid>
        )}
      </Section>

      {/* 14 ── Oracle Looks */}
      <Section title="Oracle Looks" label="14" empty={!data?.looks?.length} emptyAction={{ href: `${WEAR_URL}/oracle`, label: 'Ask the Oracle' }}>
        {data?.looks?.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {data.looks.map(look => (
              <Card key={look.id}>
                <p style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: '0.5rem' }}>{look.occasion}</p>
                <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', color: 'var(--ink)', lineHeight: 1.7 }}>{look.recommendation}</p>
              </Card>
            ))}
          </div>
        )}
      </Section>

      {/* 15 ── m'atelier */}
      <Section title="m'atelier" label="15" empty={!data?.atelier?.length} emptyAction={{ href: `${ATELIER_URL}`, label: 'Open m\'atelier' }}>
        {data?.atelier?.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data.atelier.map(proj => (
              <div key={proj.id} style={{ padding: '1rem 1.25rem', background: 'var(--bg-alt)', borderRadius: '0.75rem', display: 'grid', gridTemplateColumns: '80px 1fr', gap: '1rem', alignItems: 'start' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--amber)', paddingTop: '2px' }}>{proj.status}</span>
                <div>
                  <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.9rem', color: 'var(--ink)', marginBottom: '0.25rem' }}>{proj.name}</p>
                  {proj.objective && <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: 'var(--ink-muted)', lineHeight: 1.6 }}>{proj.objective}</p>}
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* ── Generate Narrative ───────────────────────────────────────────────── */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ marginTop: '5rem', padding: '3rem', background: 'var(--bg-dark)', borderRadius: '1.5rem', textAlign: 'center' }}>
        <p style={{ fontFamily: '"Playfair Display", Georgia, serif', fontStyle: 'italic', fontSize: 'clamp(20px,3vw,28px)', color: '#FAF7F2', marginBottom: '1rem', lineHeight: 1.3 }}>
          {data?.narrative ? 'Your narrative is written.' : 'Ready to read the full case study?'}
        </p>
        <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontStyle: 'italic', fontSize: '1.05rem', color: '#C8BFB0', marginBottom: '2rem', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto 2rem' }}>
          {data?.narrative
            ? 'Regenerate any time — it updates as your data does.'
            : 'Send everything to the Oracle. Get a prose case study back.'}
        </p>

        {data?.narrative?.narrative && (
          <div style={{ textAlign: 'left', background: 'rgba(255,255,255,0.04)', borderRadius: '1rem', padding: '2rem', marginBottom: '2rem', maxHeight: '400px', overflowY: 'auto' }}>
            <p style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.05rem', color: '#E8DFD0', lineHeight: 1.9, whiteSpace: 'pre-wrap' }}>
              {data.narrative.narrative}
            </p>
          </div>
        )}

        {narrativeError && (
          <p style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: '#e87474', marginBottom: '1rem' }}>{narrativeError}</p>
        )}

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={generateNarrative} disabled={generating}
            style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', background: 'var(--amber)', color: '#fff', padding: '0.85rem 2.5rem', borderRadius: '999px', border: 'none', cursor: generating ? 'wait' : 'pointer', opacity: generating ? 0.6 : 1 }}>
            {generating ? 'Writing…' : data?.narrative ? 'Regenerate narrative' : 'Generate narrative ✦'}
          </button>
          {data?.narrative?.narrative && (
            <button onClick={() => {
              const blob = new Blob([data.narrative.narrative], { type: 'text/markdown' })
              const url = URL.createObjectURL(blob)
              const a = document.createElement('a'); a.href = url; a.download = 'ritual-profile.md'; a.click()
              URL.revokeObjectURL(url)
            }}
              style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', background: 'transparent', color: '#C8BFB0', padding: '0.85rem 2rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer' }}>
              Export .md
            </button>
          )}
        </div>
      </motion.div>

    </main>
  )
}
