const { insertToken, findToken, deleteToken } = require("../data/tokens");

async function createToken(user){
    if(user && user !== null) {
        return await insertToken(user._id)
    }
    return null
}

async function getToken(id){
    const res = await findToken(id)
    if (res === undefined || res == null) {
        return false
    }
    return res
}

async function  verifyToken(id) {
    const res = await findToken(id)
    if (res === undefined || res == null) {
        return false
    }
    return true
}

async function removeToken(id) {
    await deleteToken(id)
}

module.exports = {createToken, verifyToken, removeToken, getToken}