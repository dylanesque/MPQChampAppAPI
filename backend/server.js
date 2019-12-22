const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Connects to database
connectDB();

// Initialize middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("This is working"));

// Routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
