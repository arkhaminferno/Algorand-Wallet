import React from 'react'
import {Container} from "react-bootstrap"
function amount(props) {
    return (
        <Container className="center">
        <input type="number" placeholder={props.placeholder} onChange={props.onChange}/>
        </Container>
    )
}

export default amount
