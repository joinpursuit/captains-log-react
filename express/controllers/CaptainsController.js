const express = require("express");
const captainslogs = express.Router();
const captainslogsArray = require("../models/captainslogs.js");
const { validateURL } = require("../models/validations.js");

//below we have the home route
// here we are also sending json not a sting
captainslogs.get("/", (req, res) => {
  res.json(captainslogsArray);
});

// SHOW ROUTE: show one from the index 
captainslogs.get("/:arrayIndex", (req, res) => {
    if (captainslogsArray[req.params.arrayIndex]) {
      res.json(captainslogArray[req.params.arrayIndex]);
    } else {
      res.status(404).json({ error: "Not found" });
    }
  });
  // CREATE ROUTE: takes data from the request body and pushes it into our arrayIndex at the end
captainslogs.post("/", validateURL,(req, res) => {
    captainslogsArray.push(req.body);
    res.json(captainslogArray[captainslogArray.length - 1]);
  });

  const validateURL = (req, res, next) => {
    console.log(
      "This function checks the validity of the URL entered by the user"
    );
  };
  

module.exports = captainslogs;