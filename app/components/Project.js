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
      <a href={link} target="_blank">
        <img src={require(`../assets/${thumbnail}`)} style={{width: '300px'}}/>
      </a>
      <h3>{title}</h3>
      <a href={github} target="_blank">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
      <p>{tech.map(parseTech)}</p>
    </li>
  );
}

export default Project;
