import React from "react";
import { Navbar, Container, NavbarBrand } from "react-bootstrap";

function Footer() {
  return (
    <div className="fixed-bottom center">
      <Navbar color="dark" dark>
        <Container>
          <NavbarBrand id="footer-name">
            <div>
              <p>Developed by Kumar Gaurav</p>
            </div>
            <div className="footer-align">
              <div>
                <a
                  href="https://www.linkedin.com/in/arkhaminferno"
                  id="footerHead"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <a href="mailto:gauravpsp@gmail.com" id="footerHead">
                  Email
                </a>
              </div>
              <div>
                <a
                  href="https://www.github.com/arkhaminferno"
                  id="footerHead"
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </NavbarBrand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
