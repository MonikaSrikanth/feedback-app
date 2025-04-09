const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://monikasrikanth03:Monika03@cluster1.njwzmex.mongodb.net/feedback-app?retryWrites=true&w=majority&appName=Cluster1");
    console.log("MongoDB connected successfully 🚀");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
