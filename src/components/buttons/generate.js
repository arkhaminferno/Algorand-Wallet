import React from 'react'
import {Button} from "react-bootstrap"

function generate(props) {
    return (
        <Button onClick={props.onClick}>
            Generate Wallet
        </Button>
    )
}

export default generate