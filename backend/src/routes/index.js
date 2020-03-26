const express = require('express')
const OngRoutes = require('./OngRoutes')
const IncidentRoutes = require('./IncidentsRoutes')
const ProfileRoutes = require('./ProfileRoutes')
const SessionRoutes = require('./SessionRoutes')
const Router = express.Router()

Router.use(OngRoutes)
Router.use(IncidentRoutes)
Router.use(ProfileRoutes)
Router.use(SessionRoutes)



module.exports = Router