const router = require('express').Router()
const interceptor = require('../utils/interceptor')

const {addUser, login, logout} = require('../controllers/user')
// const {makeAuth} = require('../middleware')

router.post('/', interceptor(addUser))
router.post('/login', interceptor(login))
router.post('/logout', interceptor(logout))

// router.get('/auth', interceptor(makeAuth))

module.exports = router
