const response = require('../../utils/make-response')

async function makeLogin({httpRequest, User}) {
  const check = User(httpRequest.body)

  const user = await User.findOne({email: check.email})
  if (!user) {
    return response(401, {
      message: 'User not found',
    })
  }

  const isPassword = await user.comparePassword(check.password)
  console.log(isPassword)

  if (!isPassword) {
    return response(401, {
      message: 'Wrong passwsssssssssrd',
    })
  }

  const token = await user.generateToken()

  console.log(token)

  if (!token) {
    return response(401, {
      message: 'An error occur',
    })
  }

  return response(200, {
    message: 'User login',
  })
}

module.exports = makeLogin
