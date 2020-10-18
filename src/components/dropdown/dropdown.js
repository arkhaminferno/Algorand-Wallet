import React from "react";
import {Container} from "react-bootstrap"
function dropdown(props) {
  return (
    <Container className="center">
      <select
        className="dropdown"
        onChange={(event) => {
          props.onChange(event.target.value);
        }}
      >
        <option value="https://api.algoexplorer.io">Mainnet</option>
        <option value="https://api.testnet.algoexplorer.io">Testnet</option>
      </select>
    </Container>
  );
}

export default dropdown;
