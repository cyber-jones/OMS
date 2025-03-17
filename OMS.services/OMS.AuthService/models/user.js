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
        default: [ROLES.patient],
        type: Number,
        required: true
    },
    refreshToken: {
        type: String,
    },
    user_Profile_Id: {
        unique: true,
        type: String
    }
}, { timestamps: true });

const User =  model("User", userSchema);

export default User;