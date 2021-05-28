# :t-rex: :heavy_plus_sign: :atom_symbol: = React-Trux

<a href="https://npmjs.org/package/react-trux"><img alt="NPM version" src="https://img.shields.io/npm/v/react-trux.svg?style=flat-square" /></a>
[![npm](https://img.shields.io/npm/dw/react-trux?style=flat-square)](https://npmjs.org/package/react-trux)
[![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/react-trux?style=flat-square)](https://npmjs.org/package/react-trux)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/miko-github/react-trux/publish%20npm?style=flat-square)](https://github.com/miko-github/react-trux/actions/workflows/npm-publish.yml)
[![NPM](https://img.shields.io/npm/l/react-trux?style=flat-square)][gh-license]


> **non-dependencies** react hook for managing state as globaly (using context api)

> every react developer know, state is isolated to component!
>
> so if we create a hooks that work with no dependencies (only react-context-api), that help us to work with global state

## Content

- [main](#content)
  - [pros vs. cons](#pros-vs-cons)
  - [example](#example)
  - [install](#install)
  - [rules](#rules)
  - [steps](#safe-steps)
    - [store](#1-initialize)
    - [create](#2-create-trux)
    - [use](#3-use-trux)
  - [hooks/methods](#hooksmethods)
    - [commit](#1-usecommit-and-thiscommit)
    - [dispatch](#2-usedispatch-and-thisdispatch)
    - [actions](#3-useaction--thisaction--thisactions)
  - [social](#social)
  - [license](#license)

## Pros vs. Cons

- **:heavy_check_mark: Pros**
  - **non-dependencies**
  - setup and use with only **3 steps**
  - easy to use
  - easy setup
- **:heavy_multiplication_x: Cons**
  - unsupport _currentlly_ class component states/actions
  - unsupport _currentlly_ `dispatch`ing actions
    - may in new release
  - unsupport _currentlly_ `useAction` hook (alike redux `dispatch`)
    - may in new release
  - unsupport _currentlly_ `useState` hook for accessing faster to global states
    - may in new release

## Example

**mini-app counter**

available in [here](https://github.com/miko-github/react-trux/tree/master/example)

## Install

- npm
  - `npm install react-trux`
- yarn
  - `yarn add react-trux`

## Rules

> improve in next release :hugs:
>
> [demo](https://github.com/miko-github/react-trux/blob/master/readme/rules)

## Safe Steps

### 1. Initialize

> create you stores (states and actions)

#### 1.1. Actions

> this is you methods for updating states
>
> NOTE : if you use actions as single file, then, you would non-default export it

```jsx
// store/actions.js
const MY_ACTION_ONE = ({ state }) => {
  return { ...state, myStateKey: myCustomValue };
};
const MY_ACTION_TWO = ({ state }, arg1) => {
  return { ...state, myOtherState: arg1 };
};
const MY_ACTION_THREE = ({ state }) => {
  return { ...state, myINCREMENT: state.myINCREMENT + 1 };
};

export { MY_ACTION_ONE, MY_ACTION_TWO, MY_ACTION_THREE };
```

**OR**

```jsx
// store/actions.js
const MY_ACTIONS = {
  NORM_CASE({ state }){
    return {...state, myState: state.myState < 50 ? state.myState + 1 : 0 }
  },
  'kebab-case-action': ({ state }) => {
    return { ...state, 'kebab-state': state['kebab-state'] + 1 };
  }
};
export { ...MY_ACTIONS };
```

#### 1.2. States

> there is your initial values for your states

```jsx
// store/state.js
const myState = 0;
const myStateObject = { value: 0, foo: 'bar' };

export default { myState, myStateObject, 'kebab-state': 0 };
```

> NOTE : you can first export states

```jsx
// store/state.js
export default {
  myState: 0,
  myStateObject: { value: 0, foo: 'bar' },
  'kebab-case': 0,
};
```

### 2. Create Trux

> NOTE : `createTrux` and `Provider` hooks, should be a same where at the root
>
> TIPS : you can use below to any root compoent do think is.

```jsx
// src/App.js (or any other root-component do you think)
import React from 'react';
import { Provider, createTrux } from 'react-trux';

// import other things (e.g. components, styles)
import MyComponent from './components/my-component.jsx';

// import STATES and ACTIONS
import * as Actions from './store/actions';
import States from './store/states';

// also, you can import here any thing else

function App(props) {
  let Store = createTrux({ state: States, actions: Actions });
  return (
    <Provider store={Store}>
      <MyComponent />
    </Provider>
  );
}
```

### 3. Use Trux

> we try to use store thing (state, actions) in children components
>
> NOTE : currentlly work with react-functional components

#### 3.1. use states

> TIPS :
>
> anywhere you can use `useTrux`
>
> but, clean code say, we should use this, in component block scope

**imports**

```jsx
// components/my-component.jsx
import React from 'react';
import { useTrux } from 'react-trux';
```

**function statement component**

```jsx
function MyComponent() {
  let { state, actions } = useTrux();
  return <div id='my-component'>{state.myState}</div>;
}
```

**arrow function component**

```jsx
const MyComponent = () => {
  let { state, actions } = useTrux();
  return <div id='my-component'>{state.myState}</div>;
};
```

**export component**

```jsx
export default MyComponent;
```

> **DEPREACATED**
>
> ~~TIPS :~~
>
> ~~you can use `let states = useState()` instead of `let { state } = useTrux();`~~

#### 3.2. use actions

> NOTE :
>
> actually, `useAction` hook and `dispatch` method are **DEPRECATED**
>
> we can use only `useTrux` hooks

```jsx
// components/my-button.jsx
// ... other code ...

const MyButton = () => {
  let { state, actions } = useTrux();
  return (
    <>
      <button onClick={actions.MY_ACTION} className='btn btn-secondary'>
        i'm a button, and run without any parameters
      </button>

      <button onClick={actions['kebab-actions']} className='btn btn-secondary'>
        i'm a button too, but, as kebab-case
      </button>

      <button
        onClick={() => actions.MY_ACTION(MyParameter)}
        className='btn btn-secondary'
      >
        i'm a button, i give the parameter
      </button>

      <button
        onClick={() => actions['other-kebab-actions'](MyParam)}
        className='btn btn-secondary'
      >
        i'm a button too, with kebab-case and parameter
      </button>

      <button
        onClick={() =>
          state.my_value < 50
            ? actions.value_is_low()
            : actions.value_is_hight()
        }
        className='btn btn-secondary'
      >
        i'm use if statement in my click body
      </button>
    </>
  );
};

// ... another code ...
```

## hooks/methods

> TIPS: all of this hooks/methods are **DEPRECATED**

### 1. `useCommit` and `this.commit`

- class component
  > if state available in class, change them, else, find in global states

```jsx
class MyComponent extends React.Component {
  // .. constructor ...

  render() {
    return (
      <>
        <button onClick={() => this.commit('which-state', new_value)}>
          me as button
        </button>
      </>
    );
  }
}
```

- function component
  > change global states

```jsx
function MyComponent() {
  return (
    <>
      <button onClick={() => useCommit('which-state', new_value)}>
        me as button
      </button>
    </>
  );
}
```

### 2. `useDispatch` and `this.dispatch`

- class component

```jsx
class MyComponent extends React.Component {
  // ... constructor ...
  render() {
    return (
      <>
        <button onClick={() => this.dispatch('ACTION_NAME', 'parameter')}>
          click to dispatch
        </button>
      </>
    );
  }
}
```

- functional component

```jsx
function MyComponent() {
  return (
    <>
      <button onClick={() => useDispatch('ACTION_NAME', 'parameter')}>
        click to dispatch
      </button>
    </>
  );
}
```

### 3. `useAction` & `this.action` & `this.actions`

- class component

```jsx
class MyComponent extends React.Component {
  // ... constructor ...
  render() {
    return (
      <>
        <button onClick={() => this.action('ACTION_NAME', 'parameter')}>
          click to call action
        </button>

        <button onClick={() => this.actions.ACTION_NAME('parameter')}>
          click to call other action
        </button>

        <button onClick={() => this.actions['ACTION_NAME']('parameter')}>
          click to call another action
        </button>
      </>
    );
  }
}
```

- functional component
  > TIPS: `callAction` is alise for `useAction`

```jsx
function MyComponent() {
  return (
    <>
      <button onClick={() => useAction('ACTION_NAME', 'parameter')}>
        click to use action
      </button>

      <button onClick={() => callAction('ACTION_NAME', 'parameter')}>
        click to call action
      </button>
    </>
  );
}
```

## Social

[github](https://github.com/miko-github/react-trux)
[npmjs](https://npmjs.com/package/react-trux)
[email](mikoloism.github@gmail.com)
[contribute](https://github.com/miko-github/react-trux/blob/master/readme/contributing.md)

## LICENSE

under [MIT](https://github.com/miko-github/react-trux/blob/master/LICENSE) & **OPEN-SOURCE**

:fist: :heart:


[gh-license]: https://github.com/miko-github/react-trux/blob/master/LICENSE
