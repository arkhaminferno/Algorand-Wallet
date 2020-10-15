import React from 'react'
import {Container} from "react-bootstrap"
function fee(props) {
    return (
        <Container className="center">
             <label id="feelabel">Suggested Fee {props.fee} MicroAlgos </label>
        
        </Container>
    )
}

export default fee
