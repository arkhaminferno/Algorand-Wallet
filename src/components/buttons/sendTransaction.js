import React from 'react'
import {Button,Container} from "react-bootstrap";


function sendTransaction(props) {
    return (
        <Container className="center" fluid>
        <Button onClick={props.onClick}>
            send Algo
        </Button>
        </Container>
    )
}

export default sendTransaction
