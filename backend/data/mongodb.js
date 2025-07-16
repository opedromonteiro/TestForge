require("dotenv").config();
const { MongoClient } = require("mongodb");

const url = process.env.MONGOURL;
const defaultDbName = process.env.DB_NAME;

if (!url) {
    throw new Error(" MONGOURL not set in .env");
}
if (!defaultDbName) {
    throw new Error(" DB_NAME not set in .env");
}
let client;

async function GetMongoClient() {
    if (!client) {
        try {
            client = new MongoClient(url);
            await client.connect();
            console.log(" MongoDB connected");
        } catch (err) {
            console.error(" MongoDB connection error:", err);
            process.exit(1);
        }
    }
    return client;
}

async function GetCollection(collectionName) {
    const cli = await GetMongoClient();
    const db = cli.db(defaultDbName);
    return db.collection(collectionName);
}

async function CloseConnection() {
    if (client) {
        await client.close();
        console.log(" MongoDB connection closed");
        client = undefined;
    }
}

module.exports = { GetCollection, CloseConnection };
