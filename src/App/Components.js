import React from 'react';
import useTrux from './../trux';
import './component.css';

const Button = ({ children, onClick }) => (
	<button onClick={onClick}>{children}</button>
);
const Container = ({ children }) => {
	const { state, actions } = useTrux();
	return (
		<div id='example-trux'>
			<div id='trux-state'>
				<span>COUNTER = {state.counter}</span>
				<span>TIME OF FIXING = {state.fixTimes}</span>
			</div>
			<div id='trux-actions'>
				<Button
					className='trux-buttons--INCREMENT'
					onClick={() => actions.INCREMENT()}>
					INCREMENT
				</Button>
				<Button
					className='trux-buttons--FIXING'
					onClick={() => actions.FIXING()}>
					FIXING
				</Button>
				<Button
					className='trux-buttons--DECREMENT'
					onClick={() => actions.DECREMENT()}>
					DECREMENT
				</Button>
			</div>
			<div>{children}</div>
		</div>
	);
};

export { Button, Container };
