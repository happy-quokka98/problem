import { useState, useEffect } from 'react'
import {
  Zap,
  Code2,
  Rocket,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  Plus,
  Minus,
  RefreshCw,
  Sparkles,
  Layers,
  ShieldCheck
} from 'lucide-react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [copied, setCopied] = useState(false)
  const [secondsActive, setSecondsActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsActive((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const copyCommand = () => {
    navigator.clipboard.writeText('npm run dev')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="brand">
          <div className="logo-badge">
            <Zap size={22} />
          </div>
          <span>Vite + React Starter</span>
        </div>
        <div className="nav-links">
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            Vite Docs <ExternalLink size={14} />
          </a>
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            React Docs <ExternalLink size={14} />
          </a>
          <a
            href="https://github.com/vitejs/vite"
            target="_blank"
            rel="noreferrer"
            className="nav-link"
          >
            GitHub <ExternalLink size={14} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-pill">
          <Sparkles size={16} /> Lightning Fast HMR Powered by Vite & React 19
        </div>
        <h1 className="hero-title">
          Build Modern Web Apps <br />
          <span className="gradient-text">Without Limits</span>
        </h1>
        <p className="hero-subtitle">
          Your brand-new Vite + TypeScript + React development setup is configured and ready. 
          Enjoy instantaneous hot module replacement, optimized builds, and type-safe development.
        </p>

        <div className="action-bar">
          <button className="btn-primary" onClick={copyCommand}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {copied ? 'Copied to Clipboard!' : 'npm run dev'}
          </button>
          <a
            href="https://vite.dev/guide/"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ textDecoration: 'none' }}
          >
            <Rocket size={18} /> Documentation
          </a>
        </div>
      </header>

      {/* Grid Dashboard */}
      <main className="dashboard-grid">
        {/* Card 1: Interactive State */}
        <div className="card">
          <div className="card-icon icon-cyan">
            <Cpu size={24} />
          </div>
          <h3 className="card-title">Interactive State</h3>
          <p className="card-desc">
            Test React state management and instant reactivity. Click to adjust the counter state.
          </p>
          <div className="counter-box">
            <button className="btn-icon" onClick={() => setCount((c) => c - 1)} aria-label="Decrement">
              <Minus size={18} />
            </button>
            <span className="counter-value">{count}</span>
            <button className="btn-icon" onClick={() => setCount((c) => c + 1)} aria-label="Increment">
              <Plus size={18} />
            </button>
            <button className="btn-icon" onClick={() => setCount(0)} title="Reset counter">
              <RefreshCw size={16} />
            </button>
          </div>
        </div>

        {/* Card 2: Live Timer & Status */}
        <div className="card">
          <div className="card-icon icon-purple">
            <Layers size={24} />
          </div>
          <h3 className="card-title">Session Runtime</h3>
          <p className="card-desc">
            Demonstrates real-time side-effects using React's useEffect hook with exact timer updates.
          </p>
          <div className="counter-box">
            <span style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              Active Session:
            </span>
            <span className="counter-value" style={{ color: 'var(--accent-purple)' }}>
              {secondsActive}s
            </span>
          </div>
        </div>

        {/* Card 3: Stack Verification */}
        <div className="card">
          <div className="card-icon icon-emerald">
            <ShieldCheck size={24} />
          </div>
          <h3 className="card-title">Pre-configured Stack</h3>
          <p className="card-desc">
            Everything you need for enterprise production web development.
          </p>
          <div className="stack-tags">
            <span className="tag">Vite 6</span>
            <span className="tag">React 19</span>
            <span className="tag">TypeScript 5</span>
            <span className="tag">Lucide Icons</span>
            <span className="tag">ESLint & Oxlint</span>
          </div>
        </div>
      </main>

      {/* Code Quickstart Banner */}
      <section style={{ marginBottom: '4rem' }}>
        <div className="code-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Code2 size={20} style={{ color: 'var(--accent-cyan)' }} />
            <span>Edit <code>src/App.tsx</code> to start customizing your app!</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-emerald)', fontSize: '0.85rem' }}>
            <CheckCircle2 size={16} /> Ready
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          Generated with ❤️ using <strong>Vite</strong> & <strong>React</strong>. 
          Ready for your next big project!
        </p>
      </footer>
    </div>
  )
}

export default App
