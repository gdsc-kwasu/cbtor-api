const response = require('../../utils/make-response')

async function makeLogout({httpRequest, User}) {
  const check = User(httpRequest.body)

  const user = await User.findOneAndUpdate(
    {email: check.email},
    {token: '', tokenExp: ''}
  )

  if (!user) {
    return response(401, {
      message: 'An error occur',
    })
  }
  return response(200, {
    message: 'User successfully logout',
  })
}

module.exports = makeLogout
