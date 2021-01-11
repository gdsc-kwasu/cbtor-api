function interceptor(controllerFn) {
  return async (req, res, next) => {
    try {
      const httpReponse = await controllerFn(req)
      res.status(httpReponse.code).json(httpReponse.body)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = interceptor
