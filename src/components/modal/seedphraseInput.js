import React from "react";
import { Modal, Button } from "react-bootstrap";

function seedphraseInput(props) {

  const handleChange = event => {
    props.onChange(event.target.value);
}
  return (
    <Modal show={props.toggleflag}>
      <Modal.Header>
        <Modal.Title>Input Secret Key </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="form-control input-lg"
          id="inputlg"
          type="text"
          placeholder="Paste your seed phrase here"
          onChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" id="btn-fixed" onClick={props.onClick}>
          Submit
        </Button>
        <Button variant="secondary" id="btn-fixed" onClick={props.closemodal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
export default seedphraseInput;
