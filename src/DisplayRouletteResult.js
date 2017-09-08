import React from 'react';

const DisplayRouletteResult = props => {
  const isThereAResult = props.resultObject.name ? true : false;

	return (
		<div className="App">
			{props.resultObject.name && <h1>You must go to: {props.resultObject.name}</h1>}
		</div>
	);
};

export default DisplayRouletteResult;
