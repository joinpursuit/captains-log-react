// DEPENDENCIES
const express = require("express");
//this connects the controller to the app.js
const captainsController = require("./controllers/captainsController.js");
app.use("/logs", captainsController);

// CONFIGURATION
const app = express();

// MIDDLEWARE: must be added above the routes
app.use((req, res, next) => {
  console.log("This code runs for every request");
  next();
}); // Parse incoming JSON

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Captain's Log");
});


// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});

// EXPORT
module.exports = app;