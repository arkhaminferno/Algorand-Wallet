import React from 'react'
import {Container} from "react-bootstrap"
function balance(props) {
    return (
        <Container className="center">
            Balance {props.balance}
        </Container>
    )
}

export default balance
