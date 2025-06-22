import Joi from "joi";



export const DoctorValidator = Joi.object({
    email: Joi.string().required(),
    first_Name: Joi.string().required(),
    last_Name: Joi.string().required(),
    middle_Name: Joi.string().required(),
    clinic_Phone: Joi.string().required(),
    cell_Phone: Joi.string().required(),
    address: Joi.string().required(),
    dob: Joi.string().required(),
    mln: Joi.string().required(),
    nin: Joi.string().required(),
    profile_Url: Joi.string().required(),
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
    Name: Joi.string().required(),
    Description: Joi.string().required()
});

