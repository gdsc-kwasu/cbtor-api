const response = require('../utils/make-response')

async function buildMakeAuth({httpRequest, User}) {
  const token = httpRequest.cookies.w_auth || httpRequest.header.w_auth

  await User.findByToken(token, (err, user) => {
    if (err) throw err
    if (!user)
      return response(401, {
        isAuth: false,
        error: true,
      })

    httpRequest.token = token
    httpRequest.user = user
    next()
  })
}

module.exports = {buildMakeAuth}
