import React from 'react'
import {Container} from "react-bootstrap"
function input(props) {
    return (
        <Container className="center">
        <input type="text" placeholder={props.placeholder} onChange={props.onChange} required/>
        </Container>
    )
}

export default input