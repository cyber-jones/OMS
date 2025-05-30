import Joi from "joi";



export const AppointmentValidator = Joi.object({
    specialty_Id: Joi.string().required(),
    doctor_Id: Joi.string().required(),
    patient_Id: Joi.string().required(),
    illness_Description: Joi.string().required(),
    date: Joi.string().required(),
    time: Joi.string().required()
});


export const PrescriptionValidator = Joi.object({
    doctor_Id: Joi.string().required(),
    patient_Id: Joi.string().required(),
    drug_Ids: Joi.array().required(),
    prescription: Joi.string().required()
});


export const MessageValidator = Joi.object({
    sender_Id: Joi.string().required(),
    reciever_Id: Joi.string().required(),
    text: Joi.string(),
    image: Joi.string()
});


export const ApprovalValidator = Joi.object({
    name: Joi.string().required()
});