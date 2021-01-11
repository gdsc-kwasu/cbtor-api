const jwt = require('jsonwebtoken')

async function makeFindByToken(userSchema) {
  return await (userSchema.statics.findByToken = function (token, cb) {
    var user = this

    jwt.verify(token, 'secret', function (err, decode) {
      user.findOne({_id: decode, token: token}, function (err, user) {
        if (err) return cb(err)
        cb(null, user)
      })
    })
  })
}

module.exports = makeFindByToken
