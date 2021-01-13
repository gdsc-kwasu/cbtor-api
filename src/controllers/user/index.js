const makeAddUser = require('./add-user')
// const makeGenerateToken = require('./generate-token')
// const buildMakeHash = require('./hash')
const makeLogin = require('./user-login')
const makeLogout = require('./user-logout')

const {User} = require('../../model/User')

function addUser(httpRequest) {
  return makeAddUser({
    httpRequest,
    User,
  })
}

function login(httpRequest) {
  return makeLogin({
    httpRequest,
    User,
  })
}

function logout(httpRequest) {
  return makeLogout({
    httpRequest,
    User,
  })
}

module.exports = {addUser, login, logout}
