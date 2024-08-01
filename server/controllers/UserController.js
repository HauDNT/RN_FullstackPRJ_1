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
                const isPassMatch = await userService.comparePassword(data.email, data.password);

                if (!isPassMatch.success) {
                    return res.status(500).send({
                        success: false,
                        message: "Invalid creadentials",
                    });
                };

                // Generate token:
                const token = authService.generateToken(data.email);

                return res
                        .status(200)
                        .cookie(
                            "token", 
                            token, 
                            {
                                expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
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
}

export default UserController;