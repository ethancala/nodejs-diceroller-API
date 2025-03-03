const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS (Temporarily allow all origins for debugging)
const corsOptions = {
    origin: "*",
    methods: "GET,POST",
    allowedHeaders: "Content-Type",
};
app.use(cors(corsOptions));
app.use(express.json());

// Serve index.html for API testing
app.use(express.static(path.join(__dirname)));

// API to generate a dice roll
app.get("/api/roll-dice", (req, res) => {
    console.log("Dice roll API called");
    const roll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll });
});

// Wake-up endpoint
app.get("/wake-up", (req, res) => {
    console.log("Wake-up API called");
    res.send("Server is awake!");
});

// Start the server (bind to 0.0.0.0 for Azure compatibility)
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
