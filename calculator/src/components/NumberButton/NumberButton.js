import React from 'react';

const NumberButton = props => {
    return (
        <button className={props.numberStyle} onclick={props.numberAction}>{props.number}</button>
    )
}

export default NumberButton;
