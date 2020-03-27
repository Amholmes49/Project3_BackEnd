// db/seed.js

const mongoose = require('./connection')
const Players = require('../models/MPlayer')
const Teams = require('../models/MTeam')


Players.remove({})
// Players.collection.insertMany([
// 	{ 
// 	"name": "Diesel", 
// 	"team": "Red Sox",
// 	"throws": "R",
// 	"bats": "R",
// 	"hat_color": "Green"
//  }, 
// 	{ 
// 	"name": "Schmitty",
// 	"email": "schmitty@schmit.com" 
// }
// ])
// .then(Players => console.log(Players))
// .catch(err => console.log(err))	


// Players.create({
// 	name: "Paul Ryan",
	
// })
// .then (paul => {Teams.create({
// 	TeamName: "Red Sox",
// 	Division: "Fenway", 
// 	Team_Roster: paul.id
// }) 
// })
Teams.remove({})
// Teams.collection.insertMany([
// 	{ 
// 	"Home_Venue": "Fenway", 
// 	"team": "Red Sox",
	
//  } 
// ])
// .then(Teams => console.log(Teams))
// .catch(err => console.log(err))	


// Venues.collection.insertMany([
// 	{ 
// 	"Home_Venue": "Fenway", 
// 	"team": "Red Sox",
	
//  } 
// ])
// .then(Venues => console.log(Venues))
// .catch(err => console.log(err))	
