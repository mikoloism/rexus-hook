import React from 'react';
import { useTrux } from 'react-trux';

class INCREMENT extends React.Component {
	constructor() {
		super();
		this.state = {};

		// extracte state, actions
		let { state, actions } = useTrux();
		this.stater = state;
		this.actions = actions;
	}

	render() {
		return <button onClick={this.actions.INCREMENT()}>INCREMENT</button>;
	}
}

export default INCREMENT;
