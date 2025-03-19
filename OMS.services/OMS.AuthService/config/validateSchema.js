import Joi from "joi";



export const userValidator = Joi.object({
    Email: Joi.string().email().required(),
    Password: Joi.string().length(4).required(),
    User_Profile_Id: Joi.string().guid(),
});