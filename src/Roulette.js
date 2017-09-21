import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Roulette = props => {
  const result = props.resultObject.name ? true : false;
  const menu = props.menuUrl.length > 0 ? true : false;

	return (
		<div className="App">
      <div>
        {
          (props.restaurants.length > 0) && <RaisedButton onClick={props.handleRestaurantRoulette} label='ROULETTE' />
        }
      </div>
      <div>
        <RaisedButton onClick={props.generateRandomRestaurant} label='RANDOM' />
      </div>

			{result && <h1>You must go to: {props.resultObject.name}</h1>}
      {menu && <h2>Check out the <a href={props.menuUrl}>menu.</a></h2>}
		</div>
	);
};

export default Roulette;
