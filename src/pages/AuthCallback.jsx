import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    // Supabase parses the token from the URL hash automatically; we just wait for the session
    supabase.auth.getSession().then(() => navigate('/', { replace: true }))
  }, [navigate])

  return (
    <main className="pt-40 pb-24 text-center">
      <p className="font-mono text-sm" style={{ color: 'var(--ink-muted)' }}>Signing you in…</p>
    </main>
  )
}
