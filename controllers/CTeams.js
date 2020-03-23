// controllers/users.js
const express = require("express")
const router = express.Router()
const Teams = require('../models/MTeam')


// GET ALL USERS
router.get('/', (req, res) => {
    Teams.find().then(teams => res.json(teams))
  })	

// GET USER BY ID   
router.get('/:id', (req, res) => {
    Teams.findById(req.params.id).then(teams => res.json(teams))
  })

// CREATE A USER
router.post('/', (req, res) => {
    Teams.create(req.body).then(newTeam => res.json(newTeam))
  })

// // UPDATE A USER    
router.put('/:id', (req, res) => {
    Teams.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedteams => res.json(updatedteams))
  })

// DELETE A USER
router.delete('/:id', (req, res) => {
    Teams.findByIdAndDelete(req.params.id).then(deletedTeam => res.json(deletedTeam))
  })

module.exports = router