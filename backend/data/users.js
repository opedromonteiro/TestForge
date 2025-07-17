const { ObjectId } = require("mongodb")
const { GetCollection } =  require("./mongodb")

const collName = "users"

async function findUser(userName) {
    console.log("🔍 Searching for user:", userName);

    if (!userName || typeof userName !== "string") {
        console.error(" Invalid username provided:", userName);
        return null;
    }

    const col = await GetCollection(collName);
    const result = await col.findOne({ username: userName });

    if (result) {
        console.log(" User found:", result.username || result.email);
    } else {
        console.warn(" No user found for username:", userName);
    }

    return result;
}

async function findUserById(userId) {
    // const newId = new ObjectId(String(userId))
    const col = await GetCollection(collName)
    const result = await col.find().toArray()
    console.log(userId)
    console.log(result)
    const sim = result.find((e) => e._id.toString() === userId.toString())
    console.log(sim)
    return sim
}

async function updateUserWithEquipment(userId, equipId) {
    const usersCol = await GetCollection("users");    // "users" collection
    const equipsCol = await GetCollection("equips");  // "equips" collection

    const newUserId = new ObjectId(String(userId));
    const newEquipId = new ObjectId(String(equipId));

    console.log("Adding equip:", newEquipId, "to user:", newUserId);

    // Add equipment ID to user's equips array
    const userUpdateResult = await usersCol.updateOne(
        { _id: newUserId },
        { $push: { equips: newEquipId } }
        // Or safer to avoid duplicates:
        // { $addToSet: { equips: newEquipId } }
    );

    console.log("User update result:", userUpdateResult);

    if (userUpdateResult.matchedCount === 0) {
        throw new Error(`User with ID ${userId} not found`);
    }

    if (userUpdateResult.modifiedCount === 0) {
        console.warn(`User ${userId} found but equips array was not modified (equipId may already exist).`);
    }

    // Update equipment status to "ocupado"
    const equipUpdateResult = await equipsCol.updateOne(
        { _id: newEquipId },
        { $set: { status: "ocupado" } }
    );

    console.log("Equip update result:", equipUpdateResult);

    if (equipUpdateResult.matchedCount === 0) {
        throw new Error(`Equipment with ID ${equipId} not found`);
    }

    if (equipUpdateResult.modifiedCount === 0) {
        console.warn(`Equipment ${equipId} found but status was already "ocupado".`);
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

module.exports = {findUser, updateUserWithEquipment, findUserById, removeUserEquipment};