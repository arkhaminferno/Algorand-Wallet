import React from "react";
import { Button, Table } from "react-bootstrap";
/**
 * This component will display balance of a address.
 * @props publickey: -> displays the address of a wallet
 * @props mnemonic -> displays the mnemonic key of an address
 * @props onClick -> selects a specific wallet from a list of generated wallets
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function accounts(props) {
  return (
    <Table hover>
      <tbody>
        <tr>
          <td>
            {" "}
            <div className="vertical-align-space">
              <div>Address</div>
              <div> {props.publickey}</div>
              <br />
              <div>
                <Button size="sm" id="btn-fixed" onClick={props.onClick}>
                  Select Account
                </Button>
              </div>
              <br />
              <div className="horizontal-align">
                <div>
                  <Button
                    id="btn"
                    size="sm"
                    variant="danger"
                    onClick={props.mnemonic}
                  >
                    Reveal Seed Phrase
                  </Button>
                </div>
                &nbsp;
                <div>
                  <Button id="btn" size="sm" onClick={props.mnemonic}>
                    Export wallet
                  </Button>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
}

export default accounts;
