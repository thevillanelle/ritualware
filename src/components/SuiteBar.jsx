/**
 * SuiteBar — copy this component into each individual app (wear., glowup., etc.)
 * It provides a persistent "return to suite" strip and shows auth state.
 *
 * Each app needs:
 *   - @supabase/supabase-js installed
 *   - The same src/lib/supabase.js client (identical config = shared cookie session)
 *   - This component mounted at the top of its layout
 */

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { SUITE } from '../data/apps'

export default function SuiteBar({ currentAppHref }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setUser(session?.user ?? null))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const otherApps = SUITE.filter(a => a.href !== currentAppHref)

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(15,12,10,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1.25rem',
        height: '36px',
        gap: '1rem',
      }}
    >
      {/* Back link */}
      <a
        href="https://ritualware.app"
        style={{ fontFamily: 'monospace', fontSize: '11px', color: '#C8A86B', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}
      >
        ← Ritualware
      </a>

      {/* Other apps (hidden on narrow screens via inline style trick) */}
      <div style={{ display: 'flex', gap: '1.25rem', overflow: 'hidden' }}>
        {otherApps.map(app => (
          <a
            key={app.href}
            href={app.href}
            style={{
              fontFamily: 'monospace',
              fontSize: '10px',
              color: app.color,
              letterSpacing: '0.08em',
              opacity: 0.8,
              whiteSpace: 'nowrap',
            }}
          >
            {app.label}
          </a>
        ))}
      </div>

      {/* Auth */}
      <div style={{ flexShrink: 0 }}>
        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {user.user_metadata?.avatar_url && (
              <img
                src={user.user_metadata.avatar_url}
                alt=""
                style={{ width: 20, height: 20, borderRadius: '50%', opacity: 0.9 }}
              />
            )}
            <span style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,0.5)' }}>
              {user.user_metadata?.full_name?.split(' ')[0] ?? user.email}
            </span>
            <button
              onClick={() => supabase.auth.signOut()}
              style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,0.3)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
              sign out
            </button>
          </div>
        ) : (
          <button
            onClick={() =>
              supabase.auth.signInWithOAuth({
                provider: 'google',
                options: { redirectTo: `${window.location.origin}/auth/callback` },
              })
            }
            style={{ fontFamily: 'monospace', fontSize: '10px', color: '#C8A86B', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            sign in
          </button>
        )}
      </div>
    </div>
  )
}
