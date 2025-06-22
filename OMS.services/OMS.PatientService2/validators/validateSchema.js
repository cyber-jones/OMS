import Joi from "joi";



export const PatientValidator = Joi.object({
    email: Joi.string().required(),
    first_Name: Joi.string().required(),
    last_Name: Joi.string().required(),
    middle_Name: Joi.string().required(),
    cell_Phone: Joi.string().required(),
    address: Joi.string().required(),
    dob: Joi.string().required(),
    nin: Joi.string().required(),
    relationship: Joi.string().required(),
    sex: Joi.string().required(),
    state: Joi.string().required(),
    eC_FullName: Joi.string().required(),
    eC_Address: Joi.string().required(),
    eC_Cell_Phone: Joi.string().required()
});


