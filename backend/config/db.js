const mongoose = require("mongoose");
const colors = require("colors");
require("dotenv").config();




const MONGO_URI = `mongodb+srv://${process.env.usernamess}:${process.env.password}@cluster0.v7s1x.mongodb.net/wpclone?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true,
    });
    

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

