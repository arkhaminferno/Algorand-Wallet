import React from "react";
import { Container } from "react-bootstrap";
import algorandLogo from "../../icons/algosmall.png"
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
          <img
            src={algorandLogo}
            height="18px"
            width="17px"
            alt="algorand-logo"
          />
        </div>
      </div>
    </Container>
  );
}

export default balance;
