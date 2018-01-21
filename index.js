const express = require('express');
const app = express();
const { join } = require('path');
const assets = join(__dirname, 'build');
require('dotenv').config();


app.use(express.static(assets));

app.get('/', (req, res) => {
  res.sendFile(__dirname, '/index.html')
});

app.listen(1000, (err) => {
  if (err) {
    return console.log('Error: ', err)
  }
  console.log(`Server is live.`)
})
