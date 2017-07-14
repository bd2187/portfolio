import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function parseTech(tech, index, array) {
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
        <Link
          to={link}
          target="_blank"
          className="project-link"
        >
          <img
            className="thumbnail"
            src={require(`../assets/${thumbnail}`)}
            alt={`Thumbnail for ${title} project`}/>
        </Link>
      </div>
      <div className="project-info-box">
        <h3>{title}</h3>
        <p>{tech.map(parseTech)}</p>
        <a href={github} target="_blank">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </div>
    </li>
  );
}

export default Project;
