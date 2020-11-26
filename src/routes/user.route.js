const router = require('express').Router()
const {getUser} = require('../controller/users')

router.get('/user', async (req, res, next) => {
  try {
    const response = await getUser(req)

    res.status(response.status).json(response.body)
  } catch (err) {
    next(err)
  }
})

module.exports = router
