import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0A0F',
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
          padding: '20px',
        }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#6C63FF' }}>
              Oops! Something went wrong
            </h1>
            <p style={{ marginBottom: '2rem', color: 'rgba(255,255,255,0.7)' }}>
              We're sorry for the inconvenience. Please refresh the page or try again later.
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '12px 24px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                color: '#fff',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;