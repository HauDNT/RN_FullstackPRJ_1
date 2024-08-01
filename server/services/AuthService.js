import JWT from "jsonwebtoken";
import UserModel from "../models/UserModel.js";

class AuthService {
    generateToken(email) {
        const userId = UserModel.findOne({email}).select('_id').lean();

        return JWT.sign(
            { _id: +userId }, 
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "7d",
            }
        );
    }
};

const authService = new AuthService();

export default authService;