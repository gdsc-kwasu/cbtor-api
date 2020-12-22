const express = require('express')

const bodyParser = require('body-parser')

const dotenv = require('dotenv')

const {postUser} = require('./controller/users')

const makeCallback = require('./express-callback')

dotenv.config()

const app = express()
app.use(bodyParser.json())
// TODO: figure out DNT compliance.
app.use((_, res, next) => {
  res.set({Tk: '!'})
  next()
})
app.post('/users', makeCallback(postUser))

// listen for requests
app.listen(4000, () => {
  console.log('Server is listening on port 4000')
})
