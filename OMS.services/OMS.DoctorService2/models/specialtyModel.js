import { Schema, model } from "mongoose";




const specialtySchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Specialty = model("Specialty", specialtySchema);

export default Specialty;