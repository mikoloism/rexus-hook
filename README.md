# :t-rex: + :atom_symbol: = react-trux

every react developer know, state is isolated to component!\
so if we create a hooks that work with no dependencies (only react-context-api), that help us to work with global state,

i think this is good thing :heart:

## install

`$ npm install react-trux`

## usage

### initialize

-   importing

```jsx
// App.js
import React from 'react';
import { Provider, createTrux } from './trux';

// import STATE and ACTIONS
import * as Actions from './store/actions';
import Stats from './store/stats';
```

-   actions

```jsx
// store/actions.js
const ACTION_1 = ({ state }, ...params) => {
	return { ...state, myKey: myKey + 1 };
};

export { ACTION_1 };
```

> or

```jsx
const ACTIONS = {
	OTHER_ACTION({ state }, value) {
		return { ...state, myOtherKey: value };
	},
};
export ACTIONS;
```

-   stats

```jsx
const myKey = 0;
const stats = { myKey, myOtherKey: 'for-change' };

export default stats;
```

-   Provide

```jsx
// App.js
...
function App(props) {
	let Store = createTrux({ state: Stats, actions: Actions });
	return (
		<Provider store={Store}>
			<OtherComponents />
		</Provider>
	);
}
```

### commit, dispatch, access

```jsx
// OtherComponent.jsx
import react from 'react';
import useTrux from 'react-trux';

function OtherComponent() {
	const [state, actions] = useTrux();
	return <div>{state.myKey}</div>;
}
export default OtherCompnent;
```
