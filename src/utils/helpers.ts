/**
 * Utility functions for the application
 */

export function clampCount(value: number, min = -100, max = 100): number {
  return Math.min(Math.max(value, min), max)
}

export function formatRuntime(seconds: number): string {
  if (seconds < 0) return '0s'
  if (seconds < 60) {
    return `${seconds}s`
  }
  const mins = Math.floor(seconds / 60)
  const remSecs = seconds % 60
  return `${mins}m ${remSecs}s`
}

export function getStackCategory(tag: string): string {
  if (tag.includes('Vite') || tag.includes('React')) return 'Framework/Tooling'
  if (tag.includes('TypeScript')) return 'Language'
  if (tag.includes('Icons')) return 'UI Components'
  if (tag.includes('ESLint') || tag.includes('Oxlint')) return 'Linter'
  return 'General'
}

export function generateCopyFeedback(isCopied: boolean): string {
  return isCopied ? 'Copied to Clipboard!' : 'npm run dev'
}
