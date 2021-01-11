const makeAddUser = require('./add-user')
const makeGenerateToken = require('./generate-token')
const buildMakeHash = require('./hash')

const {User} = require('../../model/User')

function addUser(httpRequest) {
  return makeAddUser({
    httpRequest,
    User,
  })
}

function makeHash(userSchema) {
  return buildMakeHash(userSchema)
}

function token(userSchema) {
  return makeGenerateToken({userSchema})
}

module.exports = {addUser, makeHash, token}
