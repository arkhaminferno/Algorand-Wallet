import React from 'react'
import {Container} from "react-bootstrap"
/**
 * This component will display balance of a address.
 * @props balance: -> displays the balance of a address
 * 
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function balance(props) {
    return (
        <Container className="center">
        <div className="horizontal-align">
        <div>{props.balance}     
        <span>
        <img src="/algosmall.png" height="14px" width="14px"/>
        </span>
        </div>
        </div>
        </Container>
    )
}

export default balance
