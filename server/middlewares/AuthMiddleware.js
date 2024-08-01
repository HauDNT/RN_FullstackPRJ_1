import JWT from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

export const isAuth = async (req, res, next) => {
    const {token} = req.cookies;

    // Validation
    if (!token) {
        return res.status(401).send({
            success: false,
            message: "Unauthorized user",
        });
    };

    const decodeData = JWT.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await UserModel.findById(decodeData._id);
    
    next();

}