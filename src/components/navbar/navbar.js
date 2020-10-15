import React from 'react'
import {Navbar,Nav,Button,Form,FormControl} from "react-bootstrap"
function navbar() {
    return (
        <Navbar bg="light" variant="light">
    <Navbar.Brand href="https://www.meld.gold/" target="_blank"><img  
        height="30%" width="30%" src="/meld-logo.png"/></Navbar.Brand>
    <Nav className="ml-auto">
      <Nav.Link href="https://bank.testnet.algorand.network/" target="_blank">Algorand Faucet</Nav.Link>
    </Nav>
    
  </Navbar>
    )
}

export default navbar
