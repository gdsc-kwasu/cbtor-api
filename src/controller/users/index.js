const addUser = require('../../use-cases/user')

const makePostUser = require('./post-user')

const postUser = makePostUser({addUser})

const userController = Object.freeze({
  postUser,
})

module.exports = userController
module.exports = {postUser}
