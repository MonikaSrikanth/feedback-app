const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
