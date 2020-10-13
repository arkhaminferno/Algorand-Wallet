import React from 'react'
import {Modal,Button} from "react-bootstrap"
function mnemonic(props) {
   
    return (
        <Modal show={props.flag} >
        <Modal.Header >
          <Modal.Title>Mnemonic Key</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.generatedkey}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.closeModal} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default mnemonic