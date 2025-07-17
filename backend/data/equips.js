const { ObjectId } = require("mongodb")
const { GetCollection } =  require("./mongodb")

const collName = "equips"

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
    console.log(" Filters received:", filters);
    
    const col = await GetCollection(collName);

    const query = {};

    // Match status exactly
    if (filters.status) {
        query.status = filters.status;
    }

    // Partial match for OS (case-insensitive)
    if (filters.os) {
        query.os = { $regex: filters.os, $options: "i" };
    }

    // Partial match for tipo (case-insensitive)
    if (filters.tipo) {
        query.tipo = { $regex: filters.tipo, $options: "i" };
    }

    console.log("Running query:", query);

    const result = await col.find(query).toArray();
    console.log(`Found ${result.length} equipments matching filters`);
    return result;
}

module.exports = { findEquips, findEquipById, findEquipFilters };