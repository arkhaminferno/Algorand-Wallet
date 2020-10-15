import React from 'react'
import {Container} from "react-bootstrap"
function address(props) {
    return (
        <Container className="center">
            <div className="vertical-align">
            
            <p style={{margin:"0",padding:"0"}}>Address:</p>
            <p style={{fontSize:"small",wordWrap:"break-word"}}>URL2KRFNF5ETBN3DOZI74YP5ETC6BDGLNRYH5TEDQ4JRQ6I4DGXVD7ZDYU{props.Address}</p>
        
            </div>
        </Container>
    )
}

export default address
