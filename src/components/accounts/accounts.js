import React from 'react'
import {Button,Table} from "react-bootstrap"
/**
 * This component will display balance of a address.
 * @props publickey: -> displays the address of a wallet
 * @props mnemonic -> displays the mnemonic key of an address
 * @props onClick -> selects a specific wallet from a list of generated wallets
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function accounts(props) {
    return (
      <Table striped bordered hover>
      <thead>
      <tr>
        <th>Address</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td> <div className="vertical-align-space">
          <div>Address</div>
          <div> {props.publickey}</div>
      <div>
        <br/>
      <Button  id="btn" size="sm" variant ="danger" onClick={props.mnemonic}>Reveal Seed Phrase</Button></div>
      <div>
        <br/>
      <Button   size="sm" onClick={props.onClick }>Select Account</Button></div>
      </div></td>
     
      </tr>
    </tbody>
  </Table>
 

   
    )
}

export default accounts

 
        