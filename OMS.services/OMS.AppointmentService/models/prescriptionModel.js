import { Schema, model } from "mongoose";




const prescriptionSchema = new Schema({
    doctor_Id: {
        required: true,
        unique: true,
        type: String
    },
    patient_Id: {
        required: true,
        unique: true,
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
    status: {
        required: true,
        type: String
    }
}, { timestamps: true });

const prescription = model("Prescription", prescriptionSchema);

export default prescription;