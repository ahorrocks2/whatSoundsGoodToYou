import * as rp from 'request-promise'

export function getRandomRestaurantData () {
  return rp({
    uri: `http://localhost:1000/api/randomRestaurant`,
    method: 'GET',
    json: true
  });
}

export function getAllFavoriteRestaurants () {
  return rp({
    uri: `http://localhost:1000/api/restaurants`,
    method: 'GET',
    json: true
  });
}

export function postFavoriteRestaurant (details) {
  return rp({
    uri: `http://localhost:1000/api/restaurant`,
    method: 'POST',
    json: true,
    body: details
  });
}