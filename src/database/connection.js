const mongoose = require('mongoose')

async function dbConnection(url) {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
}

module.exports = dbConnection
