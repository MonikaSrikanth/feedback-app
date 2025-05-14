const mongoose = require("mongoose");
require('dotenv').config(); 
const uri = process.env.URI
const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully 🚀");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
