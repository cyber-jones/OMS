import { Schema, model } from "mongoose";




const logSchema = new Schema({
    blame: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
    victim: {
        required: true,
        type: String
    }
}, { timestamps: true });

const Log = model("log", logSchema);

export default Log;