import express from "express";
import orderController from "../controllers/OrderController.js";
import { isAuth } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

// Routes:
router.post("/create", isAuth, orderController.createOrder);

export default router;