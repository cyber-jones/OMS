import jwt from "jsonwebtoken";
import { userValidator } from "../config/validateSchema.js";
import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
import { isValidRole } from "../utils/isValidRole.js";









export const registerUser = async (req, res, next) => {
    try {
        const { error, value } = userValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        if (isValidRole(value.role))
            return res.status(400).json({ success: false, message: "Role is not valid!"});

        const isRegisterd = await User.findOne({ email: value.email });

        if (isRegisterd) 
            return res.status(200).json({ success: true, message: "User already exist!"});
    

        const passHashed = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
        const newUser = new User({ password: passHashed, email: value.email, user_Profile_Id: value.user_Profile_Id });
        newUser.roles.push(value.role);

        await newUser.save();
        const roles = Object.values(newUser.roles).filter(Boolean);
        const { password: pass, refreshToken: refresh, ...rest } = newUser._doc;

        return res.status(201).json({ success: true, message: "User created successfully", user: { ...rest, roles: roles } });

    } catch (err) {
        next(err);
    }
}





export const loginUSer = async (req, res, next) => {
    try {
        const { error, value } = userValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const user = await User.findOne({ email: value.email });

        if (!user) 
            return res.status(200).json({ success: true, message: "Email has not been registered"});
    

        const refreshToken = jwt.sign({ id: user._id }, process.env.REFRESH_TOKEN_SECRETE);
        user.refreshToken = refreshToken;
        await user.save();

        const roles = Object.values(user.roles).filter(Boolean);
        const accessToken = jwt.sign({ id: user._id, email: user.email, roles }, process.env.ACCESS_TOKEN_SECRETE, { expiresIn: "1h" });
        const { password: pass, refreshToken: refresh, ...rest } = user._doc;

        res.cookie("jwt", refreshToken, { httpOnly: true, secure: true, sameSite: "None", maxAge: 1000 * 60 * 60 * 24 * 7 });
        return res.status(200).json({ success: true, user: { ...rest, roles: roles, accessToken } });

    } catch (err) {
        next(err);
    }
}