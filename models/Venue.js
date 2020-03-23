// models/User.js
const mongoose = require('../db/connection');

const VenueSchema = new mongoose.Schema({
  Venue_Name: String,
  Venue_Address: String,
  Venue_State: String,
  Home_Team: String
});

const Venue = mongoose.model('Venue', VenueSchema);

module.exports = Venue;