import express from "express";
import productController from "../controllers/ProductController.js";
import { isAuth } from "../middlewares/AuthMiddleware.js";
import { singleUpload } from "../middlewares/MulterMiddleware.js";

const router = express.Router();

// Routes:
router.get("/get-all", productController.getAllProducts);
router.get("/:id", productController.getSingleProduct);
router.post("/create", isAuth, singleUpload, productController.createProduct);
router.put("/:id", isAuth, productController.updateProduct);
router.put("/images-update/:id", isAuth, singleUpload, productController.updateProductImages);

export default router;