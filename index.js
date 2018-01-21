const express = require('express');
const app = express();
const { join } = require('path');
const rp = require('request-promise');

const assets = join(__dirname, 'build');

require('dotenv').config();
const ZOMATO_API_KEY = process.env.ZOMATO_API_KEY;


app.use(express.static(assets));

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

app.listen(1000, (err) => {
  if (err) {
    return console.log('Error: ', err)
  }
  console.log(`Server is live.`)
});
