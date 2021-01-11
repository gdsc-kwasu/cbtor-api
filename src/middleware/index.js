const {buildMakeAuth} = require('./auth')
const {User} = require('../model/User')

function makeAuth(httpRequest) {
  return buildMakeAuth({
    httpRequest,
    User,
  })
}

module.exports = {makeAuth}
