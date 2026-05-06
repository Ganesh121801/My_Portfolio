import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiServer, FiTool, FiDatabase } from 'react-icons/fi';

const skillCategories = [
  {
    icon: <FiCode size={20} />,
    title: 'Frontend',
    gradient: 'linear-gradient(135deg, #6C63FF, #a855f7)',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript (ES6+)', level: 88 },
      { name: 'HTML & CSS', level: 92 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Figma / UI Design', level: 72 },
    ],
  },
  {
    icon: <FiServer size={20} />,
    title: 'Backend',
    gradient: 'linear-gradient(135deg, #00D4FF, #3b82f6)',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'Java', level: 75 },
    ],
  },
  {
    icon: <FiDatabase size={20} />,
    title: 'Database',
    gradient: 'linear-gradient(135deg, #4ade80, #14b8a6)',
    skills: [
      { name: 'MongoDB', level: 82 },
      { name: 'MySQL', level: 75 },
      { name: 'NoSQL', level: 78 },
    ],
  },
  {
    icon: <FiTool size={20} />,
    title: 'Tools & Others',
    gradient: 'linear-gradient(135deg, #fb923c, #ec4899)',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'DSA', level: 78 },
      { name: 'Machine Learning', level: 65 },
      { name: 'Power BI', level: 68 },
      { name: 'Postman', level: 80 },
    ],
  },
];

const certifications = [
  { name: 'Udemy — Full Stack Web Dev Bootcamp 2024', img: '/udemy.jpg', link: 'https://www.linkedin.com/posts/ganesh-more-1218kom_webdevelopment-fullstack-coding-activity-7201943308338737153-ahz1' },
  { name: 'Great Learning — Front End Development', img: '/gl.png', link: 'https://olympus1.mygreatlearning.com/course_certificate/UGSENAOT' },
  { name: 'CISCO — Introduction to Cyber Security', img: '/cisco.jpg', link: 'https://www.linkedin.com/posts/ganesh-more-1218kom_here-is-my-certificate-activity-7110609395553619969-0w21' },
  { name: 'Goldman Sachs — Software Engineering Virtual Experience', img: '/gl.png', link: '#' },
];

const SkillBar = ({ name, level, gradient }) => (
  <div style={{ marginBottom: '16px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
      <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '13px', fontWeight: 500 }}>{name}</span>
      <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>{level}%</span>
    </div>
    <div style={{ height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '100px', overflow: 'hidden' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
        style={{ height: '100%', borderRadius: '100px', background: gradient }}
      />
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" style={{ padding: '96px 0', background: '#0A0A0F', fontFamily: 'Inter, sans-serif' }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '64px' }}
      >
        <span style={{ color: '#6C63FF', fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' }}>Skills</span>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#fff', marginTop: '8px', letterSpacing: '-1px' }}>
          My{' '}
          <span style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Tech Stack
          </span>
        </h2>
      </motion.div>

      {/* Skills grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '64px' }}>
        {skillCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px', padding: '28px',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(108,99,255,0.25)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{
                padding: '10px', borderRadius: '12px',
                background: cat.gradient, color: '#fff',
                display: 'flex', alignItems: 'center',
              }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{cat.title}</h3>
            </div>
            {cat.skills.map((skill) => (
              <SkillBar key={skill.name} {...skill} gradient={cat.gradient} />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '32px' }}
      >
        <h3 style={{ fontSize: '28px', fontWeight: 700, color: '#fff' }}>
          Certifications &{' '}
          <span style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Achievements
          </span>
        </h3>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {certifications.map((cert, i) => (
          <motion.a
            key={cert.name}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            style={{
              display: 'block', textDecoration: 'none',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '16px', overflow: 'hidden',
              transition: 'border-color 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
          >
            <div style={{ height: '110px', overflow: 'hidden' }}>
              <img
                src={cert.img} alt={cert.name} loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </div>
            <div style={{ padding: '12px 14px' }}>
              <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px', fontWeight: 500, lineHeight: 1.5 }}>
                {cert.name}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
