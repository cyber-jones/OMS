import { Schema, model } from "mongoose";




const prescriptionSchema = new Schema({
    doctor_Id: {
        required: true,
        type: String
    },
    patient_Id: {
        required: true,
        type: String
    },
    drug_Ids: {
        required: true,
        type: [String]
    },
    prescription: {
        required: true,
        type: String
    },
    approved: {
        type: Boolean,
        default: false
    },
    approved_By: {
        type: String,
    },
    disapproved_By: {
        type: String,
    } 
}, { timestamps: true });

const Prescription = model("Prescription", prescriptionSchema);

export default Prescription;