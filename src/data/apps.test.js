import { describe, it, expect } from 'vitest'
import { SUITE, MARKETING_SITE } from './apps'

const REQUIRED_FIELDS = ['to', 'name', 'label', 'question', 'desc', 'domain', 'href', 'statusDesc', 'color', 'bg', 'border']

describe('SUITE', () => {
  it('has exactly 5 apps', () => {
    expect(SUITE).toHaveLength(5)
  })

  it('has unique internal routes', () => {
    const routes = SUITE.map(a => a.to)
    expect(new Set(routes).size).toBe(routes.length)
  })

  it('has unique external hrefs', () => {
    const hrefs = SUITE.map(a => a.href)
    expect(new Set(hrefs).size).toBe(hrefs.length)
  })

  it('has unique names', () => {
    const names = SUITE.map(a => a.name)
    expect(new Set(names).size).toBe(names.length)
  })

  SUITE.forEach(app => {
    describe(app.name, () => {
      REQUIRED_FIELDS.forEach(field => {
        it(`has a non-empty "${field}" field`, () => {
          expect(app[field]).toBeTruthy()
        })
      })

      it('href is a valid https URL', () => {
        expect(app.href).toMatch(/^https:\/\//)
      })

      it('health is null or a valid https URL', () => {
        if (app.health !== null) {
          expect(app.health).toMatch(/^https:\/\//)
        } else {
          expect(app.health).toBeNull()
        }
      })

      it('to starts with /', () => {
        expect(app.to).toMatch(/^\//)
      })

      it('color is a valid hex string', () => {
        expect(app.color).toMatch(/^#[0-9a-fA-F]{3,8}$/)
      })

      it('bg is a CSS rgba string', () => {
        expect(app.bg).toMatch(/^rgba\(/)
      })

      it('border is a CSS rgba string', () => {
        expect(app.border).toMatch(/^rgba\(/)
      })

      it('health endpoint is under the same domain as href (when not null)', () => {
        if (!app.health) return
        const appHost = new URL(app.href).host
        const healthHost = new URL(app.health).host
        expect(healthHost).toBe(appHost)
      })
    })
  })
})

describe('MARKETING_SITE', () => {
  it('has a name', () => expect(MARKETING_SITE.name).toBeTruthy())
  it('url is a valid https URL', () => expect(MARKETING_SITE.url).toMatch(/^https:\/\//))
  it('health is a valid https URL', () => expect(MARKETING_SITE.health).toMatch(/^https:\/\//))
  it('color is a valid hex string', () => expect(MARKETING_SITE.color).toMatch(/^#[0-9a-fA-F]{3,8}$/))
  it('statusDesc is non-empty', () => expect(MARKETING_SITE.statusDesc).toBeTruthy())
})
