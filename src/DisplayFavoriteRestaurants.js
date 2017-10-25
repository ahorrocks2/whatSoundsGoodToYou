import React, { Component } from 'react';
import { Accordion } from 'semantic-ui-react';

import RestaurantDetails from './RestaurantDetails';

class ListFavorites extends Component {
	state = {
		activeIndex: 0
	}

	handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex })
  }

	getIndex = r => this.props.restaurants.indexOf(r);

	render() {
		const { activeIndex } = this.state;

		return (
			<div className="App">
				<Accordion fluid styled>
					{this.props.restaurants.map(restaurant => (
						<div>
							<Accordion.Title
								active={activeIndex === this.getIndex(restaurant)}
								index={this.props.restaurants.indexOf(restaurant)}
								onClick={this.handleClick}
								>
								<h2>{restaurant.name}</h2>
							</Accordion.Title>

							<Accordion.Content
								active={activeIndex === this.getIndex(restaurant)}
							>
								<RestaurantDetails restaurant={restaurant} />
							</Accordion.Content>
						</div>
					))}
				</Accordion>
			</div>
		);
	}
}

export default ListFavorites;
