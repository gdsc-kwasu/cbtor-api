// Build.
const makeGetUser = require('./get')

class UserModel {
  static get(id) {
    return {
      firstName: 'Niyi',
      lastName: 'Habeeb',
      id,
    }
  }
}
module.exports = {
  getUser: (httpRequest) =>
    makeGetUser({
      httpRequest,
      UserModel,
      throttle: () => false,
      canMakeRequest: () => true,
    }),
}
