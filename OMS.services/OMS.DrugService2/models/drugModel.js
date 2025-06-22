import { Schema, model } from "mongoose";




const drugSchema = new Schema({
    Drug_Name: {
        required: true,
        type: String
    },
    Side_Effects: {
        required: true,
        type: String
    },
    Description: {
        required: true,
        type: String
    },
    Disclaimer: {
        required: true,
        type: String
    },
    Manufacturer: {
        required: true,
        type: String
    },
    Consume_Type: {
        required: true,
        type: String
    }, 
    Price: {
        type: Number,
        required: true
    },
    Expiry_Date: {
        type: String,
        requred: true
    },
    Count_In_Stock: {
        type: String,
        requred: true
    },
    Image : {
        type: String
    }
    Created_By: {
        type: String,
        requred: true
    },
    Updated_By: {
        type: String
    }  
}, { timestamps: true });

const Drug = model("Drug", drugSchema);

export default Drug;