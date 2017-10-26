import React from 'react';
import { Button } from 'semantic-ui-react'

const Roulette = props => {
  const result = props.resultObject.name ? true : false;
  const menu = props.menuUrl.length > 0 ? true : false;

	return (
		<div className="App">
      <div>
        {
          (props.restaurants.length < 1) ? <Button fluid basic color="grey" onClick={props.generateRandomRestaurant}>Just Tell Me Where To Go</Button> :
            <Button.Group>
              <Button onClick={props.handleRestaurantRoulette}>Randomly Select A Favorite</Button>
              <Button.Or />
              <Button onClick={props.generateRandomRestaurant}>Surprise me</Button>
            </Button.Group>
        }
      </div>

			{result && <h1>You must go to: {props.resultObject.name}</h1>}
      {menu && <h2>Check out the <a href={props.menuUrl}>menu.</a></h2>}
		</div>
	);
};

export default Roulette;
