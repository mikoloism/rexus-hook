import React from 'react';
import { useTrux } from '../../../react-trux';

function DECREMENT() {
	let { state, actions } = useTrux();
	return <button onClick={actions.DECREMENT}>DECREMENT</button>;
}

export default DECREMENT;
