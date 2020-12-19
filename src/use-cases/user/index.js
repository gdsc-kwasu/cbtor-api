const makeAddUser = require('./add-user')

const usersDb = require('../../data-access')

const addUser = makeAddUser({usersDb})

const userService = Object.freeze({
  addUser,
})

module.exports = userService
module.exports = addUser
