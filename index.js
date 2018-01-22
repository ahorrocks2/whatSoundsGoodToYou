const express = require('express');
const app = express();
const { join } = require('path');
const rp = require('request-promise');
var bodyParser = require('body-parser')

const PORT = process.env.PORT || 1000;
const assets = join(__dirname, 'client/build');

require('dotenv').config();
const ZOMATO_API_KEY = process.env.ZOMATO_API_KEY;
const MONGO_API_KEY = process.env.MONGO_API_KEY;

app.use(express.static(assets));
app.use(bodyParser.json());

app.get('/', (request, response) => {
  response.sendFile(__dirname, '/index.html')
});

app.get('/api/randomRestaurant', async (request, response) => {
  try {
    const results = await rp({
      method: 'GET',
      uri: 'https://developers.zomato.com/api/v2.1/search?entity_id=286&entity_type=city&count=20&lat=-122.6804827&lon=45.5505162&radius=4000',
      headers: {
        'Accept': 'application/json',
        'user-key': `${ZOMATO_API_KEY}`
      },
      json: true
    });
  
    console.log('Requst from zomato was successful.');
    response.send(results);
  } catch(error) {
    console.error("Error retrieving restaurants from zomato: ", error);
  }
});

app.get('/api/restaurants', async (request, response) => {
  try {
    const results = await rp({
      method: 'GET',
      uri: `https://api.mlab.com/api/1/databases/favorite-restaurants/collections/restaurants?apiKey=${MONGO_API_KEY}`,
      json: true
    });
  
    console.log("Restaurants retrieved successfully.");
    response.send(results);
  } catch(error) {
    console.error("Error retrieving db data: ", error);
  }
});

app.post('/api/restaurant', async (request, response) => {
  try {
    const results = await rp({
      method: 'POST',
      uri: `https://api.mlab.com/api/1/databases/favorite-restaurants/collections/restaurants?apiKey=${MONGO_API_KEY}`,
      headers: {
        'content-type': "application/json"
      },
      body: request.body,
      json: true
    });

    console.log("Restaurant added successfully.");
    response.send(results);
  } catch(error) {
    console.error("Error adding favorite restaurant to db: ", error);
  }
});

app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error: ', err)
  }
  console.log(`Server is live.`)
});
