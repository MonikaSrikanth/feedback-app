const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Feedback = require("./models/Feedbacks");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// POST feedback route
app.post("/api/feedback", async (req, res) => {
  const { name, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newFeedback = new Feedback({ name, message });
    await newFeedback.save();
    res.status(200).json({ message: "Feedback submitted successfully!" });
  } catch (err) {
    console.error("Error saving feedback:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
