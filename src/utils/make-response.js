function makeResponseBody(code = 200, body = {}, header = []) {
  return {
    code,
    body,
    header,
  }
}

module.exports = makeResponseBody
