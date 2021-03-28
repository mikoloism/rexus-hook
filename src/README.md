# Trux (T-Rux) 🦖

> React Hooks State Mangement System

## Usage

### 1. Create Storage (States, Actions)

> my store folder at [here](./App/Store)

Before anything, you should create to file, first state [or any name] (that contain you states and data objects),
then Actions [or any name] (this save your any action and method, you want to change state objects),

### 2. Provider Creation

> this process should be in root component, alike `index.js` or `App.js` or any file you want to be.

then you importing `createTrux()` hook, then Send imported Object from Store Folder (state, actions) to them.
and it, return an Object, you should send it as `store` props to `Provider`. so, what is Provider?

Provider is an Component you would import it from Trux and use your node components as children for this Component.

```jsx
    // index.js //MyRootComponent.js
    ...
    import Children from './Component/index.js';
    import { Provider, createTrux } from 'trux';
    import State from './Store/state.js';
    import * as Actions from './Store/actions.js';
    ...
    const App = () => {
    	const Store = createTrux({ state: State, actions: Actions });
    	return(
    		<Provider store={Store}>
    			<Children />
    		</Provider>,
    	);
    };
    ...
```

### 3. `useTrux`

to this step, you want to use `states` and `actions`?

so, you use them, with importing `useTrux` from `trux`

```jsx
    // ./component/index.js MyChildNodeComponent
    ...
    import useTrux from 'trux';

    const Component = () => {
    	const { state, actions } = useTrux();
    	return (
    		<div>
    			<span>my state key name is { state['my-state-name'] }</span>
    			<button onClick={() => actions.MY_ACTION(...params)}>
    				button is clickable
    			</button>
    		</div>
    	);
    };
    ...
```
