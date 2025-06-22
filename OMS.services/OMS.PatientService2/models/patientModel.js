import  { Schema, model } from "mongoose";




const patientSchema = new Schema({
    Email: {
        unique: true,
        required: true,
        type: String
    },
    First_Name: {
        required: true,
        type: String
    },
    Last_Name: {
        required: true,
        type: String
    },
    Middle_Name: {
        required: true,
        type: String
    },
    Address: {
        required: true,
        type: String
    },
    Cell_Phone: {
        unique: true,
        required: true,
        type: String
    }, 
    DOB: {
        required: true,
        type: String
    }, 
    NIN: {
        unique: true,
        required: true,
        type: String
    }, 
    Profile_Url: {
        type: String
    }, 
    Relationship: {
        required: true,
        type: String
    }, 
    Sex: {
        required: true,
        type: String
    }, 
    State: {
        unique: true,
        required: true,
        type: String
    },
    EC_FullName: {
        unique: true,
        required: true,
        type: String
    },
    EC_Cell_Phone: {
        unique: true,
        required: true,
        type: String
    },
    EC_Address: {
        unique: true,
        required: true,
        type: String
    }
}, { timestamps: true });

const Patient = model("Patient", patientSchema);

export default Patient;