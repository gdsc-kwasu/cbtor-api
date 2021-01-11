const bcrypt = require('bcrypt')

async function makeComparePassword(userSchema) {
  return await (userSchema.methods.comparePassword = function (
    plainPassword,
    cb
  ) {
    bcrypt.compare(plainPassword, this.password, function (err, isMatch) {
      if (err) return cb(err)
      cb(null, isMatch)
    })
  })
}

module.exports = makeComparePassword
