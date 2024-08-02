import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required",
        ]
    },
    email: {
        type: String,
        required: [
            true,
            "Email is required",
        ],
        unique: [
            true,
            "Email is already taken",
        ],
    },
    password: {
        type: String,
        required: function() {
            return this.isNew || this.isModified('password');   // Chỉ yêu cầu mật khẩu khi tạo tài khoản hoặc có thay đổi mật khẩu
        },
        minLength: [6, "Password length should be greater than 6 characters"],
    },
    address: {
        type: String,
        required: [
            true,
            "Address is required",
        ],
    },
    city: {
        type: String,
        required: [
            true,
            "City name is required",
        ],
    },
    contact: {
        type: String,
        required: [
            true,
            "Phone number is required",
        ],
    },
    avatar: {
        type: String,
    }
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);
export default User;