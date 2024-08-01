import express from "express";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

// Import routes:
import UserRoutes from "./routes/UserRoutes.js";

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
app.use(cookieParser());

// Routes:
app.use("/api/user", UserRoutes);

app.get("/", (req, res) => {
    return res.status(200).send("<h1>Welcome to Server</h1>");
});

// Port:
const PORT = process.env.PORT || 5000;

// Listen:
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.NODE_ENV} mode -> port ${PORT}`.blue);
});

