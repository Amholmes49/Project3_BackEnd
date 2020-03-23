// controllers/users.js
const express = require("express")
const router = express.Router()
const Venue = require('../models/MVenue')


// GET ALL USERS
router.get('/', (req, res) => {
    Venue.find().then(venues => res.json(venues))
  })	

// GET USER BY ID   
router.get('/:id', (req, res) => {
    Venue.findById(req.params.id).then(venue => res.json(venue))
  })

// CREATE A USER
router.post('/', (req, res) => {
    Venue.create(req.body).then(newVenue => res.json(newVenue))
  })

// UPDATE A USER    
router.put('/:id', (req, res) => {
    Venue.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedvenue => res.json(updatedvenue))
  })

// // DELETE A USER
router.delete('/:id', (req, res) => {
    Venue.findByIdAndDelete(req.params.id).then(deletedvenue => res.json(deletedvenue))
 })

module.exports = router