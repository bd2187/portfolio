import React, { Component } from 'react';
import Project from './Project';
import projects from '../data';

function Work() {
  return (
    <div>
      <ul>
        {projects.map(function(project, index){
          return (
            <Project
              key={index}
              title={project.title}
              thumbnail={project.thumbnail}
              link={project.link}
              tech={project.tech}
              github={project.github}
            />
          )
        })}
      </ul>
    </div>
  );
}

export default Work;
