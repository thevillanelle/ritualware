/**
 * Check a single app's health endpoint.
 * Apps with health: null (e.g. GitHub Pages) fall back to checking the root URL
 * for an HTTP 200, skipping the JSON status assertion.
 */
export async function checkApp(app) {
  const start = performance.now()
  try {
    const checkUrl = app.health ?? app.url
    const res = await fetch(checkUrl, { cache: 'no-store' })
    const ms  = Math.round(performance.now() - start)
    if (!res.ok) return { ...app, status: 'down', ms, error: `HTTP ${res.status}` }
    if (app.health) {
      const data = await res.json()
      if (data.status !== 'ok') return { ...app, status: 'down', ms, error: 'Bad response' }
    }
    return { ...app, status: 'up', ms }
  } catch (err) {
    return { ...app, status: 'down', ms: null, error: err.message }
  }
}

export async function checkAll(apps) {
  return Promise.all(apps.map(checkApp))
}
