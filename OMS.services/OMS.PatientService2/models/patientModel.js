import  { Schema, model } from "mongoose";




const patientSchema = new Schema({
    email: {
        unique: true,
        required: true,
        type: String
    },
    first_Name: {
        required: true,
        type: String
    },
    last_Name: {
        required: true,
        type: String
    },
    middle_Name: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    cell_Phone: {
        unique: true,
        required: true,
        type: String
    }, 
    dob: {
        required: true,
        type: String
    }, 
    nin: {
        unique: true,
        required: true,
        type: String
    }, 
    profile_Url: {
        type: String
    }, 
    relationship: {
        required: true,
        type: String
    }, 
    sex: {
        required: true,
        type: String
    }, 
    state: {
        unique: true,
        required: true,
        type: String
    },
    eC_FullName: {
        unique: true,
        required: true,
        type: String
    },
    eC_Cell_Phone: {
        unique: true,
        required: true,
        type: String
    },
    eC_Address: {
        unique: true,
        required: true,
        type: String
    }
}, { timestamps: true });

const Patient = model("Patient", patientSchema);

export default Patient;