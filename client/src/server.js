import * as rp from 'request-promise';
const HOST = process.env.PORT;

export function getRandomRestaurantData () {
  return rp({
    uri: `${HOST}/api/randomRestaurant`,
    method: 'GET',
    json: true
  });
}

export function getAllFavoriteRestaurants () {
  return rp({
    uri: `${HOST}/api/restaurants`,
    method: 'GET',
    json: true
  });
}

export function postFavoriteRestaurant (details) {
  return rp({
    uri: `${HOST}/api/restaurant`,
    method: 'POST',
    json: true,
    body: details
  });
}