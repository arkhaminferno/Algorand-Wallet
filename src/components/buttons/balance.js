import React from 'react'
import {Button} from "react-bootstrap"
function balance(props) {
    return (
        <Button onClick={props.onClick}>
            Check Balance
        </Button>
    )
}

export default balance
