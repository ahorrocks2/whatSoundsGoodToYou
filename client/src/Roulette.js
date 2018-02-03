import React from 'react';
import { Button, Grid } from 'semantic-ui-react'

const Roulette = props => {
  const result = props.resultObject.name ? true : false;
  const menu = props.menuUrl.length > 0 ? true : false;

	return (
		<div>
      <div className="rouletteButtons">
        {
          (props.restaurants.length < 1) ? <Button fluid basic color="grey" onClick={props.generateRandomRestaurant}><span className="otherTextReversed">i need something now.</span></Button> :
            <Grid columns={2}>
              <Grid.Column>
                <Button className="rouletteButton" onClick={props.handleRestaurantRoulette}><span className="randomButtonText">pick something i know i like</span></Button>
              </Grid.Column>
              <Grid.Column>
                <Button className="randomButton" onClick={props.generateRandomRestaurant}><span className="randomButtonText">none of these appeal to me</span></Button>
              </Grid.Column>
            </Grid>
        }
      </div>

			{result && <h1>stop complaining and go to: {props.resultObject.name}</h1>}
      {menu && <h2>here's the <a href={props.menuUrl}>menu.</a></h2>}
		</div>
	);
};

export default Roulette;
