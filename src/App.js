import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import AddRestaurant from './AddRestaurant';
import HeaderPresenter from './HeaderPresenter';
import DisplayFavoriteRestaurant from './DisplayFavoriteRestaurant';
import Roulette from './Roulette';

class App extends Component {
	state = {
		restaurants: [],
		randomRestaurant: {}
	};

	static PropTypes = {
		restaurants: PropTypes.array,
		randomRestaurant: PropTypes.object
	};

	handleAddFavorite = restaurant => {
		this.setState(state => {
			return {
				restaurants: [...state.restaurants, { ...restaurant, id: Date.now() }]
			};
		});
	};

	selectRandomRestaurant = numOfRestaurants => {
		if (numOfRestaurants === 0) return;

		this.setState(state => {
			const max = numOfRestaurants - 1;
			const randomIndex = Math.floor(Math.random() * (max + 1));
			const randomRestaurant = state.restaurants[randomIndex];

			debugger;
			return {
				randomRestaurant
			};
		});
	};

	render() {
		return (
			<div className="App">
				<HeaderPresenter />
				<AddRestaurant addFavorite={this.handleAddFavorite} />

				<div>
					{this.state.restaurants.map(restaurant => {
						return (
							<DisplayFavoriteRestaurant
								key={restaurant.id}
								restaurant={restaurant}
							/>
						);
					})}
				</div>

				<Roulette
					restaurants={this.state.restaurants}
					resultObject={this.state.randomRestaurant}
					handleRestaurantRoulette={() => this.selectRandomRestaurant(this.state.restaurants.length)}
				/>

			</div>
		);
	}
}

export default App;
