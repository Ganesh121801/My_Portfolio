// src/components/Courses.js
import React from 'react';


const Courses = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return ( 
    <div className="courses-head">
      <h1 className="courses-title">Courses</h1>
      <div className="courses-container">
        <div className="course-card" onClick={() => openLink('https://atharvacoe.ac.in/')}>
          <img src="./clg.png" alt="B Tech. IT : 2021-2025" />
          <p className="course-title">B Tech. IT : 2021-2025</p>
        </div>
        <div className="course-card" onClick={() => openLink('https://www.linkedin.com/posts/ganesh-more-1218kom_webdevelopment-fullstack-coding-activity-7201943308338737153-ahz1?utm_source=share&utm_medium=member_desktop')}>
          <img src="./udemy.jpg" alt="Udemy - The Complete 2024 Web Development Bootcamp" />
          <p className="course-title">Udemy - The Complete 2024 Web Development Bootcamp</p>
        </div>
        <div className="course-card" onClick={() => openLink('https://olympus1.mygreatlearning.com/course_certificate/UGSENAOT')}>
          <img src="./gl.png" alt="Great Learning - Front End Development" />
          <p className="course-title">Great Learning - Front End Development</p>
        </div>
        <div className="course-card" onClick={() => openLink('https://www.linkedin.com/posts/ganesh-more-1218kom_here-is-my-certificate-activity-7110609395553619969-0w21?utm_source=share&utm_medium=member_desktop')}>
          <img src="./cisco.jpg" alt="CISCO - Cyber Security" />
          <p className="course-title">CISCO - Cyber Security</p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
