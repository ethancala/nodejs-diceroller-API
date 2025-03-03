const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS (Block specific origin for failure demonstration)
const corsOptions = {
    
    origin: function (origin, callback) {

        //allowed origins
        const allowedOrigins = [
            "http://localhost:5500",  // Local testing
            "http://127.0.0.1:5500",  // Alternative local testing
            "https://your-dice-roller-app.azurestaticapps.net"  // Deployed Azure site
        ];

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

// API to generate a dice roll
app.get("/api/roll-dice", (req, res) => {
    const roll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
