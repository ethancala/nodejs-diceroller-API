const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS (Block specific origin for failure demonstration)
// const corsOptions = {
    
//     origin: function (origin, callback) {

//         //allowed origins
//         const allowedOrigins = [
//             "http://localhost:5500",  // Local testing
//             "http://127.0.0.1:5500",  // Alternative local testing
//             "https://agreeable-river-09927251e.4.azurestaticapps.net/"
//         ];

//         if (origin === "https://blocked-origin.com") {
//             callback(new Error("CORS Error: This origin is blocked"));
//         } else {
//             callback(null, true);
//         }
//     },
// };
//app.use(cors(corsOptions));
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
