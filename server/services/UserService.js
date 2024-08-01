import bcrypt from "bcryptjs";
import UserModel from "../models/UserModel.js";

class UserService {
    validationFields (fields, data) {
        for (let field of fields) {
            if (!data[field]) {
                return {
                    success: false,
                    message: `Please provide field ${field}`,
                };
            }
        }

        return { success: true };
    };

    async checkEmailExist(email) {
        const emailExist = await UserModel.findOne({email});

        if (emailExist) {
            return {
                success: false,
                message: "Email already taken",
            }
        }

        return {success: true};
    };

    async hashingPassword (password) {
        try {
            const passwordHashed = await bcrypt.hash(password, 10);
            return passwordHashed;
        } catch (error) {
            throw new Error('Error hashing password');
        }
    }

    async comparePassword (email, plainPassword) {
        try {
            const user = await UserModel.findOne({email});
            const compareStatus = await bcrypt.compare(plainPassword, user.password);

            if (!compareStatus)
                return {
                    success: false,
                    message: "Password is incorrect",
                }
            
            return {success: true};
        } catch (error) {
            throw new Error('Error hashing password');
        }
    }

    async createNewUser(data) {
        try {
            const passwordHashed = await this.hashingPassword(data.password);
            data = {...data, password: passwordHashed};

            await UserModel.create(data);

            return {
                success: true,
                message: "Register success",
            };
        } catch (error) {
            return {
                success: false,
                message: "Error in register API",
            };
        }
    }
}

export default UserService;