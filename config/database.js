const mongoose = require("mongoose");
const { MyDatabase } = require(".");

const ConnectDB = async () => {
    await mongoose.connect(MyDatabase);
    console.log("Database is connected successfully");
}

module.exports = ConnectDB;