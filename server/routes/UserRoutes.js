import express from "express";
import userController from "../controllers/UserController.js";
import { isAuth } from "../middlewares/AuthMiddleware.js";
import { singleUpload } from "../middlewares/MulterMiddleware.js";

const router = express.Router();

// Routes:
router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/profile", isAuth, userController.getProfile);
router.get("/logout", isAuth, userController.logout);
router.put("/profile-update", isAuth, userController.updateProfile);
router.put("/password-update", isAuth, userController.updatePassword);
router.put("/update-picture", isAuth, singleUpload, userController.updateProfilePic);

// Export:
export default router;