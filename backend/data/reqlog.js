const { GetCollection } = require("./mongodb");

const collName = "reqlog";

async function addLogsEntry(userId, equipId, timestamp) {
    const col = await GetCollection(collName);
    const entry = {
        userId,
        equipId,
        timestamp
    };
    await col.insertOne(entry);
    return true;
}

module.exports = { addLogsEntry };