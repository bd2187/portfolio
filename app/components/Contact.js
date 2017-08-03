import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Contact extends Component {
  render() {
    return (
      <div className="contact content">
        <ul className="contact-links">
          <li>
            <a href="mailto:brandon.dionisio@yahoo.com">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/bd2187/" target="_blank">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
          </li>
          <li>
            <Link to="https://github.com/bd2187" target="_blank">
              <i className="fa fa-github" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>
    )

  }
}


export default Contact;
