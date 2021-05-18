import React from 'react';
import { useTrux } from 'react-trux';

function INCREMENT() {
	let { state, actions } = useTrux();
	return (
		<button className='btn-increment' onClick={actions.INCREMENT}>
			INCREMENT
		</button>
	);
}

export default INCREMENT;
