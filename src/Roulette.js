import React from 'react';

const Roulette = props => {
  const result = props.resultObject.name ? true : false;

	return (
		<div className="App">
      {
        (props.restaurants.length > 0) ? <button onClick={props.handleRestaurantRoulette}>ROULETTE</button>
        : <div><h1>Add some restaurants!</h1></div>
      }
			{result && <h1>You must go to: {props.resultObject.name}</h1>}
		</div>
	);
};

export default Roulette;
