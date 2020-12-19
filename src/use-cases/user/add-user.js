const makeUser = require('../../users')

function makeAddUser({usersDb}) {
  return function addUser(userInfo) {
    const user = makeUser(userInfo)
    console.log(userInfo)
    return usersDb.insert({
      name: user.name,
      email: user.email,
      password: user.password,
      source: user.source,
      token: user.token,
      createdOn: user.createdOn,
      hash: user.hash,
      id: user.id,
      role: user.role,
      modifiedOn: user.modifiedOn,
    })
  }
}

module.exports = makeAddUser
