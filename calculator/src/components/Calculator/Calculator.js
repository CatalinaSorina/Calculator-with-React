import React from 'react'

import DisplayResult from '../DisplayResult/DisplayResult';
import Numbers from '../NumberButton/Numbers';
import Actions from '../ActionButton/Actions';

const Calculator = props => {
    return (
        <div>
            <DisplayResult />
            <Actions />
            <Numbers />
        </div>
    )
}

export default Calculator;
