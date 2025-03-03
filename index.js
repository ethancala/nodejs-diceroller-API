const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow all origins except one (for CORS failure demo)
const corsOptions = {
    origin: function (origin, callback) {
        if (origin === "https://blocked-origin.com") {
            callback(new Error("Not allowed by CORS"));
        } else {
            callback(null, true);
        }
    },
};

app.use(express.json());
app.use(cors(corsOptions));

// Dice Roller API (Server-Side Random Number Generation)
app.get("/roll-dice", (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll: diceRoll });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
