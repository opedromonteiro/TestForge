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

async function updateUserWithEquipment(userId, equipId) {
    const usersCol = await GetCollection(collName);      // "users" collection
    const equipsCol = await GetCollection("equips");     // "equips" collection

    const newUserId = new ObjectId(String(userId));
    const newEquipId = new ObjectId(String(equipId));

    const userUpdateResult = await usersCol.updateOne(
        { _id: newUserId },
        { $push: { equips: newEquipId } }
    );

    if (userUpdateResult.modifiedCount === 0) {
        throw new Error("Failed to add equipment to user");
    }

    const equipUpdateResult = await equipsCol.updateOne(
        { _id: newEquipId },
        { $set: { status: "ocupado" } }
    );

    if (equipUpdateResult.modifiedCount === 0) {
        throw new Error("Failed to update equipment status");
    }

    return true;
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