import { Schema, model } from "mongoose";




const appointmentSchema = new Schema({
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
    date: {
        required: true,
        type: Date
    },
    approved: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;