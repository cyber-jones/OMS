import { Schema, model } from "mongoose";




const logSchema = new Schema({
    Blame: {
        required: true,
        type: String
    },
    Description: {
        required: true,
        type: String
    },
    Victim: {
        required: true,
        type: String
    }
}, { timestamps: true });

const Log = model("log", logSchema);

export default Log;