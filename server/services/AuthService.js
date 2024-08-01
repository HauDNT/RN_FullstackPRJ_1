import JWT from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

class AuthService {
    async generateToken(email) {
        const userId = await UserModel.findOne({email}).select('_id').lean();

        return JWT.sign(
            { _id: userId._id.toString() }, 
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "7d",
            }
        );
    }
};

const authService = new AuthService();

export default authService;