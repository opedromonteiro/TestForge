const { findEquips, findEquipById } = require("../data/equips");

async function getEquips() {
    return await findEquips()
}

async function getEquipById(id) {
    return await findEquipById(id)
}

async function getEquipFilters(filters) {
    return await findEquipFilters(filters = {})
}

module.exports = { getEquips, getEquipById, getEquipFilters }