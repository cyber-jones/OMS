import { Schema, model } from "mongoose";
import { ROLES } from "../utils/SD.js";




const userSchema = new Schema({
    email: {
        required: true,
        unique: true,
        type: String
    },
    password: {
        required: true,
        unique: true,
        type: String
    },
    roles: {
        type: [Number],
        enum: [1001, 2002, 3003, 4004],
        default: [4004],
    },
    refreshToken: {
        type: String,
    },
    user_Profile_Id: {
        unique: true,
        type: String
    }
}, { timestamps: true });

const User = model("User", userSchema);

export default User;