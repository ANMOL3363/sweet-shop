
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./db");

const authRoutes = require("./routes/auth.routes");
const sweetRoutes = require("./routes/sweet.routes");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/sweets", sweetRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Sweet Shop Backend API running 🚀");
});

module.exports = app;

