// models/User.js
const mongoose = require('../db/connection');

const TeamSchema = new mongoose.Schema({
  TeamName: String,
  Division: String,
 
});

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;