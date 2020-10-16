import React from "react";
import { Container } from "react-bootstrap";
/**
 * This component will work as a input field .
 * @props placeholder: -> this will display the placeholder on input field.
 * @props onChange: -> calls the parent component function for submitting the type value into the parent state.
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function input(props) {
  return (
    <Container className="center">
      <input
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
        required
      />
    </Container>
  );
}

export default input;
