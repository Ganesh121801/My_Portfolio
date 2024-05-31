// src/components/Learnings.js
import React from 'react';


const Learnings = () => {
  return (
    <div className='titles'>
      <h1>Learning</h1>
      <div className="learnings-container">
        <div className="container2">
          <div className="title">Programming</div>
          <div className="tags-container">
            <div className="box Reactjs">React.JS</div>
            <div className="box java">Java</div>
            <div className="box javascript">JavaScript</div>
            <div className="box">Python</div>
            <div className="box">C</div>
          </div>
        </div>

        <div className="container2">
          <div className="title">Data &amp; Technology</div>
          <div className="tags-container">
            <div className="box git">DSA</div>
            <div className="box dsa">Git</div>
            <div className="box">Postman</div>
            <div className="box">Machine Learning</div>
          </div>
        </div>

        <div className="container2">
          <div className="title">Design &amp; Visualization</div>
          <div className="tags-container">
            <div className="box canva">Figma</div>
            <div className="box powerbi">PowerBI</div>
            <div className="box">Canva</div>
            <div className="box">Photoshop</div>
          </div>
        </div>

        <div className="container2">
          <div className="title">Other Projects</div>
          <div className="tags-container">
            <div className="box">Heart Attack Prediction</div>
            <div className="box">Coming Soon .. </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Learnings;
