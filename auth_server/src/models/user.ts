'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  fullName: {
    type: String
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  userName: {
    type: String
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  isEmailValid: {
    type: Boolean,
    default: false
  },
  isPhoneNoValide: {
    type: Boolean,
    default: false
  },
  profile: {
    type: String
  },
  timeZone: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  lastLogin: {
    type: String,
    default: new Date()
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true
})

const Users = mongoose.model('user', userSchema)

module.exports = Users