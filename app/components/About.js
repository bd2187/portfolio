import React, { Component } from 'react';
import profilePic from '../assets/brandon.jpg';

function About() {
  return (
    <div className="about content">
      <h1 className="category-title">About Me</h1>
      <div className="about-box clearfix">
        <div className="about-me-box">
          <img className="profile-photo" src={profilePic} alt="Profile Photo" />
          <div className="about-me">
            <p>
              {
                "Hi! I'm Brandon, a Front End Web Developer based in Los Angeles, CA. I build and maintain web applications using Javascript and React JS."
              }
            </p>
          </div>
        </div>
        <div className="skills-box">
          <h3 className="skillsHeader">Skills:</h3>
          <ul className="skillsList">
            <li>JavaScript/ES6</li>
            <li>React JS</li>
            <li>Redux</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>Responsive Design</li>
            <li>AJAX</li>
            <li>Webpack</li>
            <li>Git</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
