import Joi from "joi";



export const RegistrationValidator = Joi.object({
    Email: Joi.string().email().required(),
    Password: Joi.string().length(4).required(),
    User_Profile_Id: Joi.string().guid(),
});


export const LoginValidator = Joi.object({
    Email: Joi.string().email().required(),
    Password: Joi.string().length(4).required(),
});