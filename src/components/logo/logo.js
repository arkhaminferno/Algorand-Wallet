import React from 'react'
import {Container,Image} from "react-bootstrap";
function logo() {
    return (
        <Container className="center " fluid>
<Image id="logo" src="/algorandlogo.svg" className="logobg" roundedCircle />
</Container>
    )
}

export default logo
