const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS (Block a specific origin to demonstrate failure)
const corsOptions = {
    origin: function (origin, callback) {
        if (origin === "https://blocked-origin.com") {
            callback(new Error("CORS Error: This origin is blocked"));
        } else {
            callback(null, true);
        }
    },
};

app.use(express.json());
app.use(cors(corsOptions));

// Serve index.html for API testing
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// API endpoint to roll dice
app.get("/api/roll-dice", (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
