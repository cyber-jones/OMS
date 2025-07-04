import Joi from "joi";



export const StaffValidator = Joi.object({
    email: Joi.string().required(),
    first_Name: Joi.string().required().length(25).error(new Error("First Name to long")),
    last_Name: Joi.string().required().length(25).error(new Error("Last Name to long")),
    middle_Name: Joi.string().required().length(25).error(new Error("Middle Name to long")),
    cell_Phone: Joi.string().length(11).required().error(new Error("Phone is Invalid")),
    address: Joi.string().required().length(100).error(new Error("Address to long")),
    dob: Joi.string().required(),
    nin: Joi.string().length(11).required().error(new Error("Inavalid NIN")),
    relationship: Joi.string().required(),
    sex: Joi.string().required(),
    state: Joi.string().required(),
    work_ID: Joi.string().length(8).required().error(new Error("Inavalid Work ID"))
});

