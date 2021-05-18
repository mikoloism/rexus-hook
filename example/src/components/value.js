import React from 'react';
import { useTrux } from 'react-trux';

const VALUE = () => {
	let { state, actions } = useTrux();
	return (
		<span
			className={
				state.counter < 0
					? 'value low'
					: state.counter < 5
					? 'value'
					: 'value high'
			}
		>
			<strong>{state.counter}</strong>
		</span>
	);
};

export default VALUE;
