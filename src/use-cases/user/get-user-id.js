function getUserById({usersDb}) {
  return async function userById({userId}) {
    if (!userId) {
      throw new Error('You must supply a user id.')
    }
    const result = await usersDb.findById({_id: userId})
    return result
  }
}

module.exports = getUserById
