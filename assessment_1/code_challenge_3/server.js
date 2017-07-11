"use strict";

const express     = require("express");
const app         = express();
const fs          = require("fs");

// Helper function to read our data.json
function readFile(filename) {
    return new Promise((resolve, reject) => {
      fs.readFile(filename, "utf8", (err, data) => {
        if(err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    });
  }


app.set("port", (process.env.PORT || 3000));

// if the request has the "/data" ext we do this
// read file and display to user
app.get('/data', function(req, res) {
  readFile("data.json")
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  })
});

// use wildcard ext to pick up every other possible route
app.get('/*', function(req, res, next) {
  res.send("Hello World!");
});

// Listen, also print a message so we know which port we're looking at
app.listen(app.get("port"), function() {
  console.log('Node app is running on port', app.get('port'));
});
