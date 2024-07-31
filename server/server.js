import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// dot env config:
dotenv.config();

// Database connection:
connectDB();

// Rest object
const app = express();

// Middlewares:
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes:
app.get("/", (req, res) => {
    return res.status(200).send("<h1>Welcome to Server</h1>");
});

// Port:
const PORT = process.env.PORT || 5000;

// Listen:
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`.blue);
});

