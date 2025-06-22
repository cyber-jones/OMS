import Joi from "joi";



export const StaffValidator = Joi.object({
    Email: Joi.string().required(),
    First_Name: Joi.string().required(),
    Last_Name: Joi.string().required(),
    Middle_Name: Joi.string().required(),
    Cell_Phone: Joi.string().required(),
    Address: Joi.string().required(),
    DOB: Joi.string().required(),
    NIN: Joi.string().required(),
    Relationship: Joi.string().required(),
    Sex: Joi.string().required(),
    State: Joi.string().required(),
    Work_ID: Joi.string().required(),
    Password: Joi.string().required(),
    Updated_By: Joi.string()
});

