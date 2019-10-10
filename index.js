// Imports required dependencies
const express = require('express');

// Creates the Express app
const app = express();

// Starts the app
const server = app.listen(3000, () => {
  console.log("Test is working!");
});