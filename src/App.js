import React from 'react';
import Container from './components';
import { Provider, createTrux } from './trux';
import { state, actions } from './store';

import './styles/main.scss';

function App(props) {
	let Store = createTrux({ state, actions });
	return (
		<Provider store={Store}>
			<Container />
		</Provider>
	);
}

export default App;
