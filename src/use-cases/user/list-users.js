function makeListUsers({usersDb}) {
  return async function listUsers() {
    const users = await usersDb.findAll()
    console.log(users)
    return users
  }
}
module.exports = makeListUsers
