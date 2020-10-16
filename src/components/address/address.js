import React from "react";
import { Container } from "react-bootstrap";
/**
 * This component will display address.
 *
 *
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function address(props) {
  return (
    <Container className="center">
      <div className="vertical-align">
        <p style={{ margin: "0", padding: "0", textAlign: "center" }}>
          Your Wallet Address:
        </p>
        <p style={{ fontSize: "small", wordWrap: "break-word" }}>
          {props.address}
        </p>
      </div>
    </Container>
  );
}

export default address;
