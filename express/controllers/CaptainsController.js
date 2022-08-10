const express = require("express");
const captainslogs = express.Router();
const captainslogsArray = require("../models/captainslogs.js");

//below we have the home route
// here we are also sending json not a sting
captainslogs.get("/", (req, res) => {
  res.json(captainslogsArray);
});

module.exports = captainslogs;