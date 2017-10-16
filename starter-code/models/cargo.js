console.log('cargo.js, is checking in');

//you need to rquire mongoose on every individual partial
var mongoose = require('mongoose');

//this will now create the schema and the model

//this created the schema
var Schema = mongoose.Schema;
var CargoSchema = new Schema({
    title: String,
    description: String
});

//this created the model
var Cargo = mongoose.model('Cargo', CargoSchema);

//export the cargo shema and model
module.exports = Cargo;