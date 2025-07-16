const { findEquips, findEquips } = require("../data/equips");

async function getEquips() {
    return await findEquips()
}

async function getEquips(id) {
    return await findEquips(id)
}

module.exports = { getEquips, getEquips }