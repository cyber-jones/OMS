import jwt from "jsonwebtoken";
import { RegistrationValidator, LoginValidator } from "../validator/validateSchema.js";
import User from "../models/userModel.js";
import bcryptjs from 'bcryptjs';
// import { axiosStaff } from "../config/axiosStaffConfig.js";










export const registerUser = async (req, res, next) => {
    try {
        const { Role: role, ...data } = req.body;
        const { error, value } = RegistrationValidator.validate(data);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const isRegisterd = await User.findOne({ email: value.Email });

        if (isRegisterd) 
            return res.status(200).json({ success: true, message: "User already exist!"});
    
        const passHashed = bcryptjs.hashSync(value.Password, bcryptjs.genSaltSync(10));
        const newUser = new User({ password: passHashed, email: value.Email, accType: value.AccType, user_Profile_Id: value.User_Profile_Id });
        newUser.roles.push(role);

        await newUser.save();
        const { password: pass, refreshToken: refresh, ...rest } = newUser._doc;

        return res.status(201).json({ success: true, message: "User created successfully", body: { ...rest, roles: newUser.roles } });

    } catch (err) {
        next(err);
    }
}





export const loginUser = async (req, res, next) => {
    try {
        const { error, value } = LoginValidator.validate(req.body);

        if (error)
            return res.status(400).json({ success: false, message: error.message });

        const user = await User.findOne({ email: value.Email });

        if (!user) 
            return res.status(400).json({ success: false, message: "Email has not been registered"});
    
        var isValidPassword = bcryptjs.compareSync(value.Password, user.password);
        if (!isValidPassword)
            return res.status(400).json({ success: false, message: "Incorrect Password" });
        
        const refreshToken = jwt.sign(
            { id: user._id }, 
            process.env.REFRESH_TOKEN_SECRETE,
            { expiresIn: "1d", issuer: process.env.ISSUER, audience: process.env.AUDIENCE }
        );
        
        user.refreshToken = refreshToken;
        await user.save();


        const accessToken = jwt.sign(
            { id: user._id, email: user.email, roles: user.roles }, 
            process.env.ACCESS_TOKEN_SECRETE, 
            { expiresIn: "1h", issuer: process.env.ISSUER, audience: process.env.AUDIENCE }
        );

        const { password: pass, refreshToken: refresh, ...rest } = user._doc;

        const cookieOpt = { httpOnly: true, sameSite: "None", maxAge: 1000 * 60 * 60 * 24 * 7 }
  
        return res.cookie("jwt", refreshToken, cookieOpt)
                    .status(200).json({ success: true, body: { ...rest, accessToken } });

    } catch (err) {
        next(err);
    }
}





export const getUsers = async (req, res, next) => {
    try {
        const users = await User.find({}).lean();
        return res.status(200).json({ success: true, users });

    } catch (err) {
        next(err);
    }
}