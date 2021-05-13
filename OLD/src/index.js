import React from 'react';
import ReactDOM from 'react-dom';
import './App/index.css';
import App from './App/App.js';
import reportWebVitals from './App/reportWebVitals';

import { Provider, createTrux } from './trux';
import State from './App/Store/state';
import * as Actions from './App/Store/actions';

const Store = createTrux({ state: State, actions: Actions });

ReactDOM.render(
	<Provider store={Store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
