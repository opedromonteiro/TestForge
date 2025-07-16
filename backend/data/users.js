const { ObjectId } = require("mongodb")
const { GetCollection } =  require("./mongodb")

const collName = "Users"

async function insertUser(user) {
    const col = await GetCollection(collName)
    const result = await col.insertOne(user)
    return result.insertedId
}

async function findUser(userName) {
    const col = await GetCollection(collName)
    const result = await col.findOne({username : userName})
    return result
}

async function findUserById(userId) {
    const newId = new ObjectId(String(userId))
    const col = await GetCollection(collName)
    const result = await col.findOne({_id : newId})
    return result
}

async function updateUserWithEquipment(userId, equips) {
    const col = await GetCollection(collName);
    const newId = new ObjectId(String(userId));
    const result = await col.updateOne(
        { _id: newId },
        { $push: { equips: equips } }
    );
    return result.modifiedCount > 0;
}
async function removeUserEquipment(userId, equipId) {
    const col = await GetCollection(collName);
    const newUserId = new ObjectId(String(userId));
    const result = await col.updateOne(
        { _id: newUserId },
        { $pull: { equips: equipId } }
    );
    return result.modifiedCount > 0;
}

module.exports = {insertUser, findUser, updateUserWithEquipment, findUserById, removeUserEquipment};