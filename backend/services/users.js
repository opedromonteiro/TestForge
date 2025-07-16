const { findToken } = require("../data/tokens");
const { findUserById, updateUserWithEquipment } = require("../data/users");
const { addHistoryEntry } = require("../data/history");


async function updateUserWithEquipment(equips, token) {
    const tokenObj = await findToken(token);
    if (!tokenObj || !tokenObj.uid) return false;

    const result = await updateUserWithEquipment(tokenObj.uid, equips);

    if (result) {
        await addHistoryEntry(tokenObj.uid, equips.equip_id, equips.timestamp);
    }
    
    return result;
}

module.exports = { updateUserWithEquipment };