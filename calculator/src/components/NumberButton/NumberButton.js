import React from 'react'
import './NumberButton.css';

const NumberButton = props => {
    return (
        <button className={props.numberStyle} onclick={props.numberAction}>{props.number}</button>
    )
}

export default NumberButton;
