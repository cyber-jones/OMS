import { Schema, model } from "mongoose";




const specialtySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_By: {
        type: String,
        required: true
    },
    updated_By: {
        type: String
    },
}, { timestamps: true });

const Specialty = model("Specialty", specialtySchema);

export default Specialty;