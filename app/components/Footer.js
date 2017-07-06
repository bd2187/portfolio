import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <ul className="footer-links">
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
      <p>{"brandon.dionisio.26@gmail.com"}</p>
      <p>Copyright &copy; Brandon Dionisio 2017</p>
    </div>
  )
}

export default Footer;
