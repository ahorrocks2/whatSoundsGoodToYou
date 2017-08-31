import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import AddRestaurant from './AddRestaurant';
import HeaderPresenter from './HeaderPresenter';
import ListFavorites from './ListFavorites';


class App extends Component {
  state = {
    restaurants: []
  }

  static PropTypes = {
    restaurants: PropTypes.array
  }

  addFavorite = (restaurant) => {
    this.setState(state => {
      return {
        restaurants: [...state.restaurants, restaurant]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <HeaderPresenter />
        <AddRestaurant
          addFavorite={this.addFavorite}
        />
        <div>
          {
            this.state.restaurants.map(restaurant => {
              return (
                <ListFavorites restaurant={restaurant}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
