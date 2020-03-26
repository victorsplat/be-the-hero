const express = require('express')
const Router = express.Router()
const {
    create,
    index
} = require('../controllers/OngController')

Router.get('/ongs', index)
Router.post('/ongs', create)

module.exports = Router