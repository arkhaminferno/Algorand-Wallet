import React from 'react'
import {Button} from "react-bootstrap"
function validity(props) {
    return (
        <Button onClick={props.onClick}>
            Check Validity of Address
        </Button>
    )
}

export default validity
