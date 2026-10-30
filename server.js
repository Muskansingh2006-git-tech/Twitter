const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

async function connectDB() {
    await client.connect();

    console.log("MongoDB connected");

    const db = client.db("spotify");
    const users = db.collection("users");

    console.log("Database ready");
}

connectDB();