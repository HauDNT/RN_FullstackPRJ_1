import express from "express";
import categoryController from "../controllers/CategoryController.js";
import { isAuth } from "../middlewares/AuthMiddleware.js";
import { singleUpload } from "../middlewares/MulterMiddleware.js";

const router = express.Router();

// Routes:
router.post("/create", isAuth, categoryController.createCategory);
router.get("/all", categoryController.getAllCategories);
router.put("/update/:id", isAuth, categoryController.updateACategory);
router.delete("/delete/:id", isAuth, categoryController.deleteACategory);



export default router;
