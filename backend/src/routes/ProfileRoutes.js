const express = require('express')
const Router = express.Router()
const {
    index
} = require('../controllers/ProfileController')

Router.get('/profile', index)

module.exports = Router