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
        type: String
    },
    time: {
        required: true,
        type: String
    },
    illness_Description: {
        required: true,
        type: String
    }, 
    status: {
        type: String,
        default: "pending"
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