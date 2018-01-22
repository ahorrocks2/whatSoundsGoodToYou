import * as rp from 'request-promise';
const PORT = process.env.PORT || `http://localhost:1000`;

export function getRandomRestaurantData () {
  return rp({
    uri: `${PORT}/api/randomRestaurant`,
    method: 'GET',
    json: true
  });
}

export function getAllFavoriteRestaurants () {
  return rp({
    uri: `${PORT}/api/restaurants`,
    method: 'GET',
    json: trues
  });
}

export function postFavoriteRestaurant (details) {
  return rp({
    uri: `${PORT}/api/restaurant`,
    method: 'POST',
    json: true,
    body: details
  });
}