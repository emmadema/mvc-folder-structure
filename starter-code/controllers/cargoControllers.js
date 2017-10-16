//need to make the db (datbase) connected to models where the database will be stored
var db = require('../models');

//this creates functions to be called in out routes

//used for the cargo GET
var cargoGet = function(req, res) {
	res.render('cargoNew'); 
};

//used for the cargo POST
var cargoPost = function(req, res){
	db.Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
		res.render('cargoShow', {cargo: cargo});
	});
};

//exporting two things 
//can only export one object butthese are now properties of that object
module.exports.cargoGet = cargoGet;
module.exports.cargoPost = cargoPost;