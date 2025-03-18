import Joi from "joi";



export const userValidator = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().length(4).required(),
    roles: Joi.number(),
});