import React, { Component } from 'react';
// const nodemailer = require('nodemailer');

class Contact extends Component {
  render() {
    return (
      <div className="contact content">
        <ul className="contact-links">
          <li>
            <a href="#">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-github" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    )

  }
}


export default Contact;
