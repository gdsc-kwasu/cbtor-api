const jwt = require('jsonwebtoken')
const moment = require('moment')

async function makeGenerateToken(userSchema) {
  userSchema.methods.generateToken = function () {
    var user = this
    var token = jwt.sign(user._id.toHexString(), 'secret')
    var oneHour = moment().add(1, 'hour').valueOf()

    user.tokenExp = oneHour
    user.token = token
    user.save(function (err, user) {
      if (err) return cb(err)
      null, user
    })
  }
}

module.exports = makeGenerateToken
