const { ObjectId } = require("mongodb")
const { GetCollection } =  require("./mongodb")

const collName = "Equips"

async function  findEquips() {
    const col = await GetCollection(collName)
    const result = await col.find().toArray()
    return result
}

async function findEquipById(id) {
    const new_id = new ObjectId(id)
    const col = await GetCollection(collName)
    const result = await col.findOne({_id: new_id})
    return result
}

module.exports = {findEquips, findEquipById}