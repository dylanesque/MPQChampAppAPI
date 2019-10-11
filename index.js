// Imports required dependencies
const express = require('express');
const pretty = require('express-prettify');
const seeds = require('./db.json');

// Creates the Express app
const app = express();

// Middleware to pretty-print json
app.use(pretty({ query: 'pretty' }));



const database = app.get('/', (req, res) => {
  res.status(200).json(seeds);
});

// Starts the app
const server = app.listen(3000, () => {
  console.log("This is working!");

});