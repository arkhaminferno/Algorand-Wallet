import React from 'react'
import {Modal,Button} from "react-bootstrap"
/**
 * This component will generate modal notification for displaying Seed phrase of an account.
 * @props flag -> a boolean value for displaying the modal.
 * @props generatedkey: -> this will display the seed phrase on Modal body.
 * @props closeModal -> a boolean value for closing the Modal.
 *
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
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
