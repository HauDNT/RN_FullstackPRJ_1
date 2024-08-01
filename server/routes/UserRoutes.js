import express from "express";
import { UserController } from "../controllers/UserController.js";

const router = express.Router();

// Routes:
router.post("/register", UserController);

// Export:
export default router;