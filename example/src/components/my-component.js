import React from 'react';

// import other components
import INCREMENT from './increment';
import DECREMENT from './decrement';
import VALUE from './value';

function MyComponent() {
	return (
		<div className='App-component'>
			<DECREMENT />
			<VALUE />
			<INCREMENT />
		</div>
	);
}

export default MyComponent;
