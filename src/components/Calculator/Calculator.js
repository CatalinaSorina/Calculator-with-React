import React from "react";

import "./Calculator.css";

import DisplayResult from "../DisplayResult/DisplayResult";
import Numbers from "../NumberButton/Numbers";
import Actions from "../ActionButton/Actions";

class Calculator extends React.Component {
  state = {
    display: 0
  };

  displayNumber = value => {
    this.setState({
      display:
        this.state.display === 0 ? value : this.state.display + "" + value
    });
  };

  render() {
    return (
      <div className="calculator">
        <DisplayResult display={this.state.display} />
        <Actions />
        <Numbers displayNumber={this.displayNumber} />
      </div>
    );
  }
}

export default Calculator;
