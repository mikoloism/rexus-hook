import * as React from 'react';
import { TruxContext } from './Context';
import useAppState, { createAppState } from './useAppState';

function Provider({ store, children }) {
	createAppState(store);
	const { state, actions } = useAppState();
	return (
		<TruxContext.Provider value={{ state, actions }}>
			{children}
		</TruxContext.Provider>
	);
}

export default Provider;
