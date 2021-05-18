import React from 'react';
import { useTrux } from '../../../react-trux';

const VALUE = () => {
	let { state, actions } = useTrux();
	return (
		<span>
			<strong>{state.counter}</strong>
		</span>
	);
};

export default VALUE;
