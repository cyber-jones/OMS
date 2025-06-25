import Joi from "joi";



export const DrugValidator = Joi.object({
    drug_Name: Joi.string().required(),
    side_Effects: Joi.string().required(),
    description: Joi.string().required(),
    disclaimer: Joi.string().required(),
    manufacturer: Joi.string().required(),
    consume_Type: Joi.string().required(),
    category: Joi.string().required(),
    price: Joi.string().required(),
    expiry_Date: Joi.string().required(),
    count_In_Stock: Joi.number().required()
});


export const CartValidator = Joi.object({
    product: Joi.string().required(),
    price: Joi.number().required(),
    count: Joi.number().required()
});
