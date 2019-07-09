import React from 'react'
import './ActionButton.css';

const ActionButton = props => {
    return (
        <button className={props.actionStyle} onClick={props.action}> {props.actionValue}</button>
    )
}

export default ActionButton;
