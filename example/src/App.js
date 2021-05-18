import React from 'react';
import logo from './logo.svg';
import './App.css';

// import other components
import MyComponent from './components/my-component';

// import providerTrux and createTrux
import { Provider, createTrux } from 'react-trux';

// import store (state, actions)
import * as Actions from './store/actions';
import State from './store/state';

function App() {
	let Store = createTrux({ state: State, actions: Actions });
	return (
		<Provider store={Store}>
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<p>
						Edit <code>src/App.js</code> and save to reload. Edit file on{' '}
						<code>src/store/</code> folder and save to reload.
					</p>
					<a
						className='App-link'
						href='https://github.com/miko-github/'
						target='_blank'
						rel='noopener noreferrer'
					>
						About React-Trux
					</a>
				</header>
				<MyComponent />
			</div>
		</Provider>
	);
}

export default App;
