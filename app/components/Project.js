import React, {Component} from 'react';

function Project({thumbnail, title, description, tech}) {
  return (
    <li>
      <img src={require(`../assets/${thumbnail}`)} style={{width: '300px'}}/>
      <h3>{title}</h3>
    </li>
  );
}

export default Project;
