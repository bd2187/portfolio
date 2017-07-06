import React, {Component} from 'react';
import PropTypes from 'prop-types';

function parseTech(tech, index, array) {
  console.log(tech, index, array);
  if (index === 0) {
    return `${tech}, `;
  }
  else if (index === (array.length - 1)) {
    return ` ${tech}`;
  }
  else {
    return `${tech}, `;
  }
}

function Project({title, thumbnail, tech, link, github}) {
  return (
    <li>
      <div className="thumbnail-box">
        <a href={link} target="_blank">
          <img
            className="thumbnail"
            src={require(`../assets/${thumbnail}`)}/>
        </a>
      </div>
      <div className="project-info-box">
        <h3>{title}</h3>
        <a href={github} target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <p>{tech.map(parseTech)}</p>
      </div>
    </li>
  );
}

export default Project;
