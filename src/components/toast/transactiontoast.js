import React from "react";
import { Toast, Container } from "react-bootstrap";
/**
 * This component will generate toast notification after successfull transaction confirmation.
 * @props transactionID: -> this will display the txn ID on the toast body.
 * @props showtoast: -> a boolean value for displaying the toast notification.
 * @props closetoast:-> a boolean value for closing the toast notification.
 * @author [Kumar Gaurav](https://github.com/arkhaminferno)
 */
function transactiontoast(props) {
  return (
    <Toast show={props.showtoast} onClose={props.closetoast}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Success!</strong>
        <small>3 seconds ago</small>
      </Toast.Header>

      <Toast.Body>
        <p style={{ fontSize: "smaller", wordWrap: "break-word" }}>
          Your Transaction id is {props.transactionID}.
        </p>{" "}
        <br />
        <a
          href={`https://testnet.algoexplorer.io/tx/${props.transactionID}`}
          target="_blank"
        >
          {" "}
          Click to Verify at Algo Explorer{" "}
        </a>
      </Toast.Body>
    </Toast>
  );
}

export default transactiontoast;
