const router = require('express').Router()
const interceptor = require('../utils/interceptor')

const {addUser} = require('../controllers/user')
const {makeAuth} = require('../middleware')

router.post('/', interceptor(addUser))
router.get('/auth', interceptor(makeAuth))

module.exports = router
