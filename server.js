const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); // if using Node < 18

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// GET /api/quote
app.get("/api/quote", async (req, res) => {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching quote:", error);
    res.status(500).json({ error: "Failed to fetch quote" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
