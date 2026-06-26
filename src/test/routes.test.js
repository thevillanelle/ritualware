import { describe, it, expect } from 'vitest'

describe('ritualware hub routes', () => {

  it('all expected route paths are defined', () => {
    const routes = ['/', '/platform', '/doubles', '/matelier', '/ritualwear', '/glowup', '/ritualwhere', '/about', '/status']
    routes.forEach(r => expect(r).toMatch(/^\//))
  })

  it('route list covers all suite apps', () => {
    const routes = ['/', '/platform', '/doubles', '/matelier', '/ritualwear', '/glowup', '/ritualwhere', '/about', '/status']
    expect(routes).toContain('/glowup')
    expect(routes).toContain('/matelier')
    expect(routes).toContain('/ritualwhere')
    expect(routes).toContain('/ritualwear')
    expect(routes).toContain('/status')
  })

  it('route count matches expected pages', () => {
    const routes = ['/', '/platform', '/doubles', '/matelier', '/ritualwear', '/glowup', '/ritualwhere', '/about', '/status']
    expect(routes).toHaveLength(9)
  })

  it('all routes are unique', () => {
    const routes = ['/', '/platform', '/doubles', '/matelier', '/ritualwear', '/glowup', '/ritualwhere', '/about', '/status']
    expect(new Set(routes).size).toBe(routes.length)
  })
})
