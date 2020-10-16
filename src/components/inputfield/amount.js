import React from 'react'
import {Container} from "react-bootstrap"
/**
 * This component will work as a input field.
 * @props placeholder: -> this will display the placeholder on input field.
 * @props onChange: -> calls the parent component function for submitting the type value into the parent state.
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function amount(props) {
    return (
        <Container className="center">
        <input type="number" placeholder={props.placeholder} onChange={props.onChange} min="0" required/>
        </Container>
    )
}

export default amount
