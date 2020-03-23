// controllers/users.js
const express = require("express")
const router = express.Router()
const Players = require('../models/MPlayer')


// GET ALL USERS
router.get('/', (req, res) => {
    Players.find().then(Players => res.json(Players))
  })	

// GET USER BY ID   
router.get('/:id', (req, res) => {
    Players.findById(req.params.id).then(Players => res.json(Players))
  })

// CREATE A USER
router.post('/', (req, res) => {
    Players.create(req.body).then(newPlayer => res.json(newPlayer))
  })

// UPDATE A USER    
router.put('/:id', (req, res) => {
    Players.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedplayer => res.json(updatedplayer))
  })

// // DELETE A USER
router.delete('/:id', (req, res) => {
    Players.findByIdAndDelete(req.params.id).then(deletedPlayer => res.json(deletedPlayer))
  })

module.exports = router