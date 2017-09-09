import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Roulette = props => {
  const result = props.resultObject.name ? true : false;

	return (
		<div className="App">
      {
        (props.restaurants.length > 0) && <RaisedButton onClick={props.handleRestaurantRoulette} label='ROULETTE' />
      }
			{result && <h1>You must go to: {props.resultObject.name}</h1>}
		</div>
	);
};

export default Roulette;
