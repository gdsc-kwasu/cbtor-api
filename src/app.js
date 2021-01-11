const express = require('express')

const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const router = require('./routes/user')

app.use(router)

module.exports = app
