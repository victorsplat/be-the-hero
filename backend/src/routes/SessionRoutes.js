const express = require('express')
const Router = express.Router()
const {
    create
} = require('../controllers/SessionController')

Router.post('/sessions', create)

module.exports = Router