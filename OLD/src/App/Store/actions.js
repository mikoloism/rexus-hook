const INCREMENT = ({ state }) => ({ ...state, counter: state.counter + 1 });
const DECREMENT = ({ state }) => ({ ...state, counter: state.counter - 1 });
const FIXING = ({ state }, number = 0) => ({
	...state,
	counter: number,
	fixTimes: state.fixTimes + 1,
});
export { INCREMENT, DECREMENT, FIXING };
