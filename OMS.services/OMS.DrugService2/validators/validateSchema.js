import Joi from "joi";



export const DrugValidator = Joi.object({
    Drug_Name: Joi.string().required(),
    Side_Effects: Joi.string().required(),
    Description: Joi.string().required(),
    Disclaimer: Joi.string().required(),
    Manufacturer: Joi.string().required(),
    Consume_Type: Joi.string().required(),
    Price: Joi.string().required(),
    Expiry_Date: Joi.string().required(),
    Count_In_Stock: Joi.number().required(),
    Image: Joi.string().required()
});


export const CartValidator = Joi.object({
    Product: Joi.string().required(),
    Price: Joi.number().required(),
    Count: Joi.number().required()
});
