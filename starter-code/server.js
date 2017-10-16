//everything off here is the starting point for the whole app

//Set up Express
//need to start the server
var express = require('express');
var app = express();

//Set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

//Set up EJS -- look at those views
//to set up the views view is inside the views folder 
//need to do dirname + a string with the path
app.set('views', __dirname + "/views");
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//set up routes to be used
//this takes in where it is and what it is
//var routges is equal to the rrequirement of directory name config/routes
var routes = require(__dirname + '/config/routes.js');

//use it where = /
//what is routes
//use at the route my routes
app.use('/', routes);

//Start server
app.listen(3000, function() {
	console.log("Listening at http://localhost:3000");
});