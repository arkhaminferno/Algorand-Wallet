import React from 'react'
import {Button} from "react-bootstrap";

function mnemonic(props) {
    return (
        <Button onClick={props.onClick}>
            Get Mnemonic key
        </Button>
    )
}

export default mnemonic
