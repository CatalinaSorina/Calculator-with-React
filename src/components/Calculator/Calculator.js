import React from "react";

import "./Calculator.css";

import DisplayResult from "../DisplayResult/DisplayResult";
import Numbers from "../NumberButton/Numbers";
import Actions from "../ActionButton/Actions";

class Calculator extends React.Component {
  state = {
    display: 0,
    oldDisplay: null,
    operand: null
  };

  displayNumber = value => {
    this.setState({
      display:
        Number(this.state.display) === 0 || this.state.oldDisplay === null
          ? value
          : this.state.display + "" + value
    });
  };

  operandAction = operand => {
    switch (operand) {
      case "clear":
        this.setState({ display: 0, oldDisplay: null, operand: null });
        break;
      case "-":
      case "+":
      case ":":
      case "x":
        this.setState({
          oldDisplay: this.state.display,
          display: 0,
          operand: operand
        });
        // console.log(operand);
        break;
      case "=":
        let result;
        const oldDisplay = Number(this.state.oldDisplay);
        const display = Number(this.state.display);
        switch (this.state.operand) {
          case "-":
            result = oldDisplay - display;
            break;
          case "+":
            result = oldDisplay + display;
            break;
          case "x":
            result = oldDisplay * display;
            break;
          case ":":
            result = oldDisplay / display;
            break;
          default:
            result = display;
        }
        this.setState({ display: result, oldDisplay: null, operand: null });
        break;
      default:
        console.log("not an operand");
    }
  };

  render() {
    return (
      <div className="calculator">
        <DisplayResult display={this.state.display} />
        <div className="operators">
          <Numbers displayNumber={this.displayNumber} />
          <Actions operandAction={this.operandAction} />
        </div>
      </div>
    );
  }
}

export default Calculator;
