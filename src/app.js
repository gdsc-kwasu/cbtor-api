const express = require('express')
const app = express()
const route = require('./routes/user.route')

app.use('/', route)

app.listen(3300, () => {
  console.log(`Listening on port ${3300}`)
})
