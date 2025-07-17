const { findToken } = require("../data/tokens");
const { findUserById,findUser, updateUserWithEquipment } = require("../data/users");
const { addLogsEntry } = require("../data/reqLog");


async function assignUserWithEquipment(equips, token) {
    const tokenObj = await findToken(token);
    if (!tokenObj || !tokenObj.uid) return false;

    const result = await updateUserWithEquipment(tokenObj.uid, equips);

    if (result) {
        await addLogsEntry(tokenObj.uid, equips.equip_id, equips.timestamp);
    }

    return result;
}

async function getUser(userName) {
    return await findUser(userName)
}

module.exports = { assignUserWithEquipment, getUser};