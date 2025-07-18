import mongoose, { Schema, model } from "mongoose";




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
        type: [String],
        enum: ["admin", "doctor", "staff", "patient"]
    },
    accType: {
        required: true,
        type: String
    },
    refreshToken: {
        type: String,
    },
    user_Profile_Id: {
        unique: true,
        type: mongoose.Schema.Types.ObjectId
    },
    loggedIn: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String
    }
}, { timestamps: true });

const User = model("User", userSchema);

export default User;