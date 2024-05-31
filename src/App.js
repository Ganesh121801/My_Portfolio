 // src/App.js
import React from "react";
import "./App.css";
import "./Projects.css";
import "./resume.css";
import "./Learnings.css" ;
import "./Courses.css" ;
import "./others.css" ;
import "./Contact.css";
import NavigationBar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Learnings from './components/Learnings';
import Courses from "./components/Courses";
import Others from "./components/Others";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <header className="App-header">
        <div className="header">
      
          <div className="background-image"></div>

          
          <div className="profile">
            <div className="profile-content">
              <img alt="" className="profile-picture" />
              <h1 className="ganesh">Ganesh More</h1>
            </div>
            <div className="follow-button">
              <a
                href="https://www.linkedin.com/in/ganesh-more-1218kom/"
                className="instagram-button"
              >
                LinkedIn-Profile
              </a>
            </div>
          </div>
        </div>
      </header>
      <Projects />
      <Resume />
      <Learnings/>
      <Courses/>
      <Others/>
      <Contact />
    </div>
  );
}
export default App;