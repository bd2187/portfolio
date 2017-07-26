import React, { Component } from 'react';
import profilePic from '../assets/brandon.jpg';

function About() {
  return (
    <div className="about content">
      <h1 className="category-title">About Me</h1>
      <div className="about-box clearfix">
        <div className="about-me-box">
          <img className='profile-photo' src={profilePic} alt="Profile Photo"/>
          <div className="about-me">
            <p>
              {"Hi! I'm Brandon, a self-taught Front End Developer based in Los Angeles, CA. I've learned how to program through various resources, most notably "}<a href="https://www.freecodecamp.com" target="_blank">Freecodecamp</a>{", "}<a href="https://teamtreehouse.com/" target="_blank">TeamTreehouse</a>{", and "}<a href="https://www.udemy.com/" target="_blank">Udemy</a>{". The opportunity to practice and develop my problem-solving and creativity skills brought me to the tech industry. My enthusiasm and desire to learn fuels my passion to build and maintain applications."}
            </p>
            <p>
              {"I'm currently seeking a Junior Developer position to practice my skills and grow as a developer. You can contact me at "}
              <a href="mailto:brandon.dionisio@yahoo.com">
                {"brandon.dionisio.26@gmail.com"}
              </a>{"."}
            </p>
          </div>
        </div>
        <div className="skills-box">
          <h3 className="skillsHeader">Skills:</h3>
          <ul className="skillsList">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>Responsive Design</li>
            <li>JavaScript/ES6</li>
            <li>AJAX</li>
            <li>React JS</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
