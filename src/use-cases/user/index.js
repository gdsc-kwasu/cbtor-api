const makeAddUser = require('./add-user')
const makeListUsers = require('./list-users')
const getUserById = require('./get-user-id')

const usersDb = require('../../data-access')

const addUser = makeAddUser({usersDb})
const listUsers = makeListUsers({usersDb})
const userById = getUserById({usersDb})

const userService = Object.freeze({
  addUser,
  listUsers,
  userById,
})

module.exports = userService
module.exports = {addUser, listUsers, userById}
