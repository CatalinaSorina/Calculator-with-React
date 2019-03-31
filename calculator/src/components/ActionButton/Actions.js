import React from 'react';

import ActionButton from './ActionButton';

const Actions = () => {
	const actionClick = (val) => {
		console.log(val);
	};

	const actionValues = [ 'clear', '-', '+', ':', 'x', '=' ];

	return (
		<div className="action-buttons">
			{actionValues.map((value) => {
				return (
					<ActionButton
						key={value}
						actionStyle="action-button"
						action={(value) => actionClick(value)}
						actionValue={value}
					/>
				);
			})}
		</div>
	);
};

export default Actions;
