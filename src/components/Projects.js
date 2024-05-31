// components/Projects.js
import React from 'react';


const Projects = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='head1'>
      <section className='head2'>Projects</section>
      <section className="projects">
        <div className="project" onClick={() => openLink('https://github.com/Ganesh121801/Video-Recommendation-Systems')}>
          <img src="./yt.png" alt="Project 1" className="project-thumbnail" />
          <p className="project-description">Youtube Video Recommendation System: Machine Learning, MERN Stack, NoSQL - MongoDB</p>
        </div>
        <div className="project" onClick={() => openLink('https://github.com/Ganesh121801/Morekart')}>
          <img src="./kart.png" alt="Project 2" className="project-thumbnail" />
          <p className="project-description">An e-commerce platform: Built with MERN stack (MongoDB, Express, React, Node.js).</p>
        </div>
        <div className="project" onClick={() => openLink('https://github.com/Ganesh121801/Organ-Donation-Website-')}>
          <img src="./organ.png" alt="Project 3" className="project-thumbnail" />
          <p className="project-description">Organ donation Website: Database and real-time Traffics API. Implemented with Node.js and MongoDB.</p>
        </div>
        <div className="project" onClick={() => openLink('https://github.com/Ganesh121801/Saarthi---An-Edtech-Platform-')}>
          <img src="./edtech.png" alt="Project 4" className="project-thumbnail" />
          <p className="project-description">An Edtech Platform: Providing Courses and Learnings and tracks Progress of students: React JS, Node JS, SQL Database, Express</p>
        </div>
      </section>
    </div>
  );
}

export default Projects;


