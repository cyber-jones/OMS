import mongoose, { Schema, model } from "mongoose";




const cartHeaderSchema = new Schema({
    User_Id: {
        required: true,
        unique: true,
        type: String
    },
    Sesssion_Id: {
        unique: true,
        type: String
    },
    Payment_Intentent_Id: {
        unique: true,
        type: String
    },
    Total_Count: {
        type: Number,
    },
    Total_Price: {
        type: Number
    }  
}, { timestamps: true });

const CartHeader = model("CartHeader", cartHeaderSchema);

export default CartHeader;