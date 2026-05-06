import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: scrolled ? '12px' : '0',
        left: scrolled ? '16px' : '0',
        right: scrolled ? '16px' : '0',
        zIndex: 9999,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,15,0.88)' : 'rgba(10,10,15,0.4)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: scrolled ? '16px' : '0',
        border: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.4)' : 'none',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <motion.span
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontSize: '20px',
            fontWeight: 800,
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.5px',
            userSelect: 'none',
          }}
        >
          Ganesh.dev
        </motion.span>

        {/* Desktop Links — hidden on mobile */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => handleNav(link.href)}
                whileHover={{ y: -1 }}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.6)',
                  fontFamily: 'Inter, sans-serif',
                  padding: '4px 0',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '8px',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </motion.button>

            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '9px 20px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                color: '#fff',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: 'Inter, sans-serif',
                textDecoration: 'none',
                boxShadow: '0 0 20px rgba(108,99,255,0.35)',
                display: 'inline-block',
                letterSpacing: '0.3px',
              }}
            >
              Resume
            </motion.a>
          </div>
        )}

        {/* Mobile controls */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setDarkMode(!darkMode)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '8px',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.7)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                padding: '8px',
                cursor: 'pointer',
                color: 'rgba(255,255,255,0.7)',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </motion.button>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: 'hidden',
              margin: '0 16px 12px',
              borderRadius: '14px',
              background: 'rgba(18,18,26,0.97)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.7)',
                    fontFamily: 'Inter, sans-serif',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.target.style.background = 'rgba(108,99,255,0.1)'; e.target.style.color = '#fff'; }}
                  onMouseLeave={e => { e.target.style.background = 'none'; e.target.style.color = 'rgba(255,255,255,0.7)'; }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: '8px',
                  padding: '10px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  color: '#fff',
                  fontSize: '13px',
                  fontWeight: 600,
                  textAlign: 'center',
                  fontFamily: 'Inter, sans-serif',
                  textDecoration: 'none',
                  display: 'block',
                }}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
