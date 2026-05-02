import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    company: 'Bluestone Tech Labs',
    role: 'Software Engineer',
    duration: 'Nov 2025 – April 2026',
    period: '6 Months',
    location: 'India',
    type: 'Full-time',
    gradient: 'linear-gradient(135deg, #6C63FF, #a855f7)',
    responsibilities: [
      'Developed full-stack web applications using React.js and Node.js',
      'Built scalable, reusable component libraries improving development speed by 40%',
      'Collaborated with cross-functional teams on real-world production projects',
      'Optimized application performance and improved UI responsiveness across devices',
    ],
    tech: ['React.js', 'Node.js', 'MongoDB', 'Express', 'REST APIs',"Docker" , "Linux" , "AWS"],
  },
  {
    company: 'imeet Technology',
    role: 'React.js Developer Intern',
    duration: '2024',
    period: 'Internship',
    location: 'Mathura, India',
    type: 'Internship',
    gradient: 'linear-gradient(135deg, #00D4FF, #3b82f6)',
    responsibilities: [
      'Built Morekart — a full-featured e-commerce platform with MERN stack',
      'Implemented user authentication, product management, and payment flows',
      'Gained industrial-level experience in project architecture and team workflows',
      'Delivered responsive, pixel-perfect UI components from Figma designs',
    ],
    tech: ['React.js', 'MongoDB', 'Express', 'Node.js', 'Figma'],
  },
  {
    company: 'CodSoft',
    role: 'Web Developer Intern',
    duration: '2023',
    period: 'Virtual Internship',
    location: 'Remote',
    type: 'Virtual',
    gradient: 'linear-gradient(135deg, #4ade80, #14b8a6)',
    responsibilities: [
      'Completed virtual web development internship with hands-on projects',
      'Built and deployed multiple frontend projects using HTML, CSS, JavaScript',
      'Strengthened fundamentals in responsive design and web standards',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
];

const card = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '20px',
  backdropFilter: 'blur(12px)',
};

const Experience = () => (
  <section id="experience" style={{ padding: '96px 0', background: '#0A0A0F', fontFamily: 'Inter, sans-serif' }}>
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <span style={{ color: '#6C63FF', fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' }}>Experience</span>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#fff', marginTop: '8px', letterSpacing: '-1px' }}>
          Where I've{' '}
          <span style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Worked
          </span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: '24px', top: 0, bottom: 0, width: '1px',
          background: 'linear-gradient(to bottom, #6C63FF, #00D4FF, transparent)',
          opacity: 0.3,
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ position: 'relative', paddingLeft: '64px' }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '16px', top: '28px',
                width: '16px', height: '16px', borderRadius: '50%',
                background: exp.gradient,
                border: '3px solid #0A0A0F',
                boxShadow: '0 0 12px rgba(108,99,255,0.5)',
                zIndex: 1,
              }} />

              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(108,99,255,0.3)' }}
                style={{ ...card, padding: '28px', transition: 'all 0.3s' }}
              >
                {/* Type badge */}
                <span style={{
                  display: 'inline-block', padding: '4px 12px', borderRadius: '100px',
                  background: exp.gradient, color: '#fff',
                  fontSize: '11px', fontWeight: 700, marginBottom: '12px',
                  letterSpacing: '0.5px',
                }}>
                  {exp.type}
                </span>

                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{exp.role}</h3>
                <p style={{ color: '#6C63FF', fontWeight: 600, fontSize: '15px', marginBottom: '14px' }}>{exp.company}</p>

                {/* Meta */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '18px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                    <FiCalendar size={13} style={{ color: '#00D4FF' }} />
                    {exp.duration} · {exp.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>
                    <FiMapPin size={13} style={{ color: '#00D4FF' }} />
                    {exp.location}
                  </span>
                </div>

                {/* Responsibilities */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {exp.responsibilities.map((r, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.6 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#6C63FF', flexShrink: 0, marginTop: '7px' }} />
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {exp.tech.map((t) => (
                    <span key={t} style={{
                      padding: '4px 12px', borderRadius: '8px',
                      background: 'rgba(108,99,255,0.1)',
                      border: '1px solid rgba(108,99,255,0.2)',
                      color: '#6C63FF', fontSize: '12px', fontWeight: 500,
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
