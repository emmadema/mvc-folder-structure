//need to rquire express again
var express = require('express');

//need to route info from seprate file into app.js
//router has a method called route
//at the end you can just export router instead of exporting app mulitple times
//can have many routers and only use one app
//change app.get to router.get because app would be undefined
var router = express.Router();

//require the cargo controllers
var cargoControllers = require('../controllers/cargoControllers');

//route
//cargo = location new=action
//need to use dot notation because we used it in module.exports
router.get('/cargo/new', cargoControllers.cargoGet);

//Add new cargo
//route
router.post('/cargo', cargoControllers.cargoPost);
//controllers

//export the varibale router declared at the top
module.exports = router;