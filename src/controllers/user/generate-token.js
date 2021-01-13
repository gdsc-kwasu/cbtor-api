const jwt = require('jsonwebtoken')
const moment = require('moment')

function makeGenerateToken(userSchema) {
  userSchema.methods.generateToken = function () {
    const user = this
    const token = jwt.sign(user._id.toHexString(), 'secret')
    const oneHour = moment().add(1, 'hour').valueOf()

    user.tokenExp = oneHour
    user.token = token
    return user.save()
  }
}

module.exports = makeGenerateToken
