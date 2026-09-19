import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    act(() => {
      vi.runOnlyPendingTimers()
    })
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('renders main navigation brand and hero section title', () => {
    render(<App />)

    expect(screen.getByText('Vite + React Starter')).toBeInTheDocument()
    expect(screen.getByText('Build Modern Web Apps')).toBeInTheDocument()
    expect(screen.getByText('Without Limits')).toBeInTheDocument()
  })

  it('increments counter state when increment button is clicked', () => {
    render(<App />)

    const incrementBtn = screen.getByRole('button', { name: /increment/i })

    expect(screen.getByText('0', { selector: '.counter-value' })).toBeInTheDocument()

    act(() => {
      fireEvent.click(incrementBtn)
    })
    expect(screen.getByText('1', { selector: '.counter-value' })).toBeInTheDocument()

    act(() => {
      fireEvent.click(incrementBtn)
    })
    expect(screen.getByText('2', { selector: '.counter-value' })).toBeInTheDocument()
  })

  it('decrements counter state when decrement button is clicked', () => {
    render(<App />)

    const decrementBtn = screen.getByRole('button', { name: /decrement/i })

    act(() => {
      fireEvent.click(decrementBtn)
    })
    expect(screen.getByText('-1', { selector: '.counter-value' })).toBeInTheDocument()
  })

  it('resets counter state back to zero when reset button is clicked', () => {
    render(<App />)

    const incrementBtn = screen.getByRole('button', { name: /increment/i })
    const resetBtn = screen.getByTitle('Reset counter')

    act(() => {
      fireEvent.click(incrementBtn)
      fireEvent.click(incrementBtn)
    })
    expect(screen.getByText('2', { selector: '.counter-value' })).toBeInTheDocument()

    act(() => {
      fireEvent.click(resetBtn)
    })
    expect(screen.getByText('0', { selector: '.counter-value' })).toBeInTheDocument()
  })

  it('copies shell command to clipboard and toggles feedback text', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: writeTextMock },
      configurable: true,
      writable: true,
    })

    render(<App />)

    const copyBtn = screen.getByRole('button', { name: /npm run dev/i })
    expect(copyBtn).toBeInTheDocument()

    await act(async () => {
      fireEvent.click(copyBtn)
    })

    expect(writeTextMock).toHaveBeenCalledWith('npm run dev')
    expect(screen.getByText('Copied to Clipboard!')).toBeInTheDocument()
  })

  it('renders pre-configured stack tags and updates session runtime timer', () => {
    render(<App />)

    expect(screen.getAllByText('Vite 6')[0]).toBeInTheDocument()
    expect(screen.getByText('React 19')).toBeInTheDocument()
    expect(screen.getByText('TypeScript 5')).toBeInTheDocument()
    expect(screen.getByText('Lucide Icons')).toBeInTheDocument()
    expect(screen.getByText('ESLint & Oxlint')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(3000)
    })

    expect(screen.getByText('3s')).toBeInTheDocument()
  })
})
