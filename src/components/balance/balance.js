import React from "react";
import { Container } from "react-bootstrap";
/**
 * This component will display balance of a address.
 * @props balance: -> displays the balance of a address
 *
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function balance(props) {
  return (
    <Container className="center" id="footerHead">
      <div className="horizontal-align">
        <div>
          Balance: &nbsp;
          {props.balance}
          &nbsp;
          <img src="/algosmall.png" height="18px" width="17px" />
        </div>
      </div>
    </Container>
  );
}

export default balance;
