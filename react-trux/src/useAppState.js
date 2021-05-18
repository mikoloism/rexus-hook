import { useState, useMemo } from 'react';

// import { getActions, createAppActions } from './Actions';
// import { useAppState } from './State';
// import initialState from './../store/states';
// import { _states as initialState } from './Init';

let initialActions = {};
const _ACTIONS = {};
const createAppActions = (actions) => {
  initialActions = { ...initialActions, ...actions };
  return initialActions;
};

let initialState = {};
const createAppState = ({ state, actions }) => {
  initialState = { ...initialState, ...state };
  createAppActions(actions);
};

const getActions = (setState) => {
  const actions_name = Object.keys(initialActions);
  actions_name.map((action) => {
    _ACTIONS[action] = (...params) => {
      return setState((state) => {
        return initialActions[action].call(null, { state }, ...params);
      });
    };
    return _ACTIONS[action];
  });
  return _ACTIONS;
};

const useAppState = () => {
  const [state, setState] = useState(initialState);
  const actions = useMemo(() => getActions(setState), [setState]);
  // getActions(setState, { state });
  return { state, actions };
};

export { getActions, createAppActions, createAppState };
export default useAppState;
