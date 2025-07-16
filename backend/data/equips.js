const { ObjectId } = require("mongodb")
const { GetCollection } =  require("./mongodb")

const collName = "Equips"

async function  findEquips() {
    const col = await GetCollection(collName)
    const result = await col.find().toArray()
    return result
}

async function findEquipById(id) {
    const new_id = new ObjectId(String(id))
    const col = await GetCollection(collName)
    const result = await col.findOne({_id: new_id})
    return result
}
async function findEquipFilters(filters = {}) {
    const col = await GetCollection(collName);
    const query = {};

    if (filters.status) query.status = filters.status;
    if (filters.OS) query.OS = filters.OS;
    if (filters.tipo) query.tipo = filters.tipo;

    return col.find(query).toArray();
}

module.exports = { findEquips, findEquipById, findEquipFilters };