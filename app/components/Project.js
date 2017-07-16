import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function addComma(tech, index, array) {
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

function ThumbnailBox({title, thumbnail, link}) {
  return (
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
      <Link
        to={link}
        target="_blank"
        className="project-link overlay"
      >
        <div className="overlayText">
          View Project
        </div>
      </Link>
    </div>
  )
}

ThumbnailBox.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

function ProjectInfoBox({title, tech, github}) {
  return (
    <div className="project-info-box">
      <h3>{title}</h3>
      <p>{tech.map(addComma)}</p>
      <a href={github} target="_blank">
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
  );
}

ProjectInfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  github: PropTypes.string.isRequired
};

function Project({title, thumbnail, tech, link, github}) {
  return (
    <li>
      <ThumbnailBox title={title} thumbnail={thumbnail} link={link}/>
      <ProjectInfoBox title={title} tech={tech} github={github}/>
    </li>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  tech: PropTypes.array.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default Project;
