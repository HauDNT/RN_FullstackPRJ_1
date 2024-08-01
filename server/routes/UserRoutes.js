import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();
const userController = new UserController();

// Routes:
router.post("/login", userController.login);
router.post("/register", userController.register);

// Export:
export default router;