// Get user info. from user
// Inject database interaction from data-access
// interact user info. with the database injected
const makeUser = require('../../users')

function makeAddUser({usersDb}) {
  return async function addUser(userInfo) {
    const user = makeUser(userInfo)
    const exists = await usersDb.findByEmail({email: user.getEmail()})
    if (exists) {
      return {message: 'user exist', exists}
    }
    const userSource = user.getSource()
    return usersDb.insert({
      name: user.getName(),
      email: user.getEmail(),
      token: user.getToken(),
      createdOn: user.getCreatedOn(),
      hash: user.getHash(),
      id: user.getId(),
      role: user.getRole(),
      modifiedOn: user.getModifiedOn(),
      source: {
        ip: userSource.getIp(),
        browser: userSource.getBrowser(),
        referer: userSource.getReferrer(),
      },
    })
  }
}

module.exports = makeAddUser
