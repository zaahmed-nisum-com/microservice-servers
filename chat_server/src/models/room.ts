'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roomSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

const Rooms = mongoose.model('user', roomSchema)

module.exports = Rooms