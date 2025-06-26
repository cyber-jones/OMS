import jwt from "jsonwebtoken";
import {
  RegistrationValidator,
  LoginValidator,
  PasswordValidator,
  EmailValidator,
  OTPValidator,
} from "../validator/validateSchema.js";
import User from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import { ROLES } from "../utils/SD.js";
import { Logger } from "../utils/log.js";
import mail from "../config/emailConfig.js";
import generateId from "../utils/generateID.js";

export const registerUser = async (req, res, next) => {
  try {
    const { Role: role, ...data } = req.body;
    const { error, value } = RegistrationValidator.validate(data);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const isRegisterd = await User.findOne({ email: value.Email });

    if (isRegisterd)
      return res
        .status(200)
        .json({ success: true, message: "User already exist!" });

    const passHashed = bcryptjs.hashSync(
      value.Password,
      bcryptjs.genSaltSync(10)
    );
    const newUser = new User({
      password: passHashed,
      email: value.Email,
      accType: value.AccType,
      user_Profile_Id: value.User_Profile_Id,
    });
    newUser.roles.push(role);

    await Logger(req.email, "New authUser", newUser.email);

    await newUser.save();
    const { password: pass, refreshToken: refresh, ...rest } = newUser._doc;

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      body: { ...rest, roles: newUser.roles },
    });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { error, value } = LoginValidator.validate(req.body);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const user = await User.findOne({ email: value.Email });

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Email has not been registered" });

    var isValidPassword = bcryptjs.compareSync(value.Password, user.password);
    if (!isValidPassword)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect Password" });

    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.REFRESH_TOKEN_SECRETE,
      {
        expiresIn: "1d",
        issuer: process.env.ISSUER,
        audience: process.env.AUDIENCE,
      }
    );

    user.refreshToken = refreshToken;
    user.loggedIn = true;
    await user.save();

    const accessToken = jwt.sign(
      { id: user._id, email: user.email, roles: user.roles },
      process.env.ACCESS_TOKEN_SECRETE,
      {
        algorithm: "HS256",
        issuer: process.env.ISSUER,
        audience: process.env.AUDIENCE,
        expiresIn: "1h",
      }
    );

    const { password: pass, refreshToken: refresh, ...rest } = user._doc;

    const cookieOpt = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    };

    return res
      .cookie("jwt", refreshToken, cookieOpt)
      .status(200)
      .json({ success: true, body: { ...rest, accessToken } });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).lean();
    return res.status(200).json({ success: true, users });
  } catch (err) {
    next(err);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const users = await User.findById(req.params.id);

    if (users.roles.includes(ROLES[0]))
      return res
        .status(400)
        .json({ success: false, message: "User is already an admin!" });
    else users.roles.push(ROLES[0]);

    await Logger(req.email, "Updated authUser role", user.email);

    return res
      .status(200)
      .json({ success: true, message: "Admin assigned successfully!" });
  } catch (err) {
    next(err);
  }
};

export const updateEmail = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user, {
      $set: { email: req.body },
    });

    await Logger(req.email, "Updated authUser email", user.email);
    return res
      .status(205)
      .json({ success: true, message: "Admin assigned successfully!" });
  } catch (err) {
    next(err);
  }
};

export const forgetPassword = async (req, res, next) => {
  try {
    const { error, value } = EmailValidator.validate(req.body);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    const user = await User.findOne({ email: value.Email });

    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "Email is has not been registered" });

    await Logger(user.email, "Forget authUser password", user.email);

    const otp = generateId();
    user.otp = otp;

    await user.save();
    await mail(
      user.email,
      `${user.email}`,
      "Password Reset",
      "Expires in 5mins " + otp
    );

    const otpToken = jwt.sign(
      { id: user._id, email: user.email, roles: user.roles, otp: otp },
      process.env.ACCESS_TOKEN_SECRETE,
      {
        algorithm: "HS256",
        issuer: process.env.ISSUER,
        audience: process.env.AUDIENCE,
        expiresIn: 1000 * 60 * 5,
      }
    );

    const cookieOpt = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 1000 * 60 * 5,
    };

    return res.cookie("restToken", otpToken, cookieOpt).status(200).json({
      success: true,
      otpToken,
      message: "A token has been sent to your email",
    });
  } catch (err) {
    next(err);
  }
};

export const verifyOTP = async (req, res, next) => {
  try {
    const { error, value } = OTPValidator.validate(req.body);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    if (value.otp !== req.otp)
      return res
        .status(400)
        .json({ success: false, message: "OTP is not valid!" });

    return res
      .status(200)
      .json({ success: true, message: "OTP is valid" });
  } catch (err) {
    next(err);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { error, value } = PasswordValidator.validate(req.body);

    if (error)
      return res.status(400).json({ success: false, message: error.message });

    if (value.Password !== value.ConfirmPassword)
      return res
        .status(400)
        .json({ success: false, message: "Password do not match" });

    const passHashed = bcryptjs.hashSync(
      value.Password,
      bcryptjs.genSaltSync(10)
    );

    const user = await User.findByIdAndUpdate(req.user, {
      $set: { password: passHashed },
    });

    await Logger(req.email, "Updated authUser password", user.email);
    return res
      .clearCookie("restToken")
      .status(205)
      .json({ success: true, message: "Passowrd updated successfully!" });
  } catch (err) {
    next(err);
  }
};

export const logout = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user, {
      $set: { loggedIn: false },
    });

    return res
      .clearCookie("jwt")
      .status(205)
      .json({ success: true, message: "Passowrd updated successfully!" });
  } catch (err) {
    next(err);
  }
};
