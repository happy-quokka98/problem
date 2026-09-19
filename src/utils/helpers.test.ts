import { describe, it, expect } from 'vitest'
import {
  clampCount,
  formatRuntime,
  getStackCategory,
  generateCopyFeedback,
} from './helpers'

describe('Helper Utilities', () => {
  it('formats active runtime seconds into human-readable strings', () => {
    expect(formatRuntime(0)).toBe('0s')
    expect(formatRuntime(45)).toBe('45s')
    expect(formatRuntime(60)).toBe('1m 0s')
    expect(formatRuntime(125)).toBe('2m 5s')
    expect(formatRuntime(-5)).toBe('0s')
  })

  it('clamps counter values within specified minimum and maximum bounds', () => {
    expect(clampCount(10)).toBe(10)
    expect(clampCount(150, -100, 100)).toBe(100)
    expect(clampCount(-200, -100, 100)).toBe(-100)
    expect(clampCount(5, 0, 10)).toBe(5)
  })

  it('categorizes technology stack tags accurately', () => {
    expect(getStackCategory('Vite 6')).toBe('Framework/Tooling')
    expect(getStackCategory('React 19')).toBe('Framework/Tooling')
    expect(getStackCategory('TypeScript 5')).toBe('Language')
    expect(getStackCategory('Lucide Icons')).toBe('UI Components')
    expect(getStackCategory('ESLint & Oxlint')).toBe('Linter')
    expect(getStackCategory('Custom Library')).toBe('General')
  })

  it('generates copy feedback text based on clipboard state', () => {
    expect(generateCopyFeedback(false)).toBe('npm run dev')
    expect(generateCopyFeedback(true)).toBe('Copied to Clipboard!')
  })
})
