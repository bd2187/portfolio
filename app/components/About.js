import React, { Component } from "react";
import profilePic from "../assets/brandon.jpg";

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
                "Hi! I'm Brandon, a self-taught Front End Developer based in Los Angeles, CA. I've learned how to program through various resources, most notably "
              }
              <a href="https://www.freecodecamp.com" target="_blank">
                Freecodecamp
              </a>
              {", "}
              <a href="https://teamtreehouse.com/" target="_blank">
                TeamTreehouse
              </a>
              {", and "}
              <a href="https://www.udemy.com/" target="_blank">
                Udemy
              </a>
              {"."}
            </p>
            <p>
              {
                "I specialize in developing user interfaces with the core Front End technologies of HTML, CSS, and Javascript. Many of my applications were built with React and Redux. Recently, I've expanded my interests to Back End Development in order to build full stack applications. Most of my days consist of building and maintaing my applications while learning Node JS."
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
