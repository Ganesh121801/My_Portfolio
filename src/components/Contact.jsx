import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

const contactInfo = [
  { icon: <FiMail size={20} />, label: 'Email', value: 'utmsg1218@gmail.com', href: 'mailto:utmsg1218@gmail.com' },
  { icon: <FiPhone size={20} />, label: 'Phone', value: '+91-9307699110', href: 'tel:+919307699110' },
  { icon: <FiMapPin size={20} />, label: 'Location', value: 'Mumbai, India', href: null },
];

const socials = [
  { icon: <FiGithub size={20} />, label: 'GitHub', href: 'https://github.com/Ganesh121801' },
  { icon: <FiLinkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ganesh-more-1218kom/' },
];

const card = {
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.07)',
  borderRadius: '16px',
  backdropFilter: 'blur(12px)',
};

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  padding: '12px 16px',
  color: '#fff',
  fontSize: '14px',
  fontFamily: 'Inter, sans-serif',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.2s',
};

const labelStyle = {
  display: 'block',
  fontSize: '13px',
  color: 'rgba(255,255,255,0.5)',
  marginBottom: '8px',
  fontWeight: 500,
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:utmsg1218@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailtoLink);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" style={{ padding: '96px 0', background: '#12121A', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{ color: '#6C63FF', fontSize: '12px', fontWeight: 700, letterSpacing: '4px', textTransform: 'uppercase' }}>Contact</span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, color: '#fff', marginTop: '8px', letterSpacing: '-1px' }}>
            Let's{' '}
            <span style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Work Together
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '14px', fontSize: '15px', maxWidth: '480px', margin: '14px auto 0' }}>
            I'm currently open to new opportunities. Whether you have a project in mind or just want to say hi — my inbox is always open.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>

          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
          >
            {contactInfo.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ x: 5 }}
                style={{ ...card, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
              >
                <div style={{ padding: '10px', borderRadius: '10px', background: 'rgba(108,99,255,0.15)', color: '#6C63FF', display: 'flex', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>{item.label}</p>
                  {item.href ? (
                    <a href={item.href} style={{ color: '#fff', fontWeight: 500, fontSize: '14px', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#6C63FF'}
                      onMouseLeave={e => e.target.style.color = '#fff'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{ color: '#fff', fontWeight: 500, fontSize: '14px' }}>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08, y: -3 }}
                  style={{
                    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                    padding: '12px', borderRadius: '12px',
                    ...card,
                    color: 'rgba(255,255,255,0.5)', fontSize: '13px', fontWeight: 500,
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.4)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                >
                  {s.icon} {s.label}
                </motion.a>
              ))}
            </div>

            {/* Resume */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '14px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                color: '#fff',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                boxShadow: '0 0 25px rgba(108,99,255,0.35)',
                letterSpacing: '0.3px',
              }}
            >
              ↓ Download Resume
            </motion.a>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            style={{ ...card, padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}
          >
            <div>
              <label style={labelStyle}>Your Name</label>
              <input
                type="text" name="name" value={form.name}
                onChange={handleChange} required placeholder="John Doe"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div>
              <label style={labelStyle}>Email Address</label>
              <input
                type="email" name="email" value={form.email}
                onChange={handleChange} required placeholder="john@example.com"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                name="message" value={form.message}
                onChange={handleChange} required rows={5}
                placeholder="Tell me about your project or opportunity..."
                style={{ ...inputStyle, resize: 'none' }}
                onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                padding: '14px',
                borderRadius: '12px',
                background: sent ? 'rgba(74,222,128,0.2)' : 'linear-gradient(135deg, #6C63FF, #00D4FF)',
                border: sent ? '1px solid rgba(74,222,128,0.4)' : 'none',
                color: '#fff',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                fontFamily: 'Inter, sans-serif',
                boxShadow: sent ? 'none' : '0 0 25px rgba(108,99,255,0.35)',
                transition: 'all 0.3s',
                letterSpacing: '0.3px',
              }}
            >
              {sent ? '✓ Message Sent!' : <><FiSend size={15} /> Send Message</>}
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '64px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '13px' }}>
            Designed & Built by{' '}
            <span style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontWeight: 600 }}>
              Ganesh More
            </span>
            {' '}· 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
