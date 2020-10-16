import React from 'react'
import {Container} from "react-bootstrap"
function address(props) {
    return (
        <Container className="center">
            <div className="vertical-align">
            
            <p style={{margin:"0",padding:"0"}}>Address:</p>
            <p style={{fontSize:"small",wordWrap:"break-word"}}>{props.address}</p>
        
            </div>
        </Container>
    )
}

export default address
