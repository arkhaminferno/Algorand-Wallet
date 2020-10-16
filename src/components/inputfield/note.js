import React from 'react'
import {Container} from "react-bootstrap"
function note(props) {
    return (
        <Container className="center">
             <input type="text" placeholder={props.placeholder} onChange={props.onChange} required/>
        </Container>
    )
}

export default note