const express = require('express')
const app = express()
const cors = require('cors')

const Router = require('./routes/index')

app.use(cors())
app.use(express.json())

app.use(Router)

app.listen(3003, () => {
    console.log('Working')
})