import * as rp from 'request-promise';
const hostname = window && window.location && window.location.hostname;
const HOST = `https://${hostname}`;

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