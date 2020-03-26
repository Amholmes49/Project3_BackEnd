// models/User.js
const mongoose = require('../db/connection');

const TeamSchema = new mongoose.Schema({
  TeamName: String,
  Division: String,
  Home_Venue: {
      ref: "Venue",
      type: mongoose.Schema.Types.ObjectId
  },
  
  
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;