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
    RecieverEmail: Joi.string().email().required(),
    Name: Joi.string().required(),
    Title: Joi.string().required(),
    Description: Joi.string().required()
});