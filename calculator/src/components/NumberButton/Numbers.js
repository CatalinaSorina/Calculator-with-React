import React from 'react';

import './NumberButton.css';
import NumberButton from './NumberButton';

const Numbers = () => {
    const numberAction = (val) => {
        console.log(val)
    }

    return (
        <div>
            <div>
                <NumberButton numberStyle='simple-button' numberAction={(val)=>numberAction(1)} number='1'/>
                <NumberButton numberStyle='simple-button' numberAction={(val)=>numberAction(2)} number='2'/>
                <NumberButton numberStyle='simple-button' numberAction={(val)=>numberAction(3)} number='3'/>
            </div>
            <div>
                <NumberButton numberStyle='simple-button' numberAction={(val)=>numberAction(4)} number='4'/>
                <NumberButton numberStyle='simple-button' numberAction={(val)=>numberAction(5)} number='5'/>
                <NumberButton numberStyle='simple-button' numberAction={(val)=>numberAction(6)} number='6'/>
            </div>
            <div>
                <NumberButton numberStyle='simple-button' numberAction={(val)=>numberAction(7)} number='7'/>
                <NumberButton numberStyle='simple-button' numberAction={(val)=>numberAction(8)} number='8'/>
                <NumberButton numberStyle='simple-button' numberAction={(val)=>numberAction(9)} number='9'/>
            </div>
            <NumberButton numberStyle='last-button' numberAction={(val)=>numberAction(0)} number='0'/>
        </div>
    )
}

export default Numbers;