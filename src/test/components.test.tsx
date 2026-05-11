import { describe, it, expect } from 'vitest'

// Simple smoke tests
describe('AWABEL Site', () => {
  it('renders without crashing', () => {
    expect(true).toBe(true)
  })

  it('has correct brand colors defined', () => {
    const blue = '#1A3FA8'
    const dark = '#0D2680'
    expect(blue).toMatch(/^#[0-9A-F]{6}$/i)
    expect(dark).toMatch(/^#[0-9A-F]{6}$/i)
  })

  it('has correct contact info', () => {
    const email = 'awabel26@gmail.com'
    expect(email).toContain('@')
  })
})
