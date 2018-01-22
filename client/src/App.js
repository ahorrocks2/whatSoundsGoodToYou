import React, { Component } from 'react';
import './App.css';
import { getRandomRestaurantData, getAllFavoriteRestaurants, postFavoriteRestaurant } from './server.js';

import PropTypes from 'prop-types';

import AddRestaurant from './AddRestaurant';
import HeaderPresenter from './HeaderPresenter';
import DisplayFavoriteRestaurants from './DisplayFavoriteRestaurants/DisplayFavoriteRestaurants';
import Roulette from './Roulette';

class App extends Component {
	state = {
		restaurants: [],
		randomRestaurant: {},
		menuUrl: '',
		displayList: true
	};
	
	componentDidMount () {
		getAllFavoriteRestaurants().then(result => {
			this.setState(state => {
				return {
					...state,
					restaurants: result
				};
			});
		});
	};

	static PropTypes = {
		restaurants: PropTypes.array,
		randomRestaurant: PropTypes.object
	};

	handleAddFavorite = restaurant => {
		postFavoriteRestaurant(restaurant).then(result => {
			getAllFavoriteRestaurants().then(result => {
				this.setState(state => {
					return {
						...state,
						restaurants: result,
						displayList: true,
						randomRestaurant: {}
					};
				});
			})
		});
	};

	selectRandomRestaurant = () => {
		const numOfRestaurants = this.state.restaurants.length;
		if (numOfRestaurants < 1) return;

		this.setState(state => {
			const max = numOfRestaurants - 1;
			const randomIndex = Math.floor(Math.random() * (max + 1));
			const randomRestaurant = state.restaurants[randomIndex];

			return {
				randomRestaurant,
				menuUrl: '',
				displayList: false
			};
		});
	};

	generateRandomRestaurant = async () => {
		const listOfRestaurants = await getRandomRestaurantData();

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
				menuUrl: restaurant.menu_url,
				displayList: false
			}
		});
	}

	render() {
		return (
			<div className="App">
				<HeaderPresenter />
				<AddRestaurant addFavorite={this.handleAddFavorite} />
				<DisplayFavoriteRestaurants restaurants={this.state.restaurants} isVisible={this.state.displayList}/>
				<Roulette
					restaurants={this.state.restaurants}
					resultObject={this.state.randomRestaurant}
					menuUrl={this.state.menuUrl}
					handleRestaurantRoulette={() => this.selectRandomRestaurant()}
					generateRandomRestaurant={() => this.generateRandomRestaurant()}
				/>

			</div>
		);
	}
}

export default App;
