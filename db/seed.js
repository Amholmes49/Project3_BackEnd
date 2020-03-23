// db/seed.js

const mongoose = require('./connection')
const Players = require('../models/Players')

Players.remove({})
Players.collection.insertMany([
	{ 
	"name": "Diesel", 
	"email": "diesel@dog.com"
 }, 
	{ "name": "Schmitty",	"email": "schmitty@schmit.com" }
])
.then(users => console.log(Players))
.catch(err => console.log(err))	