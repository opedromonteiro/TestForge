const { findToken } = require("../data/tokens");
const { findUserById,findUser, updateUserWithEquipment } = require("../data/users");
const { addLogsEntry } = require("../data/reqLog");
const { findEquipById } = require("../data/equips");


async function assignUserWithEquipment(equipId, token) {
    console.log("assignUserWithEquipment called");
    console.log("   token:", token);
    console.log("   equipId:", equipId);

    const tokenObj = await findToken(token);
    if (!tokenObj || !tokenObj.uid) {
        console.error("Invalid token or no UID found.");
        return false;
    }

    console.log("   userId:", tokenObj.uid);

    try {
        const updated = await updateUserWithEquipment(tokenObj.uid, equipId);
        if (!updated) {
            console.error("Failed to update user with equipment.");
            return false;
        }

        await addLogsEntry(tokenObj.uid, equipId, new Date());
        console.log("Equipment assigned to user successfully.");
        return true;
    } catch (err) {
        console.error("assignUserWithEquipment error:", err);
        return false;
    }
}


async function getUser(userName) {
    return await findUser(userName)
}

async function getUserEquips(username) {
    const user =  await findUser(username)
    const userEquips = []
    if(!user) {
        return false
    }
    for(let i = 0 ; i < user.equips.length; i++){
        const res = await findEquipById(user.equips[i])
        userEquips(res)
    }
    return userEquips
}

module.exports = { assignUserWithEquipment, getUser, getUserEquips};