import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: '#0A0A0F',
      fontFamily: 'Inter, sans-serif',
      paddingTop: '100px',
    }}>

      {/* Animated gradient blobs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute', top: '20%', left: '10%',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(108,99,255,0.25) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(80px)',
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{
            position: 'absolute', bottom: '15%', right: '10%',
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)',
            borderRadius: '50%', filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.035,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10,
        maxWidth: '860px', margin: '0 auto',
        padding: '0 24px', textAlign: 'center',
      }}>

        {/* Available badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '8px 20px', borderRadius: '100px',
            background: 'rgba(74,222,128,0.08)',
            border: '1px solid rgba(74,222,128,0.2)',
            fontSize: '13px', color: 'rgba(255,255,255,0.75)',
            marginBottom: '36px',
          }}
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', flexShrink: 0 }}
          />
          Available for opportunities
        </motion.div>

        {/* Profile picture */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, type: 'spring', stiffness: 100 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}
        >
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{
              width: '116px', height: '116px', borderRadius: '50%',
              padding: '3px',
              background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
              boxShadow: '0 0 40px rgba(108,99,255,0.45), 0 0 80px rgba(108,99,255,0.15)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{
                width: '110px', height: '110px',
                borderRadius: '50%',
                backgroundImage: 'url(/pfp.avif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: '#1a1a2e',
              }} />
            </div>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                position: 'absolute', bottom: '4px', right: '4px',
                width: '18px', height: '18px', borderRadius: '50%',
                background: '#4ade80', border: '3px solid #0A0A0F',
              }}
            />
          </div>
        </motion.div> */}

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: 'clamp(38px, 7vw, 76px)',
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: '18px',
            letterSpacing: '-2px',
            color: '#fff',
          }}
        >
          Hi, I'm{' '}
          <span style={{
            background: 'linear-gradient(135deg, #6C63FF 0%, #00D4FF 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Ganesh More
          </span>
        </motion.h1>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            marginBottom: '22px',
            minHeight: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <TypeAnimation
            sequence={[
              'Software Engineer', 2000,
              'Full Stack Developer', 2000,
              'MERN Stack Developer', 2000,
              'React.js Developer', 2000,
            ]}
            wrapper="span"
            speed={55}
            repeat={Infinity}
            style={{
              fontSize: 'clamp(17px, 2.5vw, 24px)',
              fontWeight: 600,
              background: 'linear-gradient(135deg, #a78bfa, #00D4FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.5px',
            }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: 'clamp(14px, 1.8vw, 17px)',
            maxWidth: '520px',
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}
        >
          B.Tech IT student passionate about building scalable web applications.
          I turn complex problems into elegant, user-friendly solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', marginBottom: '48px' }}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('#projects')}
            style={{
              padding: '13px 30px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
              color: '#fff',
              fontSize: '15px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 0 30px rgba(108,99,255,0.4)',
              letterSpacing: '0.3px',
            }}
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollTo('#contact')}
            style={{
              padding: '13px 30px',
              borderRadius: '12px',
              background: 'rgba(255,255,255,0.05)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '15px',
              fontWeight: 600,
              border: '1px solid rgba(255,255,255,0.12)',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              backdropFilter: 'blur(10px)',
              letterSpacing: '0.3px',
            }}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}
        >
          {[
            { icon: <FiGithub size={19} />, href: 'https://github.com/Ganesh121801', label: 'GitHub' },
            { icon: <FiLinkedin size={19} />, href: 'https://www.linkedin.com/in/ganesh-more-1218kom/', label: 'LinkedIn' },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.12, y: -3 }}
              aria-label={social.label}
              style={{
                width: '44px', height: '44px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.55)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s',
                flexShrink: 0,
                lineHeight: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'rgba(108,99,255,0.5)';
                e.currentTarget.style.background = 'rgba(108,99,255,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.55)';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{
            marginTop: '56px',
            display: 'flex', justifyContent: 'center',
          }}
        >
          <motion.button
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => scrollTo('#about')}
            aria-label="Scroll to about section"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'rgba(255,255,255,0.2)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;