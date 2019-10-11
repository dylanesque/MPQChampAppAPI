// Imports required dependencies
const express = require('express');

// Creates the Express app
const app = express();

const seeds = require('./db.json')

const database = app.get('/characters', (req, res) => {
  res.status(200).json(seeds);
});

// Starts the app
const server = app.listen(3000, () => {
  console.log("This is working!");

});