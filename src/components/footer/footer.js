import React from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <div className="footer-align">
        <p>Developed by Kumar Gaurav</p>
      </div>
      <div className="footer-align footer-spacing">
        <div>
          <a
            href="www.linkedin.com/in/arkhaminferno"
            id="footerHead"
            target="_blank"
          >
            LinkedIn
          </a>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
          <a href="mailto:gauravpsp@gmail.com" id="footerHead">
            Email
          </a>
        </div>
        &nbsp;&nbsp;&nbsp;
        <div>
          <a
            href="www.github.com/arkhaminferno"
            id="footerHead"
            target="_blank"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
