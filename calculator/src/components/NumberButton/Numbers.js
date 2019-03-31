import React from 'react';

import './NumberButton.css';
import NumberButton from './NumberButton';

const Numbers = () => {
	const numberAction = (val) => {
		console.log(val);
	};

	const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	return (
		<div>
			<div>
				{numbers.map((nr) => {
					return (
						<NumberButton
							key={nr}
							numberStyle="simple-button"
							numberAction={(val) => numberAction(nr)}
							number={nr}
						/>
					);
				})}
			</div>
			<NumberButton numberStyle="last-button" numberAction={(val) => numberAction(0)} number="0" />
		</div>
	);
};

export default Numbers;
