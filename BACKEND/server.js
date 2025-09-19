const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ CORS Fix: Allow requests from frontend
app.use(cors({
  origin: "http://localhost:5173", // Your React frontend URL (Vite default port is 5173)
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI ,
    {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
  )
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err.message));

// ✅ Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend connected!" });
});

// ✅ Register Route
app.post("/api/users/register", (req, res) => {
  console.log(req.body); // See data in terminal
  res.status(201).json({ message: "User registered successfully!" });
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
