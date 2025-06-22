import mongoose, { Schema, model } from "mongoose";




const doctorSchema = new Schema({
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
    clinic_Phone: {
        unique: true,
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
    mln: {
        unique: true,
        required: true,
        type: String
    }, 
    nin: {
        unique: true,
        required: true,
        type: String
    }, 
    profile_Url: {
        required: true,
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
    specialty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialty"
    }, 
    sub_Specialty: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Specialty"
    }, 
    state: {
        unique: true,
        required: true,
        type: String
    }, 
    work_ID: {
        required: true,
        type: String
    },
    certificate_Url: {
        type: String,
        required: true
    },
    cT_Start: {
        type: String,
        required: true
    },
    cT_End: {
        type: String,
        required: true
    },
    created_By: {
        type: String,
        required: true
    },
    updated_By: {
        type: String,
    }  
}, { timestamps: true });

const Doctor = model("Doctor", doctorSchema);

export default Doctor;