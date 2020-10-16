import React from "react";
import { Container, Image } from "react-bootstrap";
/**
 * This component will display logo of Algorand Blockchain.
 *
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function logo() {
  return (
    <Container className="center " fluid>
      <Image
        id="logo"
        src="/algorandlogo.svg"
        className="logobg"
        roundedCircle
      />
    </Container>
  );
}

export default logo;
