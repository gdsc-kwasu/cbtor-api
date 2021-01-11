const response = require('../../utils/make-response')

async function makeAddUser({httpRequest, User}) {
  const user = User(httpRequest.body)

  const exist = await User.findOne({email: user.email})

  if (exist)
    return response(401, {message: ` User with ${user.email} already exist`})

  if (!user.fullName) return response(401, {message: 'fullName is required'})

  if (!user.email) return response(401, {message: 'email is required'})

  if (!user.password) return response(401, {message: 'password is required'})

  user.save((err, doc) => {
    if (err) return response(401, {message: 'error while saving'})
    user.generateToken()
  })

  return response(200, {message: `${user.email}, successfully created`})
}

module.exports = makeAddUser
