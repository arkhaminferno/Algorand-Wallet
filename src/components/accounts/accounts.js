import React from 'react'
import {Button,Table} from "react-bootstrap"
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
  
      <div>Secret key</div>
      <div>{props.privatekey}</div>
      <br/>
      <div>
      <Button  id="btn" variant ="danger" onClick={props.mnemonic}>Reveal Seed Phrase</Button></div>
      <div>
        <br/>
      <Button  id="btn" onClick={props.onClick }>Select</Button></div>
      </div></td>
     
      </tr>
    </tbody>
  </Table>
 

   
    )
}

export default accounts

 
        