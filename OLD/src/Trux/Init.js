let _states = {},
	_actions = {};
const createTrux = ({ state, actions }) => {
	_states = state;
	_actions = actions;

	return { state, actions };
};
export { _states, _actions };
export default createTrux;
