import * as rp from 'request-promise';
const PORT = process.env.PORT || 1000;
const HOST = process.env.HOST || 'http://localhost';

export function getRandomRestaurantData () {
  return rp({
    uri: `${HOST}:${PORT}/api/randomRestaurant`,
    method: 'GET',
    json: true
  });
}

export function getAllFavoriteRestaurants () {
  return rp({
    uri: `${HOST}:${PORT}/api/restaurants`,
    method: 'GET',
    json: true
  });
}

export function postFavoriteRestaurant (details) {
  return rp({
    uri: `${HOST}:${PORT}/api/restaurant`,
    method: 'POST',
    json: true,
    body: details
  });
}