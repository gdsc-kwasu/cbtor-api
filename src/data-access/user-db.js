const Id = require('../Id')

function makeUsersDb({makeDb}) {
  return Object.freeze({
    findAll,
    findByEmail,
    findById,
    insert,
    remove,
    update,
  })
  async function findAll() {
    const db = await makeDb()
    const result = await db.collection('users').find()
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const {...info} = found
    return {...info}
  }
  async function findById({id: _id}) {
    const db = await makeDb()
    const result = await db.collection('users').find({_id})
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const {_id: id, ...info} = found[0]
    return {id, ...info}
  }

  async function insert({id: _id = Id.makeId(), ...userInfo}) {
    console.log(userInfo)
    const db = await makeDb()
    const result = await db.collection('users').insertOne({_id, ...userInfo})
    const {_id: id, ...insertedInfo} = result.ops[0]
    console.log(id)
    return {id, ...insertedInfo}
  }

  async function update({id: _id, ...userInfo}) {
    const db = await makeDb()
    const result = await db
      .collection('users')
      .updateOne({_id}, {$set: {...userInfo}})
    return result.modifiedCount > 0 ? {id: _id, ...userInfo} : null
  }
  async function remove({id: _id}) {
    const db = await makeDb()
    const result = await db.collection('users').deleteOne({_id})
    return result.deletedCount
  }
  async function findByEmail(user) {
    const db = await makeDb()
    const result = await db.collection('users').find({email: user.email})
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const {_id: id, ...insertedInfo} = found[0]
    return {id, ...insertedInfo}
  }
}

module.exports = makeUsersDb
