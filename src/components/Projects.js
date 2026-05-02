import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'YouTube Video Recommendation System',
    description: 'An ML-powered recommendation engine that analyzes user behavior to suggest relevant YouTube videos. Built with a full MERN stack backend and a trained machine learning model.',
    image: '/yt.png',
    tech: ['Machine Learning', 'React.js', 'Node.js', 'MongoDB', 'Python'],
    github: 'https://github.com/Ganesh121801/Video-Recommendation-Systems',
    live: null,
    category: 'ML',
    featured: true,
  },
  {
    title: 'Morekart — E-Commerce Platform',
    description: 'A fully functional e-commerce platform with user authentication, product catalog, cart management, and payment processing. Built during internship at imeet Technology.',
    image: '/kart.png',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: 'https://github.com/Ganesh121801/Morekart',
    live: null,
    category: 'Full Stack',
    featured: true,
  },
  {
    title: 'Organ Donation Website',
    description: 'A real-time organ donation management platform connecting donors and recipients. Features live data handling, real-time traffic API integration, and a user-friendly interface.',
    image: '/organ.png',
    tech: ['Node.js', 'MongoDB', 'Real-time API', 'Express'],
    github: 'https://github.com/Ganesh121801/Organ-Donation-Website-',
    live: null,
    category: 'Full Stack',
    featured: false,
  },
  {
    title: 'Saarthi — EdTech Platform',
    description: 'An educational technology platform offering structured courses, student progress tracking, and personalized learning experiences with a clean, intuitive interface.',
    image: '/edtech.png',
    tech: ['React.js', 'Node.js', 'MySQL', 'Express'],
    github: 'https://github.com/Ganesh121801/Saarthi---An-Edtech-Platform-',
    live: null,
    category: 'Full Stack',
    featured: false,
  },
];

const categories = ['All', 'Full Stack', 'ML'];

const Projects = () => {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" style={{ padding: '96px 0', background: '#12121A', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span style={{ color: '#6C63FF', fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' }}>Projects</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#fff', marginTop: '8px', letterSpacing: '-1px' }}>
            Things I've{' '}
            <span style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Built
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '14px', fontSize: '15px', maxWidth: '480px', margin: '14px auto 0' }}>
            A selection of projects showcasing my skills in full-stack development and problem-solving.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '48px' }}>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '9px 22px', borderRadius: '10px',
                fontSize: '13px', fontWeight: 600, cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                transition: 'all 0.2s',
                background: active === cat ? 'linear-gradient(135deg, #6C63FF, #00D4FF)' : 'rgba(255,255,255,0.05)',
                color: active === cat ? '#fff' : 'rgba(255,255,255,0.5)',
                border: active === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: active === cat ? '0 0 20px rgba(108,99,255,0.3)' : 'none',
              }}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                {/* Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
                    onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(18,18,26,0.9) 0%, transparent 60%)' }} />
                  {project.featured && (
                    <span style={{
                      position: 'absolute', top: '12px', right: '12px',
                      padding: '4px 10px', borderRadius: '100px',
                      background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                      color: '#fff', fontSize: '11px', fontWeight: 700,
                    }}>
                      Featured
                    </span>
                  )}
                  <span style={{
                    position: 'absolute', top: '12px', left: '12px',
                    padding: '4px 10px', borderRadius: '100px',
                    background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)',
                    color: 'rgba(255,255,255,0.8)', fontSize: '11px', fontWeight: 500,
                  }}>
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', marginBottom: '10px', lineHeight: 1.4 }}>
                    {project.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', lineHeight: 1.7, marginBottom: '18px' }}>
                    {project.description}
                  </p>

                  {/* Tech */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{
                        padding: '4px 10px', borderRadius: '8px',
                        background: 'rgba(0,212,255,0.08)',
                        border: '1px solid rgba(0,212,255,0.2)',
                        color: '#00D4FF', fontSize: '11px', fontWeight: 500,
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: '6px',
                        padding: '8px 16px', borderRadius: '10px',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 500,
                        textDecoration: 'none', transition: 'all 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'; }}
                      onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                    >
                      <FiGithub size={14} /> Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex', alignItems: 'center', gap: '6px',
                          padding: '8px 16px', borderRadius: '10px',
                          background: 'rgba(108,99,255,0.15)',
                          color: '#6C63FF', fontSize: '13px', fontWeight: 500,
                          textDecoration: 'none',
                        }}
                      >
                        <FiExternalLink size={14} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '48px' }}
        >
          <a
            href="https://github.com/Ganesh121801"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 28px', borderRadius: '12px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.6)', fontSize: '14px', fontWeight: 500,
              textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
          >
            <FiGithub size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
