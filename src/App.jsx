import React, { useState, useEffect, Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const SectionLoader = () => (
  <div style={{
    padding: '60px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#12121A',
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(108,99,255,0.3)',
      borderTop: '3px solid #6C63FF',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <ErrorBoundary>
      <div className={darkMode ? 'bg-dark text-white' : 'bg-gray-50 text-gray-900'}>
        <ScrollProgress />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
