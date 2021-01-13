const bcrypt = require('bcrypt')

function makeComparePassword(userSchema) {
  userSchema.methods.comparePassword = function (password) {
    const user = this
    return bcrypt.compare(password, user.password)
  }
}

module.exports = makeComparePassword
