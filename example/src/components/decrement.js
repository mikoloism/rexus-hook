import React from 'react';
import { useTrux } from 'react-trux';

function DECREMENT() {
	let { state, actions } = useTrux();
	return (
		<button className='btn-decrement' onClick={() => actions.DECREMENT()}>
			DECREMENT
		</button>
	);
}

export default DECREMENT;
