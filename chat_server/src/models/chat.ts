'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

const Chats = mongoose.model('user', chatSchema)

module.exports = Chats