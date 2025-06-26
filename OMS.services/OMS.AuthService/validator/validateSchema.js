import Joi from "joi";



export const RegistrationValidator = Joi.object({
    Email: Joi.string().email().required(),
    Password: Joi.string().length(4).required(),
    AccType: Joi.string().required(),
    User_Profile_Id: Joi.string().required(),
});


export const LoginValidator = Joi.object({
    Email: Joi.string().email().required(),
    Password: Joi.string().required()
});


export const EmailValidator = Joi.object({
    Email: Joi.string().email().required(),
});


export const OTPValidator = Joi.object({
    otp: Joi.string().length(5).required().error(new Error("Invalid otp format")),
});


export const PasswordValidator = Joi.object({
    Password: Joi.string().length(4).required(),
    ConfirmPassword: Joi.string().length(4).required(),
});