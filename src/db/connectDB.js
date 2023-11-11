const mongoose = require("mongoose");
const DB_NAME = require("../constants");

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
    console.log(`Database is connected on host: ${connection.connection.host}`);
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};


module.exports = connectDB;