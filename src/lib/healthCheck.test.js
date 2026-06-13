import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { checkApp, checkAll } from './healthCheck'

const baseApp = {
  name: 'Ritualwear',
  url: 'https://wear.ritualware.app',
  health: 'https://wear.ritualware.app/health.json',
  color: '#D4919A',
}

function mockFetch(response) {
  vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(response)))
}

function mockFetchError(message) {
  vi.stubGlobal('fetch', vi.fn(() => Promise.reject(new Error(message))))
}

beforeEach(() => vi.stubGlobal('performance', { now: vi.fn(() => 0) }))
afterEach(() => vi.unstubAllGlobals())

describe('checkApp', () => {
  describe('with health.json endpoint', () => {
    it('returns up when health.json has status ok', async () => {
      mockFetch({ ok: true, json: () => Promise.resolve({ status: 'ok' }) })
      const result = await checkApp(baseApp)
      expect(result.status).toBe('up')
    })

    it('returns down when health.json has a non-ok status field', async () => {
      mockFetch({ ok: true, json: () => Promise.resolve({ status: 'degraded' }) })
      const result = await checkApp(baseApp)
      expect(result.status).toBe('down')
      expect(result.error).toBe('Bad response')
    })

    it('returns down when HTTP status is not 2xx', async () => {
      mockFetch({ ok: false, status: 503 })
      const result = await checkApp(baseApp)
      expect(result.status).toBe('down')
      expect(result.error).toBe('HTTP 503')
    })

    it('returns down with error message when fetch throws', async () => {
      mockFetchError('Network error')
      const result = await checkApp(baseApp)
      expect(result.status).toBe('down')
      expect(result.error).toBe('Network error')
      expect(result.ms).toBeNull()
    })

    it('fetches the health URL, not the app URL', async () => {
      const mockFn = vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ status: 'ok' }) }))
      vi.stubGlobal('fetch', mockFn)
      await checkApp(baseApp)
      expect(mockFn).toHaveBeenCalledWith(baseApp.health, expect.any(Object))
    })

    it('passes cache: no-store to prevent stale reads', async () => {
      const mockFn = vi.fn(() => Promise.resolve({ ok: true, json: () => Promise.resolve({ status: 'ok' }) }))
      vi.stubGlobal('fetch', mockFn)
      await checkApp(baseApp)
      expect(mockFn).toHaveBeenCalledWith(expect.any(String), { cache: 'no-store' })
    })
  })

  describe('with null health (GitHub Pages / no health.json)', () => {
    const doublesApp = { ...baseApp, name: 'EQX Doubles', health: null, url: 'https://thevillanelle.github.io/eqx-doubles/index.html' }

    it('falls back to checking the root URL', async () => {
      const mockFn = vi.fn(() => Promise.resolve({ ok: true }))
      vi.stubGlobal('fetch', mockFn)
      await checkApp(doublesApp)
      expect(mockFn).toHaveBeenCalledWith(doublesApp.url, expect.any(Object))
    })

    it('returns up for HTTP 200 without checking JSON', async () => {
      mockFetch({ ok: true })
      const result = await checkApp(doublesApp)
      expect(result.status).toBe('up')
    })

    it('returns down for non-200 response', async () => {
      mockFetch({ ok: false, status: 404 })
      const result = await checkApp(doublesApp)
      expect(result.status).toBe('down')
      expect(result.error).toBe('HTTP 404')
    })
  })

  it('preserves all original app fields in the result', async () => {
    mockFetch({ ok: true, json: () => Promise.resolve({ status: 'ok' }) })
    const result = await checkApp(baseApp)
    expect(result.name).toBe(baseApp.name)
    expect(result.color).toBe(baseApp.color)
    expect(result.url).toBe(baseApp.url)
  })
})

describe('checkAll', () => {
  it('checks every app and returns results in the same order', async () => {
    const apps = [
      { ...baseApp, name: 'App A', health: 'https://a.com/health.json' },
      { ...baseApp, name: 'App B', health: null, url: 'https://b.com' },
    ]
    vi.stubGlobal('fetch', vi.fn()
      .mockResolvedValueOnce({ ok: true, json: () => Promise.resolve({ status: 'ok' }) })
      .mockResolvedValueOnce({ ok: false, status: 503 }))

    const results = await checkAll(apps)
    expect(results).toHaveLength(2)
    expect(results[0].name).toBe('App A')
    expect(results[0].status).toBe('up')
    expect(results[1].name).toBe('App B')
    expect(results[1].status).toBe('down')
  })
})
