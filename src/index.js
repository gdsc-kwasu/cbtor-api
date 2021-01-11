require('dotenv').config()
const http = require('http')
const dbConnection = require('./database/connection')

const app = require('./app')

const server = http.createServer(app)

const PORT = process.env.port

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`Application  started on ${PORT}`)
  })
}

dbConnection(process.env.DM_BASE_URL)
  .then(startServer)
  .catch(() => {
    console.error('Could not establish database')
    process.exit()
  })
