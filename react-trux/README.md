# :t-rex: :heavy_plus_sign: :atom_symbol: = React-Trux

non-dependencies react hook for managing state as globaly using context api

every react developer know, state is isolated to component!\
so if we create a hooks that work with no dependencies (only react-context-api), that help us to work with global state,

i think this is good thing :heart:

## install

`$ npm install react-trux`

## usage

### initialize

- actions

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

> you should export actions as non default 🤗

- stats

```jsx
// store/state.js
const myKey = 0;
const state = { myKey, myOtherKey: 'for-change' };
export default state;
```

> or

```jsx
// store/state.js
export default {
  myKey: 0,
  myOtherKey: 'string-changable',
};
```

- importing

```jsx
// src/App.js (or any other root-component do you think)
import React from 'react';
import { Provider, createTrux } from './trux';

// import STATE and ACTIONS
import * as Actions from './store/actions';
import State from './store/state';
```

- Provide

```jsx
// src/App.js
function App(props) {
  let Store = createTrux({ state: State, actions: Actions });
  return (
    <Provider store={Store}>
      <MyComponents />
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

:fist: :heart:
