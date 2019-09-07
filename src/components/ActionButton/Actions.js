import React from "react";

import ActionButton from "./ActionButton";

const Actions = props => {
  const actionClick = e => {
    const val = e.target.textContent;
    // console.log(val);
    props.operandAction(val);
  };

  const actionValues = ["clear", "-", "+", ":", "x", "="];

  return (
    <div className="action-buttons">
      {actionValues.map(value => {
        return (
          <ActionButton
            key={value}
            actionStyle="action-button"
            action={actionClick}
            actionValue={value}
          />
        );
      })}
    </div>
  );
};

export default Actions;
