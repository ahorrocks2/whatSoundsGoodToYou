import * as rp from 'request-promise'

export function getRandomRestaurantData () {
  return rp({
    uri: `http://localhost:1000/api/randomRestaurant`,
    method: 'GET',
    json: true
  });
}
