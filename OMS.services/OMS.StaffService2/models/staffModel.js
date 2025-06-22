import  { Schema, model } from "mongoose";




const staffSchema = new Schema({
    Email: {
        unique: true,
        required: true,
        type: String
    },
    First_Name: {
        required: true,
        type: String
    },
    Last_Name: {
        required: true,
        type: String
    },
    Middle_Name: {
        required: true,
        type: String
    },
    Address: {
        required: true,
        type: String
    },
    Cell_Phone: {
        unique: true,
        required: true,
        type: String
    }, 
    DOB: {
        required: true,
        type: String
    }, 
    NIN: {
        unique: true,
        required: true,
        type: String
    }, 
    Profile_Url: {
        type: String
    }, 
    Relationship: {
        required: true,
        type: String
    }, 
    Sex: {
        required: true,
        type: String
    }, 
    State: {
        unique: true,
        required: true,
        type: String
    },
    Work_ID: {
        unique: true,
        required: true,
        type: String
    }
}, { timestamps: true });

const Staff = model("Staff", staffSchema);

export default Staff;