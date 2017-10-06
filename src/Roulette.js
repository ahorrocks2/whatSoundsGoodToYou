import React from 'react';
import { Button } from 'semantic-ui-react'

const Roulette = props => {
  const result = props.resultObject.name ? true : false;
  const menu = props.menuUrl.length > 0 ? true : false;

	return (
		<div className="App">
      <div>
        {
          (props.restaurants.length > 0) && <Button basic color='teal' onClick={props.handleRestaurantRoulette}>ROULETTE!</Button>
        }
      </div>
      <div>
        <Button basic color='teal' onClick={props.generateRandomRestaurant}>Random</Button>
      </div>

			{result && <h1>You must go to: {props.resultObject.name}</h1>}
      {menu && <h2>Check out the <a href={props.menuUrl}>menu.</a></h2>}
		</div>
	);
};

export default Roulette;
