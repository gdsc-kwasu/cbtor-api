const bcrypt = require('bcrypt')
const saltRounds = 10

async function buildMakeHash(userSchema) {
  return await userSchema.pre('save', function (next) {
    var user = this

    if (user.isModified('password')) {
      // console.log('password changed')
      bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, function (err, hash) {
          if (err) return next(err)
          user.password = hash
          next()
        })
      })
    } else {
      next()
    }
  })
}

module.exports = buildMakeHash
