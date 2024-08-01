import UserModel from "../models/UserModel.js";

export const UserController = async (req, res) => {
    try {
        const {name, email, password, address, city, contact} = req.body;

        // Validation:
        if (!name || !email || !password || !address || !city || !contact)
        {
            return res.status(500).send({
                success: false,
                message: "Please provide all fields",
            });
        }

        const user = await UserModel.create({
            name, email, password, address, city, contact
        });

        return res.status(201).send({
            success: true,
            message: "Register success, please login now.",
            user,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error in register API",
        });
    }
}