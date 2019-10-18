// Imports required dependencies
const express = require("express");
const pretty = require("express-prettify");
const seeds = require("./db.json");

// Creates the Express app
const app = express();

// Sets both development or production ports
const port = process.env.PORT || 6767;

// Middleware to pretty-print json
app.use(pretty({ query: "pretty" }));

// Rendering logic for database
app.get("/", (req, res) => {
  res.status(200).json(seeds);
});

// Starts the app
const server = app.listen(port, () => {
  console.log("This is working!");
});
