import React from 'react'
import {Button,Container} from "react-bootstrap";
/**
 * This component will trigger send transaction function on click of the button.
 * @props onClick: -> calls the parent component function for submitting the value into the parent state.
 * 
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */

function sendTransaction(props) {
    return (
        <Container className="center" fluid>
        <Button onClick={props.onClick} type="submit" className="txnbutton">
            send Algo
        </Button>
        </Container>
    )
}

export default sendTransaction
