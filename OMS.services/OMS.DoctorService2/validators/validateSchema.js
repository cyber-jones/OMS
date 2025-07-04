import Joi from "joi";



export const DoctorValidator = Joi.object({
    email: Joi.string().required(),
    first_Name: Joi.string().required(),
    last_Name: Joi.string().required(),
    middle_Name: Joi.string().required(),
    clinic_Phone: Joi.string().length(11).required().error(new Error("Phone is Invalid")),
    cell_Phone: Joi.string().length(11).required().error(new Error("Phone is Invalid")),
    address: Joi.string().required(),
    dob: Joi.string().required(),
    nin: Joi.string().length(11).required().error(new Error("Invalid nin")),
    mln: Joi.string().required(),
    state: Joi.string().required(),
    relationship: Joi.string().required(),
    sex: Joi.string().required(),
    specialty: Joi.string().required(),
    sub_Specialty: Joi.string().required(),
    work_ID: Joi.string().required(),
    certificate_Url: Joi.string().required(),
    cT_Start: Joi.string().required(),
    cT_End: Joi.string().required()
});

export const SpecialtyValidator = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required()
});

