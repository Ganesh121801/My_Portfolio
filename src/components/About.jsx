import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiZap } from 'react-icons/fi';

const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '2+', label: 'Internships' },
  { value: '8.52', label: 'CGPA' },
  { value: '6mo', label: 'Industry Exp.' },
];

const highlights = [
  { icon: <FiCode size={18} />, title: 'Full Stack Dev', desc: 'MERN stack end-to-end development' },
  { icon: <FiLayers size={18} />, title: 'Problem Solver', desc: 'DSA & algorithmic thinking' },
  { icon: <FiZap size={18} />, title: 'Fast Learner', desc: 'Adapts quickly to new technologies' },
];

const techs = ['React.js', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'Java', 'Python', 'MySQL'];

const card = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '16px',
  backdropFilter: 'blur(12px)',
};

const About = () => (
  <section id="about" style={{ padding: '96px 0', background: '#12121A', fontFamily: 'Inter, sans-serif' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <span style={{ color: '#6C63FF', fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' }}>About Me</span>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#fff', marginTop: '8px', letterSpacing: '-1px' }}>
          Crafting Digital{' '}
          <span style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Experiences
          </span>
        </h2>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>

        {/* Left — Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', lineHeight: 1.8, marginBottom: '20px' }}>
            I'm <strong style={{ color: '#fff' }}>Ganesh More</strong>, a final-year B.Tech IT student at Atharva College of Engineering, Mumbai (CGPA: 8.52). I'm a passionate Full Stack Developer who loves building real-world web applications that solve meaningful problems.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
            With hands-on experience in the <span style={{ color: '#00D4FF', fontWeight: 600 }}>MERN stack</span>, I've built everything from e-commerce platforms to ML-powered recommendation systems. I bring both technical depth and a strong eye for clean, intuitive UI/UX.
          </p>
        

          {/* Tech badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {techs.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, borderColor: 'rgba(108,99,255,0.5)' }}
                style={{
                  padding: '6px 14px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  fontSize: '13px', color: 'rgba(255,255,255,0.7)',
                  cursor: 'default',
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Right — Stats + Highlights */}
        <motion.div
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        >
          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.04, borderColor: 'rgba(108,99,255,0.3)' }}
                style={{ ...card, padding: '24px', textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '36px', fontWeight: 900, marginBottom: '4px',
                  background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }}
              whileHover={{ x: 6 }}
              style={{ ...card, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}
            >
              <div style={{
                padding: '10px', borderRadius: '10px',
                background: 'rgba(108,99,255,0.15)', color: '#6C63FF',
                display: 'flex', alignItems: 'center', flexShrink: 0,
              }}>
                {item.icon}
              </div>
              <div>
                <div style={{ fontWeight: 600, color: '#fff', fontSize: '14px' }}>{item.title}</div>
                <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px', marginTop: '2px' }}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
