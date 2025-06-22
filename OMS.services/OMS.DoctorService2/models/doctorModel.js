import mongoose, { Schema, model } from "mongoose";




const doctorSchema = new Schema({
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
    Clinic_Phone: {
        unique: true,
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
    MLN: {
        unique: true,
        required: true,
        type: String
    }, 
    NIN: {
        unique: true,
        required: true,
        type: String
    }, 
    Profile_Url: {
        required: true,
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
    Specialty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialty"
    }, 
    Sub_Specialty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialty"
    }, 
    State: {
        unique: true,
        required: true,
        type: String
    }, 
    Work_ID: {
        required: true,
        type: String
    },
    Certificate_Url: {
        type: String,
        required: true
    },
    CT_Start: {
        type: String,
        required: true
    },
    CT_End: {
        type: String,
        required: true
    },
    Created_By: {
        type: String,
        required: true
    },
    Updated_By: {
        type: String,
    }  
}, { timestamps: true });

const Doctor = model("Doctor", doctorSchema);

export default Doctor;