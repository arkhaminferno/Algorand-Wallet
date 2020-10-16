import React from 'react'
import {Toast,Container} from "react-bootstrap";
function transactiontoast(props) {
    return (
        <Toast show={props.showtoast} onClose={props.closetoast}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Success!</strong>
            <small>3 seconds ago</small>
          </Toast.Header>
         
    <Toast.Body><p style={{fontSize:"smaller",wordWrap:"break-word"}}>Your Transaction id is {props.transactionID}.</p> <br/>
    <a  href={`https://testnet.algoexplorer.io/tx/${props.transactionID}`} target="_blank">  Verify at Algo Explorer. </a></Toast.Body>
        </Toast>
    )
}

export default transactiontoast
