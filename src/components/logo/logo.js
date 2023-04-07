import React from "react";
import { Container, Image } from "react-bootstrap";
import algorandLogo from "../../icons/algorandlogo.svg"
import "./logo.css";
/**
 * This component will display logo of Algorand Blockchain.
 *
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function logo() {
  return (
    <Container className="center " fluid>
      <Image id="logo" src={algorandLogo} className="logobg"  roundedCircle />
    </Container>
  );
}

export default logo;
