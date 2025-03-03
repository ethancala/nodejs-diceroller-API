const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

//  CORS Middleware 
app.use(cors({
    origin: "https://agreeable-river-09927251e.4.azurestaticapps.net/",
}));

//  API Route – Returns a Random Dice Roll (1-6)
app.get("/api/roll-dice", (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll: diceRoll });
});

// Wake-Up Route (Requirement 2)
app.get("/wake-up", (req, res) => {
    res.send("API is awake!");
});

//  Serve `index.html` as a test page (Requirement 1)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
