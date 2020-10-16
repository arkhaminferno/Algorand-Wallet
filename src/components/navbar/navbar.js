import React from "react";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
/**
 * This component is resposible for hyperlinking with Algorand faucet and Meld.gold website.
 *
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function navbar() {
  return (
    <Navbar id="nav-style">
      <Navbar.Brand href="https://www.meld.gold/" target="_blank">
        <img height="30%" width="30%" src="./meld-logo.png" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link
          id="footerHead"
          href="https://bank.testnet.algorand.network/"
          target="_blank"
        >
          Algorand Faucet
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default navbar;
