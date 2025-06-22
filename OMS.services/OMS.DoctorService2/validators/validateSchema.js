import Joi from "joi";



export const DoctorValidator = Joi.object({
    Email: Joi.string().required(),
    First_Name: Joi.string().required(),
    Last_Name: Joi.string().required(),
    Middle_Name: Joi.string().required(),
    Clinic_Phone: Joi.string().required(),
    Cell_Phone: Joi.string().required(),
    Address: Joi.string().required(),
    DOB: Joi.string().required(),
    MLN: Joi.string().required(),
    NIN: Joi.string().required(),
    Profile_Url: Joi.string().required(),
    Relationship: Joi.string().required(),
    Sex: Joi.string().required(),
    Specialty: Joi.string().required(),
    Sub_Specialty: Joi.string().required(),
    Work_ID: Joi.string().required(),
    Certificate_Url: Joi.string().required(),
    CT_Start: Joi.string().required(),
    CT_End: Joi.string().required(),
    Created_By: Joi.string().required(),
    Updated_By: Joi.string()
});

export const SpecialtyValidator = Joi.object({
    Name: Joi.string().required(),
    Description: Joi.string().required()
});

