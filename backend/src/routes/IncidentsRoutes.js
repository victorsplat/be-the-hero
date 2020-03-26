const express = require('express')
const Router = express.Router()
const {
    index,
    create,
    Delete
} = require('../controllers/IncidentController')

Router.get('/incidents', index)
Router.post('/incidents', create)
Router.delete('/incidents/:id', Delete)

module.exports = Router