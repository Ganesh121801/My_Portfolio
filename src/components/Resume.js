import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="resume-container">
      <section className="resume-section">
        <div className="resume-content">
          <h2 className="resume-title">My Resume</h2>
          <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noopener noreferrer" className="resume-link">Open My Resume</a>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/its_prasad1218/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://github.com/Ganesh121801" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ganesh-more-1218kom/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/prasadk1218/" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaCode />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Resume;
