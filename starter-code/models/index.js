//use to make sure index.js is pulling in 
console.log("index.js, checking in!");

//include mongoose
var mongoose = require('mongoose');

//used for mongo connection
//connect to mongo db and here is the location
mongoose.connect("mongodb://localhost/airport");

//need to export cargo.js
//also need to require cargo 
//pulling it in and exporting it back out
module.exports.Cargo = require('./cargo.js');