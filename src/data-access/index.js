const mongodb = require('mongodb')

const makeUsersDb = require('./user-db')

const MongoClient = mongodb.MongoClient

const url = 'mongodb://localhost:27017'
const dbName = 'tey'
const client = new MongoClient(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function makeDb() {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(dbName)
}

const usersDb = makeUsersDb({makeDb})
module.exports = makeDb
module.exports = usersDb
