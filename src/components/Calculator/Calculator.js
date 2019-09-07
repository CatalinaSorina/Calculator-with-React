import React from "react";

import "./Calculator.css";

import DisplayResult from "../DisplayResult/DisplayResult";
import Numbers from "../NumberButton/Numbers";
import Actions from "../ActionButton/Actions";

class Calculator extends React.Component {
  state = {
    display: 0
  };

  render() {
    return (
      <div className="calculator">
        <DisplayResult display={this.state.display} />
        <Actions />
        <Numbers />
      </div>
    );
  }
}

export default Calculator;
