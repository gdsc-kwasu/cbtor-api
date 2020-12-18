const ipRegex = require('ip-regex')
const sanitizeEmail = require('email-validator')
const crypto = require('crypto')
const Id = require('../Id')
const buildMakeUser = require('./users')
const buildMakeSource = require('./source')

function isValidIp(ip) {
  return ipRegex({exact: true}).test(ip)
}

function md5(text) {
  return crypto.createHash('md5').update(text, 'utf-8').digest('hex')
}

function clean(email) {
  return sanitizeEmail.validate(email)
}

const makeSource = buildMakeSource({isValidIp})
const makeUser = buildMakeUser({Id, clean, md5, makeSource})

module.exports = makeUser
