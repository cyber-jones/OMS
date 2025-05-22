import { Schema, model } from "mongoose";




const appointmentSchema = new Schema({
    specialty_Id: {
        required: true,
        type: String
    },
    doctor_Id: {
        required: true,
        type: String
    },
    patient_Id: {
        required: true,
        type: String
    },
    date: {
        required: true,
        type: Date
    },
    time: {
        required: true,
        type: Date
    },
    illness_Description: {
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

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;