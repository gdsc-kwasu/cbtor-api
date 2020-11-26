async function makeGetUser({httpRequest, UserModel, throttle, canMakeRequest}) {
  const user = await UserModel.get(httpRequest.query.id)
  if (!throttle(user) && !canMakeRequest()) {
    return {
      status: 402,
      body: {
        message: 'Payment is required',
      },
    }
  }

  return {
    status: 200,
    body: {
      data: {
        user,
      },
    },
  }
}

module.exports = makeGetUser
