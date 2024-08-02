import userService from "../services/UserService.js";
import authService from "../services/AuthService.js";

class UserController {
    async register (req, res) {
        try {
            const fields = ['name', 'email', 'password', 'address', 'city', 'contact'];
    
            // Validation:
            const validationFields = userService.validationFields(fields, req.body);
    
            if (!validationFields) return res.status(500).send(validationFields);
    
            // Check exisiting user email:
            const exisitingUser = await userService.checkEmailExist(req.body.email);
    
            if (exisitingUser.success) {
                // Create new user:
                const newUser = await userService.createNewUser(req.body);
    
                if (newUser.success) {
                    return res.status(200).send(newUser);
                }
                else {
                    return res.status(500).send(newUser);
                }
            }
            else
                return res.status(500).send(exisitingUser);
    
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Error in register API",
            });
        }
    }

    async login (req, res) {
        const data = req.body;

        try {
            // Validation:
            const validationFields = userService.validationFields(['email', 'password'], data);
            if (!validationFields.success) return res.status(500).send(validationFields);

            // Check email user exists:
            const checkEmail = await userService.checkEmailExist(data.email);

            // User validation:
            if (!checkEmail.success)      // Nghĩa là tìm thấy email/user trong DB
            {
                // Check password:
                const isPassMatch = await userService.comparePassword(data.email, "email", data.password);

                if (!isPassMatch.success) {
                    return res.status(500).send({
                        success: false,
                        message: "Invalid creadentials",
                    });
                };

                // Generate token:
                const token = await authService.generateToken(data.email);

                return res
                        .status(200)
                        .cookie(
                            "token", 
                            token, 
                            {
                                expires: new Date(Date.now() + 8 * 3600000),
                                secure: process.env.NODE_ENV === "development" ? true : false,
                                httpOnly: process.env.NODE_ENV === "development" ? true : false,
                                sameSite: process.env.NODE_ENV === "development" ? true : false,
                            },
                        )
                        .send({
                            success: true,
                            message: "Login success",
                            token,
                        });
            }
            else {
                return res.status(500).send({
                    success: false,
                    message: "User not found",
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: "false",
                message: "Error in login API",
                error,
            });
        }
    }

    async getProfile(req, res) {
        try {
            const userProfile = await userService.getUserById(req.user._id);

            return res.status(200).send({
                success: true,
                message: "User profile fetched success",
                userProfile,
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Error in profile API",
                error,
            });
        }
    }

    async logout (req, res) {
        try {
            res
                .status(200)
                .cookie(
                    "token", 
                    "", 
                    {
                        expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
                        secure: process.env.NODE_ENV === "development" ? true : false,
                        httpOnly: process.env.NODE_ENV === "development" ? true : false,
                        sameSite: process.env.NODE_ENV === "development" ? true : false,
                    },
                )
                .send({
                    success: true,
                    message: "Logout success",
                });
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Error in logout API",
                error,
            });
        }
    }

    async updateProfile(req, res) {
        try {
            const user = await userService.getUserById(req.user._id, true);
    
            // Danh sách các trường cần cập nhật
            const fieldsToUpdate = ['name', 'email', 'address', 'city', 'contact'];
    
            // Cập nhật các trường nếu có trong req.body
            fieldsToUpdate.forEach(field => {
                if (req.body[field] !== undefined) {
                    user[field] = req.body[field];
                }
            });
    
            // Lưu user
            await user.save();
    
            return res.status(200).send({
                success: true,
                message: "User's profile updated!",
            });
        } catch (error) {
            return res.status(500).send({
                success: false,
                message: "Error in update profile API",
                error,
            });
        }
    }

    async updatePassword (req, res) {
        try {
            const user = await userService.getUserById(req.user._id);

            const { oldPassword, newPassword } = req.body;

            // Validation
            const validFields = userService.validationFields(['oldPassword', 'newPassword'], req.body);

            if (!validFields.success) {
                return res.status(500).send(validFields);
            }

            // Old password check
            const matchPassword = await userService.comparePassword(req.user._id, "_id", oldPassword);
                        
            if (!matchPassword.success) {
                return res.status(500).send(matchPassword);
            };

            // Hash password
            const newPasswordHashed = await userService.hashingPassword(newPassword);
            
            user.password = newPasswordHashed;

            // Save user
            await user.save();

            return res.status(200).send({
                success: true,
                message: "User's password updated!",
            });
        } catch (error) {
            console.log(error);
            return res.status(500).send({
                success: false,
                message: "Error in update profile API",
                error,
            });
        }
    }
}

const userController = new UserController();
export default userController;