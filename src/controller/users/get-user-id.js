function makeGetUserId({userById}) {
  return async function getUserId(httpRequest) {
    const headers = {
      'Content-Type': 'application/json',
    }
    try {
      const postUsers = await userById({
        userId: httpRequest.params.id,
      })
      return {
        headers,
        statusCode: 200,
        body: postUsers,
      }
    } catch (e) {
      // TODO: Error logging
      console.log(e)
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      }
    }
  }
}

module.exports = makeGetUserId
