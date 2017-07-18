import React, { Component } from 'react';
// import profilePic from '../assets/sample-profile-pic.jpg';
import profilePic from '../assets/brandon.jpg';

function About() {
  return (
    <div className="about content">
      <h1 className="category-title">About Me</h1>
      <div className="about-box clearfix">
        <img className='profile-photo' src={profilePic} alt="Profile Photo"/>
        <p className="about-me">
          {`Hi! I'm Brandon, a self-taught Front End Developer based in Los Angeles, CA.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. You can contact me at at `}
          <a href="mailto:brandon.dionisio@yahoo.com">
            {"brandon.dionisio.26@gmail.com"}
          </a>{"."}
        </p>
        <div className="skills-box">
          <h3 className="skillsHeader">Skills:</h3>
          <ul className="skillsList">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Sass</li>
            <li>Responsive Layouts</li>
            <li>JavaScript</li>
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
