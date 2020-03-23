// models/User.js
const mongoose = require('../db/connection');

const PlayerSchema = new mongoose.Schema({
  name: String,
  team: String,
  number: Number,
  position: String,
  team_id: Number,
});

const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;