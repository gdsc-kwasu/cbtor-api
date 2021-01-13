const mongoose = require('mongoose')
const buildMakeHash = require('../controllers/user/hash')
const makeGenerateToken = require('../controllers/user/generate-token')
const makeComparePassword = require('../controllers/user/compare-password')
// const makeFindByToken = require('../controllers/user/find-by-token')

const userSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, 'Enter FirstName'],
    },
    email: {
      type: String,
      required: [true, 'Email is required, and must be unique'],
      trim: true,
      unique: 1,
    },
    password: {
      type: String,
      required: [
        true,
        'Password is required, and must be more than 7 characters',
      ],
      minglength: 6,
    },
    role: {
      type: String,
      default: 'User',
    },
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },
  },
  {timestamp: true}
)

buildMakeHash(userSchema)
makeGenerateToken(userSchema)
makeComparePassword(userSchema)

const User = mongoose.model('User', userSchema)
module.exports = {User}
