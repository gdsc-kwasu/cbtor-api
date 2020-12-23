const {addUser, listUsers, userById} = require('../../use-cases/user')

const makePostUser = require('./post-user')
const makeGetUsers = require('./get-user')
const makeGetUserId = require('./get-user-id')

const postUser = makePostUser({addUser})
const getUser = makeGetUsers({listUsers})
const getUserId = makeGetUserId({userById})

const userController = Object.freeze({
  postUser,
  getUser,
  getUserId,
})

module.exports = userController
module.exports = {postUser, getUser, getUserId}
