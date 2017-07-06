import React, { Component } from 'react';
import Project from './Project';
import projects from '../data';

function Work() {
  return (
    <div>
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
