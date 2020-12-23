// take user information and validate
function buildMakeUser({Id, md5, clean, makeSource}) {
  return function makeUser({
    name,
    email,
    password,
    source,
    token,
    role,
    createdOn = Date.now(),
    id = Id.makeId(),
    modifiedOn = Date.now(),
  } = {}) {
    // validate user

    if (!name) {
      throw new Error('User fullname name is required.')
    }
    if (name.length < 6) {
      throw new Error('User first name must be longer than 2 characters.')
    }
    if (!email) {
      throw new Error('email is required.')
    }
    if (!clean(email)) {
      throw new Error('Email not valid')
    }
    if (!role) {
      throw new Error('role is required.')
    }
    if (!source) {
      throw new Error('User must have a source.')
    }
    if (!password) {
      throw new Error('Password is required')
    }
    if (password.length < 8) {
      throw new Error('password length must be more than 7 character')
    }

    const validSource = makeSource(source)

    const hash = md5(password)

    // return value in the function
    return Object.freeze({
      getName: () => name,
      getToken: () => token,
      getEmail: () => email,
      getCreatedOn: () => createdOn,
      getHash: () => hash,
      getId: () => id,
      getRole: () => role,
      getModifiedOn: () => modifiedOn,
      getSource: () => validSource,
    })
  }
}

module.exports = buildMakeUser
