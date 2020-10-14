import React from 'react'
import {Button} from "react-bootstrap";


function sendTransaction(props) {
    return (
        <Button onClick={props.onClick}>
            send Transaction
        </Button>
    )
}

export default sendTransaction
