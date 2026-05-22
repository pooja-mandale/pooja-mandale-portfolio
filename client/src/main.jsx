import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          position: 'fixed',
          inset: 10,
          zIndex: 999999,
          background: '#1e1b4b',
          color: '#f43f5e',
          padding: '24px',
          border: '2px solid #f43f5e',
          borderRadius: '16px',
          overflow: 'auto',
          fontFamily: 'monospace'
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>React Application Crash</h2>
          <p style={{ color: '#e2e8f0', marginBottom: '8px' }}>Something crashed the React render lifecycle:</p>
          <pre style={{ background: '#0f172a', padding: '16px', borderRadius: '8px', color: '#fda4af' }}>
            {this.state.error ? this.state.error.stack || this.state.error.toString() : 'Unknown error'}
          </pre>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '16px',
              padding: '8px 16px',
              background: '#f43f5e',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

// Global window error listener and console.error interceptor for floating display
if (typeof window !== 'undefined') {
  const displayError = (title, message, details = '') => {
    const errorDiv = document.createElement('div')
    errorDiv.style.cssText = 'position:fixed;bottom:20px;left:20px;z-index:999999;background:#991b1b;color:white;padding:16px;border-radius:12px;font-family:monospace;max-width:80%;box-shadow:0 10px 25px rgba(0,0,0,0.5);border:1px solid #ef4444;line-height:1.4;'
    errorDiv.innerHTML = `<div style="font-weight:bold;font-size:14px;margin-bottom:6px;color:#fecaca;">❌ ${title}</div><div style="font-size:12px;white-space:pre-wrap;word-break:break-all;">${message}</div>${details ? `<div style="font-size:10px;margin-top:6px;color:#fca5a5;border-top:1px solid rgba(255,255,255,0.2);padding-top:4px;">${details}</div>` : ''}`
    document.body.appendChild(errorDiv)
    setTimeout(() => {
      errorDiv.style.transition = 'opacity 0.5s ease'
      errorDiv.style.opacity = '0'
      setTimeout(() => errorDiv.remove(), 500)
    }, 12000)
  }

  window.addEventListener('error', (event) => {
    displayError('Global JS Error', event.message, `${event.filename}:${event.lineno}`)
  })

  window.addEventListener('unhandledrejection', (event) => {
    displayError('Unhandled Promise Rejection', String(event.reason))
  })

  const originalConsoleError = console.error
  console.error = (...args) => {
    originalConsoleError.apply(console, args)
    const message = args.map(arg => {
      if (arg instanceof Error) return arg.stack || arg.message
      if (typeof arg === 'object') {
        try { return JSON.stringify(arg) } catch (e) { return String(arg) }
      }
      return String(arg)
    }).join(' ')
    
    // Ignore harmless browser warnings or known library noise
    if (message.includes('React DevTools') || message.includes('WebSocket')) return
    
    displayError('Console Error / Crash', message)
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
