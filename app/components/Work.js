import React, { Component } from 'react';
import Project from './Project';
import projects from '../data';

function Work() {
  return (
    <div className="work content">
      <h1 className="category-title">Work</h1>
      <ul className="project-list">
        {projects.map(function(project, index){
          return (
            <Project key={index} {...project}/>
          )
        })}
      </ul>
    </div>
  );
}

export default Work;
