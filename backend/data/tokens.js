const { ObjectId } = require("mongodb");
const { GetCollection } = require("./mongodb");

const COLLECTION = "tokens";

async function insertToken(userId) {
    const col = await GetCollection(COLLECTION)

    const res = await col.insertOne({uid: userId})

    return res.insertedId
}

async function findToken(token) {
    // console.log(token)
    // const new_token = new ObjectId(token)

    const col = await GetCollection(COLLECTION)

    const res = await col.find().toArray()

    const sim = res.find((e) => e._id.toString() === token)
    console.log(sim)
    return sim
}

async function deleteToken(token) {
    const new_token = new ObjectId(String(token))

    const col = await GetCollection(COLLECTION)

    const res = await col.deleteOne({_id: new_token})

    return
}

module.exports = {insertToken, findToken, deleteToken}