import { Schema, model } from "mongoose";




const drugSchema = new Schema({
    drug_Name: {
        type: String,
        required: true
    },
    side_Effects: {
        type: String
    },
    description: {
        type: String
    },
    disclaimer: {
        type: String
    },
    manufacturer: {
        type: String
    },
    consume_Type: {
        type: String
    }, 
    category: {
        type: String
    }, 
    price: {
        type: Number,
    },
    expiry_Date: {
        type: String,
    },
    count_In_Stock: {
        type: String,
    },
    image : {
        type: String
    },
    created_By: {
        type: String,
    },
    updated_By: {
        type: String
    }  
}, { timestamps: true });

const Drug = model("Drug", drugSchema);

export default Drug;