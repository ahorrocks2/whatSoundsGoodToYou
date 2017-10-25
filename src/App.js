import React, { Component } from 'react';
import rp from 'request-promise';

import './App.css';

import PropTypes from 'prop-types';

import AddRestaurant from './AddRestaurant';
import HeaderPresenter from './HeaderPresenter';
import DisplayFavoriteRestaurants from './DisplayFavoriteRestaurants';
import Roulette from './Roulette';

let API_KEY = 'ba91e2f7b4c7b52bef1710bd85500437';

class App extends Component {
	state = {
		restaurants: [],
		randomRestaurant: {},
		menuUrl: ''
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

			return {
				randomRestaurant,
				menuUrl: ''
			};
		});
	};

	generateRandomRestaurant = async () => {
		const listOfRestaurants = await rp({
			method: 'GET',
			uri: 'https://developers.zomato.com/api/v2.1/search?entity_id=286&entity_type=city&count=20&lat=-122.6804827&lon=45.5505162&radius=4000',
			headers: {
				'Accept': 'application/json',
				'user-key': API_KEY
			},
			json: true
		});

		const randomIndex = Math.floor(Math.random() * 20);
		const restaurant = listOfRestaurants.restaurants[randomIndex].restaurant;

		const randomRestaurant = {
			name: restaurant.name,
			type: restaurant.cuisines,
			hood: restaurant.location.locality
		}

		this.setState(state => {
			return {
				randomRestaurant,
				menuUrl: restaurant.menu_url
			}
		});
	}

	render() {
		return (
			<div className="App">
				<HeaderPresenter />
				<AddRestaurant addFavorite={this.handleAddFavorite} />
				<DisplayFavoriteRestaurants restaurants={this.state.restaurants}	/>
				<Roulette
					restaurants={this.state.restaurants}
					resultObject={this.state.randomRestaurant}
					menuUrl={this.state.menuUrl}
					handleRestaurantRoulette={() => this.selectRandomRestaurant(this.state.restaurants.length)}
					generateRandomRestaurant={() => this.generateRandomRestaurant()}
				/>
			</div>
		);
	}
}

export default App;
